const submenuData = {
  discover: ['Gruppen'],
  define: ['Allgemein', 'IST Analyse', 'Benchmarking', 'Rahmenbedingungen'],
  zwischen: ['Präsentation A', 'Präsentation B'],
  develop: ['Ideenfindung', 'Prototyp'],
  deliver: ['Finalisierung', 'Testing'],
  abschluss: ['Fazit', 'Ausblick']
};

function toggleSubmenu(category) {
  const submenu = document.getElementById('submenu');
  submenu.innerHTML = '';
  submenuData[category].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.onclick = () => loadContent(item);
    submenu.appendChild(li);
  });
}

function loadContent(title) {
  const content = document.getElementById('content');
  content.innerHTML = `
    <section class="content-box">
      <h2>${title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy...
      </p>
      <div class="preview-container" id="previewContainer"></div>
      <input type="file" id="fileInput" multiple accept="application/pdf,image/*" />
    </section>
  `;
  document.getElementById('fileInput').addEventListener('change', handleFiles);
}

function handleFiles(event) {
  const previewContainer = document.getElementById('previewContainer');
  previewContainer.innerHTML = '';
  const files = event.target.files;

  Array.from(files).forEach(file => {
    const fileType = file.type;
    if (fileType.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      previewContainer.appendChild(img);
    } else if (fileType === 'application/pdf') {
      const iframe = document.createElement('iframe');
      iframe.src = URL.createObjectURL(file);
      previewContainer.appendChild(iframe);
    }
  });
}

document.getElementById('fileInput').addEventListener('change', handleFiles);
