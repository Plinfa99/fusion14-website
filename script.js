function showContent(title) {
  const content = document.getElementById("content");
  content.innerHTML = `<h2>${title}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>`;
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
