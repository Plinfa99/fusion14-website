// Inhalt anzeigen im rechten Textfeld
function showContent(title) {
  const content = document.getElementById("content");

  let text = "";

  switch (title) {
    case "Startseite":
      text = `
          <p><strong>Wir sind Fusion 14</strong></p>
          <p>Wir sind ein engagiertes Team von Studierenden, die gemeinsam spannende Projekte erarbeiten, analysieren und präsentieren.</p>
          <p>Unser Ziel ist es, innovative Lösungen im Team zu entwickeln und professionell umzusetzen.</p>
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
}

// Submenüs ein-/ausblenden per Klick
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function (e) {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      e.stopPropagation();
      e.preventDefault();

      // Alle anderen Submenüs schließen
      document.querySelectorAll('.nav-item').forEach(el => {
        if (el !== item) el.classList.remove('active');
      });

      // Aktuelles öffnen/schließen
      item.classList.toggle('active');
    }
  });
});

// Optional: außerhalb klicken schließt alle Submenüs
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
});
