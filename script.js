function showContent(title) {
  const content = document.getElementById("content");
  let text = "";

  switch (title) {
    case "Startseite":
      text = `
   <div id="content" class="card content-split">
   <h2>Wir sind Fusion 14</h2>
   <div class="split-wrapper">
      <div class="text-area">
      <div class="spacer-xs"></div>
        <subh>FUSION 14 – Campus neu denken, Community neu leben</subh>
        <p>FUSION 14 ist ein interdisziplinäres Innovationsprojekt von Studierenden des Masterstudiengangs Produktdesign und Prozessentwicklung an der TH Köln. Unser Ziel: den Campus Gummersbach in einen lebendigen, inspirierenden Ort zu verwandeln, der Studierende nicht nur zum Lernen, sondern auch zum Verweilen, Begegnen und Mitgestalten einlädt.</p>
        <div class="spacer-xs"></div>

        <subh>Was ist FUSION 14?</subh>
        <p>Unter dem Namen FUSION 14 haben sich 14 kreative Köpfe aus Design, Ingenieurwesen und Wirtschaft zusammengeschlossen, um Lösungen zu entwickeln, die das Campusleben langfristig verbessern.</p>
        <p><strong>Im Fokus steht dabei die Frage:</strong><br>
        <p>Wie kann der Campus Gummersbach als attraktiver und lebenswerter Studienort wahrgenommen werden?</p>
        <div class="spacer-xs"></div>

        <subh>Unser Ziel</subh>
        <p>Wir wollen einen Campus gestalten, der:</p>
        <ul>
          <li>sozial vernetzt,</li>
          <li>ästhetisch ansprechend und</li>
          <li>praktisch nutzbar ist – für Studierende, Lehrende und die Stadtgemeinschaft.</li>
        </ul>
        <p>Dafür setzen wir auf nachhaltige Strukturen: Begegnungszonen, neue Räume für Veranstaltungen, moderne Ausleihsysteme und kreative Interventionen im Alltag.</p>
        <div class="spacer-xs"></div>

        <subh>Unser Vorgehen</subh>
        <p>Mithilfe der Double-Diamond-Methode aus dem Design Thinking haben wir uns durch vier Phasen gearbeitet:</p>
        <ul>
          <li><strong>Discover:</strong> Interviews mit Studierenden, Fachschaften, Stadtakteuren, Benchmarking und kreative Umfragen.</li>
          <li><strong>Define:</strong> Entwicklung von Leitfragen, Personas und User Journeys.</li>
          <li><strong>Develop:</strong> Ideen für Events, Raumgestaltung, Ausleihboxen, Outdoor-Möbel und mobile Kaffeestände.</li>
          <li><strong>Deliver:</strong> Umsetzung und Test erster Maßnahmen mit Prototypen.</li>
        </ul>
        <img src="img/DD.png" alt="Teamfoto 3" class="foto-zentral" />
        <div class="spacer-xs"></div>

        <subh>Warum das Ganze?</subh>
        <p>Der Campus Gummersbach hat viel Potenzial – aber auch Herausforderungen. Unser Projekt will studentisches Leben, Freizeitangebote und Atmosphäre deutlich verbessern.</p>
        <div class="spacer-xs"></div>

        <subh>Für wen?</subh>
        <p>FUSION 14 richtet sich an:</p>
        <ul>
          <li>Studierende, die sich ein aktiveres Campusleben wünschen,</li>
          <li>die Hochschule, die Innovationen fördern möchte,</li>
          <li>die Stadt Gummersbach, die den Standort stärken will,</li>
          <li>und alle, die Lust auf Veränderung haben.</li>
        </ul>
      </div>

          <div class="image-area">
            <img src="img/FUSION2.JPG" alt="Teamfoto 2" />
            <img src="img/FUSION3.jpg" alt="Teamfoto 3" />
          </div>
        </div>
        </div>
      `;
      break;

    case "Define":
      text = `
        <div class="card content-split">
          <div class="text-area">
            <h2>Startseite</h2>
            <p><strong>Wir sind Fusion 14</strong></p>
            <p>Wir sind ein engagiertes Team von Studierenden aus dem Studiengang Produktdeign und Prozessentwicklung!.</p>
            <p>Hier sehen Sie unsere Ergebnisse aus dem Großen Projekt im Wintersemester 2024/25..</p>
          </div>
          <div class="image-area">
            <img src="img/team1.jpg" alt="Teamfoto 1" />
            <img src="img/team2.jpg" alt="Teamfoto 2" />
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
             <p><strong>Wir sind Fusion 14</strong></p>
            <p>Wir sind ein engagiertes Team von Studierenden, die gemeinsam spannende Projekte erarbeiten, analysieren und präsentieren.</p>
            <p>Unser Ziel ist es, innovative Lösungen im Team zu entwickeln und professionell umzusetzen.</p>
          </div>
          <div class="image-area">
            <img src="logo.png" alt="Teamfoto 1" />
            <img src="logo.png" alt="Teamfoto 2" />
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

    case "Startseite":
      files = [
        { name: "Unser Weg", file: "UnserWeg.pdf", image: "UnserWegTB.png" }
      ];
      text.innerText = "Downloads zum unserem bisherigen Weg:";
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
      <div class="download-title">${f.name}</div>
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
