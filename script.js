// script.js
function showContent(title) {
  const content = document.getElementById("content");

  let text = "";

  switch (title) {
    case "Benchmarking":
      text = "Hier stehen die Benchmarking-Ergebnisse und Analysen.";
      break;
    case "IST Analyse":
      text = "Dies ist die aktuelle Analyse des IST-Zustands.";
      break;
    case "Allgemein":
      text = "Allgemeine Informationen zum Projekt.";
      break;
    default:
      text = "Weitere Informationen folgen in Kürze.";
  }

  content.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
}


const uploadInput = document.getElementById("upload");
const preview = document.getElementById("preview");

uploadInput.addEventListener("change", (e) => {
  preview.innerHTML = "";
  const files = Array.from(e.target.files);
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      if (file.type.includes("pdf")) {
        const iframe = document.createElement("iframe");
        iframe.src = e.target.result;
        iframe.width = "150";
        iframe.height = "200";
        preview.appendChild(iframe);
      } else if (file.type.includes("image")) {
        const img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);
      }
    };
    reader.readAsDataURL(file);
  });
});

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function (e) {
    // Klick auf nav-item, aber nicht auf submenu divs
    if (!e.target.classList.contains('nav-item')) return;

    // Deaktiviere alle anderen
    document.querySelectorAll('.nav-item').forEach(el => {
      if (el !== item) el.classList.remove('active');
    });

    // Toggle aktuelles
    item.classList.toggle('active');
  });
});


