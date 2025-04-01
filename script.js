function showContent(title) {
  const content = document.getElementById("content");
  let text = "";

  switch (title) {
    case "Startseite":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Startseite</h2>
            <p><strong>Wir sind Fusion 14</strong></p>
            <p>Wir sind ein engagiertes Team von Studierenden, die gemeinsam spannende Projekte erarbeiten, analysieren und präsentieren.</p>
            <p>Unser Ziel ist es, innovative Lösungen im Team zu entwickeln und professionell umzusetzen.</p>
          </div>
          <div class="image-area">
            <img src="img/team1.jpg" alt="Teamfoto 1" />
            <img src="img/team2.jpg" alt="Teamfoto 2" />
          </div>
        </div>
      `;
      break;

    case "Define":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Define</h2>
            <p>In dieser Phase wird das Problem klar definiert.</p>
            <p>Wir sammeln Anforderungen und grenzen das Projekt sinnvoll ein.</p>
          </div>
          <div class="image-area">
            <img src="img/define1.jpg" alt="Define Bild 1" />
          </div>
        </div>
      `;
      break;

    case "Zwischenpräsentation":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Zwischenpräsentation</h2>
            <p>Hier zeigen wir erste Ergebnisse und erhalten Feedback.</p>
          </div>
          <div class="image-area">
            <img src="img/zwischen1.jpg" alt="Zwischenpräsentation" />
          </div>
        </div>
      `;
      break;

    case "Develop":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Develop</h2>
            <p>Hier beginnt die Konzept- und Lösungsentwicklung.</p>
          </div>
          <div class="image-area">
            <img src="img/develop1.jpg" alt="Develop" />
          </div>
        </div>
      `;
      break;

    case "Deliver":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Deliver</h2>
            <p>In dieser Phase wird das fertige Produkt geliefert und dokumentiert.</p>
          </div>
          <div class="image-area">
            <img src="img/deliver1.jpg" alt="Deliver" />
          </div>
        </div>
      `;
      break;

    case "Abschlusspräsentation":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Abschlusspräsentation</h2>
            <p>Hier findest du die finale Präsentation des Projekts.</p>
          </div>
          <div class="image-area">
            <img src="img/abschluss.jpg" alt="Abschlusspräsentation" />
          </div>
        </div>
      `;
      break;

    case "Allgemein":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Allgemein</h2>
            <p>Allgemeine Informationen zum Projekt und zur Arbeitsweise.</p>
          </div>
          <div class="image-area">
            <img src="img/allgemein.jpg" alt="Allgemeines Bild" />
          </div>
        </div>
      `;
      break;

    case "IST Analyse":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>IST Analyse</h2>
            <p>Analyse des aktuellen Zustands der Umgebung und des Bedarfs.</p>
          </div>
          <div class="image-area">
            <img src="img/istanalyse.jpg" alt="IST Analyse" />
          </div>
        </div>
      `;
      break;

    case "Benchmarking":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Benchmarking</h2>
            <p>Vergleich von bestehenden Lösungen und deren Bewertung.</p>
          </div>
          <div class="image-area">
            <img src="img/benchmark.jpg" alt="Benchmarking" />
          </div>
        </div>
      `;
      break;

    case "Rahmenbedingungen":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Rahmenbedingungen</h2>
            <p>Alle äußeren Einflüsse und technischen Anforderungen für das Projekt.</p>
          </div>
          <div class="image-area">
            <img src="img/rahmen.jpg" alt="Rahmenbedingungen" />
          </div>
        </div>
      `;
      break;

    default:
      text = `
        <div class="card">
          <h2>${title}</h2>
          <p>Weitere Informationen folgen in Kürze.</p>
        </div>
      `;
  }

  content.innerHTML = text;
  updateDownloads(title);
}

function updateDownloads(section) {
  const grid = document.getElementById("download-grid");
  const text = document.getElementById("download-text");

  grid.innerHTML = "";

  let files = [];

  switch (section) {
    case "Define":
      files = [
        { name: "Define Übersicht", file: "define.pdf", image: "define.jpg" }
      ];
      text.innerText = "Downloads zum Bereich Define:";
      break;

    case "Zwischenpräsentation":
      files = [
        { name: "Zwischenpräsentation", file: "zwischen.pdf", image: "zwischen.jpg" }
      ];
      text.innerText = "Downloads zur Zwischenpräsentation:";
      break;

    case "Abschlusspräsentation":
      files = [
        { name: "Abschlusspräsentation", file: "abschluss.pdf", image: "abschluss.jpg" }
      ];
      text.innerText = "Finale Präsentationen:";
      break;

    case "Develop":
      files = [
        { name: "Entwicklungskonzept", file: "develop.pdf", image: "develop.jpg" }
      ];
      text.innerText = "Dokumente aus der Develop-Phase:";
      break;

    case "Deliver":
      files = [
        { name: "Delivery-Präsentation", file: "deliver.pdf", image: "deliver.jpg" }
      ];
      text.innerText = "Ergebnisse aus der Delivery-Phase:";
      break;

    default:
      files = [
        { name: "Präsentation 1", file: "praesentation1.pdf", image: "praesentation1.jpg" },
        { name: "Präsentation 2", file: "praesentation2.pdf", image: "praesentation2.jpg" },
        { name: "Präsentation 3", file: "praesentation3.pdf", image: "praesentation3.jpg" }
      ];
      text.innerText = "Hier findest du alle Präsentationen zum Download.";
  }

  files.forEach(f => {
    const card = document.createElement("div");
    card.className = "download-item";
    card.innerHTML = `
      <div class="download-title">Präsentation</div>
      <img src="img/${f.image}" alt="${f.name}">
      <a class="download-button" href="downloads/${f.file}" download>Download</a>
    `;
    grid.appendChild(card);
  });
}

// Submenü per Klick ein-/ausklappen
document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();

    document.querySelectorAll('.nav-item').forEach(el => {
      if (el !== item) el.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});

// Klick außerhalb = alle Submenüs schließen
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
});
