(() => {
  const dialog = document.querySelector("#parserDialog");
  if (!dialog || dialog.dataset.imageOcrReady === "true") return;
  dialog.dataset.imageOcrReady = "true";

  const TESSERACT_CDN = "https://cdn.jsdelivr.net/npm/tesseract.js@7/dist/tesseract.min.js";
  const MAX_IMAGE_BYTES = 15 * 1024 * 1024;
  let selectedImage = null;
  let selectedImageUrl = "";
  let ocrWorker = null;
  let ocrBusy = false;

  const style = document.createElement("style");
  style.textContent = `
    .parser-input-tabs{display:flex;gap:7px;margin-bottom:12px;padding:4px;border:1px solid var(--line);border-radius:12px;background:var(--panel)}
    .parser-input-tab{flex:1;min-height:36px;border:0;border-radius:9px;background:transparent;color:var(--muted);font-size:.82rem;font-weight:760}
    .parser-input-tab.is-active{background:var(--blue-soft);color:var(--blue)}
    .parser-input-view[hidden]{display:none!important}
    .image-dropzone{display:grid;place-items:center;min-height:220px;padding:18px;border:1.5px dashed color-mix(in srgb,var(--muted) 40%,var(--line));border-radius:15px;background:var(--panel);text-align:center;transition:.18s}
    .image-dropzone.is-dragging{border-color:var(--blue);background:var(--blue-soft)}
    .image-dropzone__icon{display:grid;place-items:center;width:48px;height:48px;margin:0 auto 10px;border-radius:14px;background:var(--blue-soft);color:var(--blue);font-size:1.3rem;font-weight:900}
    .image-dropzone strong{display:block;font-size:.92rem}.image-dropzone small{display:block;margin-top:5px;color:var(--muted);line-height:1.45}.image-dropzone input{display:none}
    .image-preview-wrap{display:none;position:relative;min-height:220px;overflow:hidden;border:1px solid var(--line);border-radius:15px;background:#0a1020}
    .image-preview-wrap.has-image{display:grid;place-items:center}.image-preview-wrap img{display:block;max-width:100%;max-height:330px;object-fit:contain}
    .image-preview-meta{position:absolute;left:9px;right:9px;bottom:9px;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;border-radius:10px;background:rgba(5,12,27,.82);color:#f5f7ff;backdrop-filter:blur(7px);font-size:.75rem}
    .image-preview-meta button{border:0;background:transparent;color:#ff9fac;font-weight:800}
    .ocr-actions{display:flex;align-items:center;gap:9px;margin-top:11px}.ocr-actions .button{flex:1}
    .ocr-progress{margin-top:11px;padding:11px 12px;border:1px solid var(--line);border-radius:12px;background:var(--panel)}.ocr-progress[hidden]{display:none}
    .ocr-progress__top{display:flex;justify-content:space-between;gap:10px;color:var(--muted);font-size:.78rem;font-weight:700}
    .ocr-progress__track{height:7px;margin-top:8px;overflow:hidden;border-radius:999px;background:var(--line)}
    .ocr-progress__bar{width:0;height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--blue),var(--purple));transition:width .2s ease}
    .ocr-privacy{margin:9px 0 0;color:var(--muted);font-size:.74rem;line-height:1.45}
  `;
  document.head.append(style);

  const inputPane = dialog.querySelector(".parser-dialog-grid .parser-dialog-pane");
  const heading = dialog.querySelector(".parser-dialog-heading h2");
  const headingCopy = dialog.querySelector(".parser-dialog-heading p:not(.panel-kicker)");
  const slipInput = dialog.querySelector("#slipInput");
  const clearSlipBtn = dialog.querySelector("#clearSlipBtn");
  const addDetectedBtn = dialog.querySelector("#addDetectedBtn");
  if (!inputPane || !slipInput) return;

  if (heading) heading.textContent = "Paste text or read a screenshot";
  if (headingCopy) headingCopy.textContent = "EdgeLog detects the event, market, odds, stake, result, and status.";

  const tabs = document.createElement("div");
  tabs.className = "parser-input-tabs";
  tabs.setAttribute("role", "tablist");
  tabs.innerHTML = `<button class="parser-input-tab is-active" type="button" data-parser-tab="text" role="tab" aria-selected="true">Paste text</button><button class="parser-input-tab" type="button" data-parser-tab="image" role="tab" aria-selected="false">Upload image</button>`;

  const textView = document.createElement("div");
  textView.className = "parser-input-view";
  textView.dataset.parserView = "text";
  const paneHeading = inputPane.querySelector(".panel-heading");
  const nodesToMove = [...inputPane.childNodes].filter((node) => node !== paneHeading);
  nodesToMove.forEach((node) => textView.append(node));
  inputPane.append(tabs, textView);

  const imageView = document.createElement("div");
  imageView.className = "parser-input-view";
  imageView.dataset.parserView = "image";
  imageView.hidden = true;
  imageView.innerHTML = `
    <label class="image-dropzone" id="imageDropzone" for="betslipImageInput">
      <input id="betslipImageInput" type="file" accept="image/png,image/jpeg,image/webp,image/bmp" capture="environment">
      <span><span class="image-dropzone__icon">▧</span><strong>Drop a screenshot here or choose an image</strong><small>PNG, JPG, WebP, or BMP up to 15 MB. You can also paste an image from the clipboard.</small></span>
    </label>
    <div class="image-preview-wrap" id="imagePreviewWrap"><img id="imagePreview" alt="Selected betslip preview"><div class="image-preview-meta"><span id="imageFileMeta"></span><button id="removeImageBtn" type="button">Remove</button></div></div>
    <div class="ocr-actions"><button id="readImageBtn" class="button primary" type="button" disabled>Read text from image</button></div>
    <div class="ocr-progress" id="ocrProgress" hidden><div class="ocr-progress__top"><span id="ocrProgressLabel">Preparing OCR…</span><span id="ocrProgressValue">0%</span></div><div class="ocr-progress__track"><div class="ocr-progress__bar" id="ocrProgressBar"></div></div></div>
    <p class="ocr-privacy">The screenshot stays in your browser. OCR code and English/Vietnamese language data are loaded when first used.</p>`;
  inputPane.append(imageView);

  const imageInput = imageView.querySelector("#betslipImageInput");
  const imageDropzone = imageView.querySelector("#imageDropzone");
  const imagePreviewWrap = imageView.querySelector("#imagePreviewWrap");
  const imagePreview = imageView.querySelector("#imagePreview");
  const imageFileMeta = imageView.querySelector("#imageFileMeta");
  const readImageBtn = imageView.querySelector("#readImageBtn");
  const ocrProgress = imageView.querySelector("#ocrProgress");
  const ocrProgressLabel = imageView.querySelector("#ocrProgressLabel");
  const ocrProgressValue = imageView.querySelector("#ocrProgressValue");
  const ocrProgressBar = imageView.querySelector("#ocrProgressBar");

  function switchTab(name) {
    tabs.querySelectorAll("[data-parser-tab]").forEach((button) => {
      const active = button.dataset.parserTab === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    inputPane.querySelectorAll("[data-parser-view]").forEach((view) => { view.hidden = view.dataset.parserView !== name; });
  }

  function updateProgress(status, progress = 0) {
    const safe = Math.max(0, Math.min(1, Number(progress) || 0));
    ocrProgress.hidden = false;
    ocrProgressLabel.textContent = status || "Reading image…";
    ocrProgressValue.textContent = `${Math.round(safe * 100)}%`;
    ocrProgressBar.style.width = `${Math.round(safe * 100)}%`;
  }

  function resetProgress() {
    ocrProgress.hidden = true;
    ocrProgressLabel.textContent = "Preparing OCR…";
    ocrProgressValue.textContent = "0%";
    ocrProgressBar.style.width = "0%";
  }

  function formatFileSize(bytes) {
    return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function clearImage() {
    selectedImage = null;
    imageInput.value = "";
    if (selectedImageUrl) URL.revokeObjectURL(selectedImageUrl);
    selectedImageUrl = "";
    imagePreview.removeAttribute("src");
    imagePreviewWrap.classList.remove("has-image");
    imageDropzone.hidden = false;
    imageFileMeta.textContent = "";
    readImageBtn.disabled = true;
    resetProgress();
  }

  function setSelectedImage(file) {
    if (!file || !file.type.startsWith("image/")) return toast("Choose a valid image file");
    if (file.size > MAX_IMAGE_BYTES) return toast("Image is larger than 15 MB");
    clearImage();
    selectedImage = file;
    selectedImageUrl = URL.createObjectURL(file);
    imagePreview.src = selectedImageUrl;
    imagePreviewWrap.classList.add("has-image");
    imageDropzone.hidden = true;
    imageFileMeta.textContent = `${file.name || "Clipboard image"} · ${formatFileSize(file.size)}`;
    readImageBtn.disabled = false;
    switchTab("image");
  }

  function loadTesseract() {
    if (globalThis.Tesseract) return Promise.resolve(globalThis.Tesseract);
    if (loadTesseract.promise) return loadTesseract.promise;
    loadTesseract.promise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = TESSERACT_CDN;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => globalThis.Tesseract ? resolve(globalThis.Tesseract) : reject(new Error("OCR library did not load"));
      script.onerror = () => reject(new Error("Could not download OCR library"));
      document.head.append(script);
    });
    return loadTesseract.promise;
  }

  async function preprocessImage(file) {
    const bitmap = await createImageBitmap(file);
    const longest = Math.max(bitmap.width, bitmap.height);
    const scale = Math.min(2.2, Math.max(1, 1800 / longest));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    let total = 0;
    for (let i = 0; i < data.length; i += 4) total += data[i] * .299 + data[i + 1] * .587 + data[i + 2] * .114;
    const invert = total / (data.length / 4) < 115;
    for (let i = 0; i < data.length; i += 4) {
      let gray = data[i] * .299 + data[i + 1] * .587 + data[i + 2] * .114;
      if (invert) gray = 255 - gray;
      gray = Math.max(0, Math.min(255, ((gray - 128) * 1.35) + 128));
      data[i] = data[i + 1] = data[i + 2] = gray;
      data[i + 3] = 255;
    }
    context.putImageData(imageData, 0, 0);
    return new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Could not prepare image")), "image/png", .95));
  }

  async function getWorker() {
    if (ocrWorker) return ocrWorker;
    const Tesseract = await loadTesseract();
    ocrWorker = await Tesseract.createWorker(["eng", "vie"], 1, { logger(message) {
      if (!ocrBusy) return;
      const label = String(message.status || "Reading image").replace(/_/g, " ");
      updateProgress(label.charAt(0).toUpperCase() + label.slice(1), message.progress || 0);
    }});
    await ocrWorker.setParameters({ preserve_interword_spaces: "1" });
    return ocrWorker;
  }

  async function readImage() {
    if (!selectedImage || ocrBusy) return;
    ocrBusy = true;
    readImageBtn.disabled = true;
    readImageBtn.textContent = "Reading image…";
    updateProgress("Preparing image…", .02);
    try {
      const prepared = await preprocessImage(selectedImage);
      updateProgress("Loading OCR…", .06);
      const worker = await getWorker();
      const result = await worker.recognize(prepared);
      const text = String(result?.data?.text || "").trim();
      if (!text) throw new Error("No readable text was found");
      slipInput.value = text;
      switchTab("text");
      slipInput.dispatchEvent(new Event("input", { bubbles: true }));
      updateProgress("Text extracted", 1);
      toast("Image text extracted — review the detected fields");
    } catch (error) {
      console.error(error);
      updateProgress("OCR failed", 0);
      toast(error?.message || "Could not read this image");
    } finally {
      ocrBusy = false;
      readImageBtn.disabled = !selectedImage;
      readImageBtn.textContent = "Read text from image";
    }
  }

  tabs.querySelectorAll("[data-parser-tab]").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.parserTab)));
  imageInput.addEventListener("change", () => setSelectedImage(imageInput.files?.[0]));
  readImageBtn.addEventListener("click", readImage);
  imageView.querySelector("#removeImageBtn").addEventListener("click", clearImage);
  clearSlipBtn?.addEventListener("click", clearImage);
  addDetectedBtn?.addEventListener("click", clearImage);

  ["dragenter", "dragover"].forEach((name) => imageDropzone.addEventListener(name, (event) => { event.preventDefault(); imageDropzone.classList.add("is-dragging"); }));
  ["dragleave", "drop"].forEach((name) => imageDropzone.addEventListener(name, (event) => { event.preventDefault(); imageDropzone.classList.remove("is-dragging"); }));
  imageDropzone.addEventListener("drop", (event) => setSelectedImage(event.dataTransfer?.files?.[0]));
  dialog.addEventListener("paste", (event) => {
    const item = [...(event.clipboardData?.items || [])].find((entry) => entry.type.startsWith("image/"));
    if (!item) return;
    event.preventDefault();
    setSelectedImage(item.getAsFile());
  });
  dialog.addEventListener("cancel", (event) => { if (ocrBusy) event.preventDefault(); });
  addEventListener("beforeunload", () => {
    if (selectedImageUrl) URL.revokeObjectURL(selectedImageUrl);
    ocrWorker?.terminate?.();
  });
})();