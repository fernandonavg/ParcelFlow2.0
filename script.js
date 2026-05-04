const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const currentFile = document.getElementById("currentFile");
const processBtn = document.getElementById("processBtn");
const exportBtn = document.getElementById("exportBtn");
const clearBtn = document.getElementById("clearBtn");
const dropzone = document.querySelector(".dropzone");

const demoResults = {
  "bill1.pdf": {
    shipper: "Northline Manufacturing",
    shipFrom: "Monterrey, NL",
    bol: "BOL-10482",
    thirdParty: "Central Transport",
    po: "PO-77821"
  },
  "bill2.pdf": {
    shipper: "Laredo Components LLC",
    shipFrom: "Laredo, TX",
    bol: "BOL-22901",
    thirdParty: "Freight Audit Services",
    po: "PO-55190"
  },
  "bill3.pdf": {
    shipper: "Pacific Distribution",
    shipFrom: "Guadalajara, JAL",
    bol: "BOL-90317",
    thirdParty: "Castores Logistics",
    po: "PO-12077"
  }
};

function setActiveFile(fileName) {
  currentFile.textContent = fileName;

  document.querySelectorAll(".file-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.name === fileName);
  });

  const result = demoResults[fileName] || {
    shipper: "",
    shipFrom: "",
    bol: "",
    thirdParty: "",
    po: ""
  };

  document.getElementById("shipper").value = result.shipper;
  document.getElementById("shipFrom").value = result.shipFrom;
  document.getElementById("bol").value = result.bol;
  document.getElementById("thirdParty").value = result.thirdParty;
  document.getElementById("po").value = result.po;
}

function addFiles(files) {
  [...files].forEach((file) => {
    const button = document.createElement("button");
    button.className = "file-item";
    button.dataset.name = file.name;
    button.textContent = file.name;
    button.addEventListener("click", () => setActiveFile(file.name));
    fileList.appendChild(button);
  });

  if (files.length > 0) setActiveFile(files[0].name);
}

fileList.addEventListener("click", (event) => {
  if (event.target.matches(".file-item")) {
    setActiveFile(event.target.dataset.name);
  }
});

fileInput.addEventListener("change", (event) => addFiles(event.target.files));

["dragenter", "dragover"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.add("drag-over");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropzone.classList.remove("drag-over");
  });
});

dropzone.addEventListener("drop", (event) => addFiles(event.dataTransfer.files));

processBtn.addEventListener("click", () => {
  processBtn.textContent = "Processing...";
  processBtn.disabled = true;

  setTimeout(() => {
    processBtn.textContent = "Run OCR";
    processBtn.disabled = false;
    alert("Demo OCR complete. Later, this button can call your Python/API backend.");
  }, 900);
});

exportBtn.addEventListener("click", () => {
  const row = {
    file: currentFile.textContent,
    shipper: document.getElementById("shipper").value,
    shipFrom: document.getElementById("shipFrom").value,
    bol: document.getElementById("bol").value,
    thirdParty: document.getElementById("thirdParty").value,
    po: document.getElementById("po").value
  };

  console.table(row);
  alert("Row exported to the browser console for now.");
});

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".field-form input").forEach((input) => {
    input.value = "";
  });
});
