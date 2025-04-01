function showContent(title) {
  const content = document.getElementById("content");
  let text = "";

  switch (title) {
    case "Startseite":
  text = `
    <p><strong>Willkommen bei FUSION 14</strong></p>
    <p>FUSION 14 ist ein interdisziplinäres Innovationsprojekt von Studierenden des Masterstudiengangs <em>Produktdesign und Prozessentwicklung</em> an der TH Köln.</p>
    <p>Unser Ziel: den Campus Gummersbach in einen lebendigen, inspirierenden Ort zu verwandeln, der Studierende nicht nur zum Lernen, sondern auch zum Verweilen, Begegnen und Mitgestalten einlädt.</p>
    <p>Unter dem Motto <strong>„Campus & Community“</strong> haben wir zukunftsorientierte Konzepte entwickelt – von neuen Aufenthaltsbereichen über kreative Events bis hin zu smarten Ausleihsystemen.</p>
    <p>In einem nutzerzentrierten Prozess – basierend auf der Double-Diamond-Methode – haben wir den Campus aus verschiedenen Perspektiven analysiert und konkrete Ideen zur Verbesserung des studentischen Lebens ausgearbeitet.</p>
    <p><strong>Worum geht’s konkret?</strong></p>
    <ul>
      <li>Aufenthaltsräume & modulare Raumgestaltung</li>
      <li>Community-Events & interdisziplinäre Begegnungen</li>
      <li>Sport- und Freizeitangebote für mehr Lebensqualität</li>
      <li>Digitale & analoge Kommunikation am Campus</li>
    </ul>
    <p>FUSION 14 steht für Kreativität, Teamgeist und den Willen, etwas zu verändern. Entdecke auf dieser Seite unsere Ideen, Konzepte und Visionen für einen Campus, der verbindet.</p>
  `;
  break;

    case "Benchmarking":
      text = "Hier stehen die Benchmarking-Ergebnisse und Analysen.";
      break;
    case "IST Analyse":
      text = "Dies ist die aktuelle Analyse des IST-Zustands.";
      break;
    case "Allgemein":
      text = "Allgemeine Informationen zum Projekt.";
      break;
    case "Rahmenbedingungen":
      text = "Diese Seite enthält alle Rahmenbedingungen.";
      break;
    case "Define":
      text = "In dieser Phase wird das Problem klar definiert.";
      break;
    case "Zwischenpräsentation":
      text = "Ergebnisse und Inhalte der Zwischenpräsentation.";
      break;
    case "Develop":
      text = "Hier beginnt die Konzept- und Lösungsentwicklung.";
      break;
    case "Deliver":
      text = "In dieser Phase wird geliefert und abgeschlossen.";
      break;
    case "Abschlusspräsentation":
      text = "Hier findest du die finale Präsentation des Projekts.";
      break;
    default:
      text = "Weitere Informationen folgen in Kürze.";
  }

  content.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
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
        { name: "Define Übersicht", file: "define.pdf", image: "define.jpg" },
        { name: "Define Details", file: "define-details.pdf", image: "define2.jpg" }
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
      files = [];
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
