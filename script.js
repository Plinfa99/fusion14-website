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
          <li><strong>Discover:</strong> Interviews, Recherchen, Benchmarking und kreative Umfragen.</li>
          <li><strong>Define:</strong> Entwicklung von Leitfragen, Personas und User Journeys.</li>
          <li><strong>Develop:</strong> Ideen für Events, Raumgestaltung, Ausleihboxen, Interventionen.</li>
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
      <div id="content" class="card content-split">
         <h2>Define – Erkenntnisse auf den Punkt gebracht</h2>
         <div class="split-wrapper">
             <div class="text-area">
           <p>Nach der intensiven Recherche in der Discover-Phase stand in der Define-Phase der nächste wichtige Schritt an: das Filtern, Bündeln und Verdichten der gesammelten Informationen. Ziel war es, aus den vielfältigen Eindrücken konkrete Problemstellungen und Handlungsfelder abzuleiten.</p>
            
            <div class="spacer-xs"></div>
            <subh>Unsere Aufgabe</subh>
            <p>Alle Erkenntnisse aus Interviews, Fokusgruppen, Benchmarking und Rahmenbedingungen zusammenzuführen – und daraus klar formulierte Ausgangspunkte für die spätere Ideenfindung zu entwickeln.</p>
            
            <div class="spacer-xs"></div>
            <subh>Unser Vorgehen</subh>
            <img src="img/Define_img.png" alt="Teamfoto 3" class="foto-zentral" />
            <p>In einem gemeinsamen Workshop haben wir unsere Erkenntnisse analysiert, und zusammengefasst. Die Ergebnisse wurden für die Zwischenpräsentation visualisiert und stehen dort als Poster-Downloads zur Verfügung. </p>
            <ul>
              

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Die Define-Phase war entscheidend dafür, die Komplexität der ersten Projektwochen zu strukturieren. Sie lieferte uns einen klaren inhaltlichen Kompass für die folgende Develop-Phase – und stellte sicher, dass wir an den Themen weiterarbeiten, die für die Campus-Community wirklich relevant sind.</p>
          </div>
             <div class="image-area">
             <img src="img/Define.png" alt="Teamfoto 3" />
             </div>
           </div>
           </div>
         `;
         break;

         case "Events":
          text = `
          <div id="content" class="card content-split">
             <h2>Events – Der Campus als Bühne für Begegnung</h2>
             <div class="split-wrapper">
                 <div class="text-area">
                <p>Die Gruppe Events hatte ein klares Ziel: den Campus Gummersbach mit Leben füllen. Statt ihn nur als funktionalen Lernort zu begreifen, sollte er zum sozialen Raum werden – mit regelmäßigen Veranstaltungen, die Austausch, Spaß und Identifikation ermöglichen.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Vorgehen</subh>
            <p>Zu Beginn stand die Frage: Was fehlt?</p>
            <p>In Gesprächen, Umfragen und Rückmeldungen aus der Discover-Phase zeigte sich schnell: Viele Studierende wünschen sich mehr Gelegenheiten zur Begegnung außerhalb des Vorlesungsplans – spontane Aktionen, regelmäßige Events und sichtbare Highlights, die den Alltag auflockern.</p>

            <p>Um passende Formate zu entwickeln, haben wir:</p>
            <ul>
              <li>Bedürfnisse analysiert (z. B. Zielgruppen, Zeitfenster, Semesterphasen)</li>
              <li>Eventideen gesammelt, geclustert und in Steckbriefen konkretisiert</li>
              <li>Veranstaltungen mit unterschiedlichem Aufwand verglichen</li>
              <li>Umsetzungshürden (z. B. Genehmigungen, Technik, Kommunikation) recherchiert</li>
            </ul>

            <div class="spacer-xs"></div>
            <subh>Die Ergebnisse</subh>
            <p>Aus diesen Schritten entstanden konkrete Veranstaltungsformate – sowohl für regelmäßige als auch einmalige Nutzung:</p>
            <ul>
              <li><strong>Campus-Fitness-Clash</strong> 
          <li><strong>GM-Cinema</strong> 
          <li><strong>Ersti-Tag</strong>
          <li><strong>Campus Bites</strong> 
            </ul>

            <p>Besonderes Augenmerk lag auf der Niedrigschwelligkeit: Keine aufwendigen Bühnen, sondern einfache Mittel, die schnell Wirkung zeigen – und Formate, die Studierende motivieren, selbst aktiv zu werden.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Events machen Campus erlebbar. Sie bringen Menschen zusammen, schaffen Erinnerungen und geben dem Studium eine soziale Dimension. Unsere Formate zeigen, wie schon mit wenig Aufwand viel Atmosphäre geschaffen werden kann – und legen die Basis für ein aktiveres Miteinander am Campus Gummersbach.</p>
          </div>
                 <div class="image-area">
                 <img src="img/Events1.png" alt="Teamfoto 3" />
                 <img src="img/Events2.png" alt="Teamfoto 3" />
                 <img src="img/Events3.png" alt="Teamfoto 3" />
                  <img src="img/Events4.png" alt="Teamfoto 3" />
                 </div>
               </div>
               </div>
             `;
             break;

             case "Raumgestaltung":
              text = `
              <div id="content" class="card content-split">
                 <h2>Raumgestaltung – Räume, die bleiben</h2>
                 <div class="split-wrapper">
                     <div class="text-area">
                     <p>Die Gruppe Raumgestaltung nahm sich einer der zentralen Fragen des Projekts an: Wie können Räume auf dem Campus Gummersbach gestaltet werden, damit sie zum Verweilen, Arbeiten, Kreativsein und Abschalten einladen?</p>
            <p>Denn viele Studierende empfinden die Campusräume als funktional, aber ungemütlich – es fehlen Orte mit Atmosphäre, Flexibilität und Aufenthaltsqualität.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Vorgehen</subh>
            <p>Ausgehend von den Bedürfnissen und Wünschen aus der Discover-Phase analysierten wir bestehende Räume und fragten uns:</p>
            <ul>
              <li>Welche Raumnutzungen sind aktuell möglich – und welche fehlen?</li>
              <li>Welche Funktionen brauchen Studierende im Alltag (z. B. Ruhe, Austausch, Kreativität)?</li>
              <li>Welche Räume lassen sich mit einfachen Mitteln umgestalten oder aufwerten?</li>
            </ul>
<div class="spacer-xs"></div>
            <p>Nach einer Phase der Ideenfindung und Planung haben wir zwei konkrete Räume im IAM ausgewählt, die prototypisch umgestaltet wurden:</p>

            <p><strong>Raum 0.214 → „Brain & Chill“</strong><br>
            Ein entspannter Raum für Gruppen- oder Einzelarbeit, Pausen, Kreativität und informellen Austausch. Mit Sofas, Teppichen, Pflanzen, Mood-Beleuchtung und flexibler Ausstattung bietet er Raum zum Runterkommen – oder zum Denken.</p>

            <p><strong>Raum 0.215 → „Bau*Raum“</strong><br>
            Ein kreativer Gestaltungsraum für kleine Projekte, Workshops oder Ideensammlungen. Whiteboards, Materialien, Werkzeuge und flexible Möbel machen ihn zum „Maker Space“ für Studierende aller Fachrichtungen.</p>

            <p>Außerdem wurde ein weiterer „Raum“ überarbeitet – digital:<br>
            Unser Discord-Kanal wurde neu strukturiert, gestaltet und beworben, um als ergänzender virtueller Treffpunkt zu funktionieren.</p>

            <div class="spacer-xs"></div>
            <subh>Die Ergebnisse</subh>
            <ul>
              <li>Gestaltung mit günstigen, transportablen Materialien</li>
              <li>Gestaltung in enger Abstimmung mit Nutzer:innen (z. B. durch Umfragen & Probenutzung)</li>
              <li>Aufbau eines Konzeptes, das auf andere Räume übertragbar ist</li>
              <li>Kombination von funktionalem Nutzen mit Atmosphäre & Offenheit</li>
            </ul>
<div class="spacer-xs"></div>
            <p>Begleitend erstellten wir ein „Raumgestaltungskit“, das anderen Gruppen oder Fachschaften helfen kann, ähnliche Räume selbst zu entwickeln – inklusive Checkliste, Moodboard und Tipps zur Umsetzung.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Räume prägen Verhalten. Wenn Studierende sich wohlfühlen, bleiben sie länger – und bringen sich eher ein. Mit der Umgestaltung von zwei Räumen haben wir gezeigt, wie mit einfachen Mitteln Orte entstehen können, die mehr sind als Klassenzimmer: nämlich Räume zum Leben.</p>
          </div>
                     <div class="image-area">
                     <img src="img/RG1.png" alt="Teamfoto 3" />
                     <img src="img/RG3.png" alt="Teamfoto 3" />
                     <img src="img/RG2.png" alt="Teamfoto 3" />
                     </div>
                   </div>
                   </div>
                 `;
                 break;

                 case "Ausleihsystem":
                  text = `
                  <div id="content" class="card content-split">
                     <h2>Ausleihsystem – Dinge teilen, Campus gestalten</h2>
                     <div class="split-wrapper">
                         <div class="text-area">
                         <p>Die Gruppe Raumgestaltung nahm sich einer der zentralen Fragen des Projekts an: Wie können Räume auf dem Campus Gummersbach gestaltet werden, damit sie zum Verweilen, Arbeiten, Kreativsein und Abschalten einladen?</p>
                 <p>Die Gruppe Ausleihsystem entwickelte ein Konzept, das den Campus Gummersbach spontaner, aktiver und gemeinschaftlicher machen soll: ein mobiles Leihsystem, mit dem Studierende unkompliziert auf nützliche Gegenstände zugreifen können – ohne Bürokratie, ohne feste Öffnungszeiten.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Ziel</subh>
            <p>Wir wollten ein Ausleihsystem schaffen, das:</p>
            <ul>
              <li>den Alltag am Campus erleichtert</li>
              <li>spontane Aktivitäten ermöglicht</li>
              <li>und das studentische Miteinander fördert – draußen wie drinnen</li>
            </ul>
            <p>Im Mittelpunkt stand die Frage: Was brauchen Studierende im Alltag – und wie können wir das teilen statt besitzen?</p>

            <div class="spacer-xs"></div>
            <subh>Unser Vorgehen</subh>
            <p>Wir starteten mit einer Bedarfserhebung: Was würden Studierende tatsächlich nutzen? Die Antworten reichten von Sportequipment über Picknickdecken bis hin zu Bastelmaterial.</p>
            <p>Daraufhin entwickelten wir die Idee des „Boxenstopps“ – eines mobilen, flexibel nutzbaren Leihsystems in Form eines Rollwagens mit mehreren Seitenflächen.</p>

            <ul>
              <li><strong>Designkonzept:</strong> quadratisch, kompakt, beweglich – mit Infoflächen, Schließsystem und modularer Innenstruktur</li>
              <li><strong>Inhalt:</strong> wechselnde Themenboxen – z. B. Sportbox (Ball, Hütchen, Springseil), Chillbox (Decken, Kartenspiel), Kreativbox (Stifte, Papier, Klemmbrett)</li>
              <li><strong>Nutzung:</strong> unkompliziert und sichtbar – am besten an einem zentralen Ort wie dem Foyer oder im Außenbereich</li>
            </ul>

            <p>Wir entwickelten dazu ein Präsentationsmodell im Maßstab, erstellten Visualisierungen und dokumentierten alle Funktionen, Nutzungsszenarien und Erweiterungsmöglichkeiten.</p>

            <div class="spacer-xs"></div>
            <subh>Das Ergebnis</subh>
            <p><strong>„Boxenstopp“ – das mobile Ausleihsystem für Studierende</strong></p>
            <ul>
              <li>visuell auffällig und selbsterklärend</li>
              <li>funktional erweiterbar (z. B. durch Stecksystem, Gleitschienen, Stromversorgung)</li>
              <li>flexibel einsetzbar für spontane Nutzung oder Events</li>
              <li>realitätsnah konzipiert, mit Blick auf Sicherheit, Platzbedarf und Wartung</li>
            </ul>
            <p>Der Prototyp wurde bei der Abschlusspräsentation ausgestellt – und stieß auf durchweg positives Feedback.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Der „Boxenstopp“ zeigt, wie mit einfachen Mitteln neue Nutzungsräume entstehen können. Das Leihsystem schafft Bewegung, Begegnung und Beteiligung – genau das, was ein moderner Campus braucht.</p>
          </div>
                         <div class="image-area">
                         <img src="img/AS2.png" alt="Teamfoto 3" />
                         <img src="img/AS1.png" alt="Teamfoto 3" />      
                         <img src="img/AS3.png" alt="Teamfoto 3" />
                         <img src="img/AS4.png" alt="Teamfoto 3" />
                         <img src="img/AS5.png" alt="Teamfoto 3" />
                         </div>
                       </div>
                       </div>
                     `;
                     break;

    case "Zwischenpräsentation":
      text = `
   <div id="content" class="card content-split">
      <h2>Zwischenpräsentation</h2>
      <div class="split-wrapper">
          <div class="text-area">
         <p>Am 28. November 2024 präsentierte FUSION 14 die Ergebnisse der ersten Projektphase in einer offenen Zwischenpräsentation – direkt im Herzen des Campus: im Flur vor der Mensa.</p>
<div class="spacer-xs"></div>
        <subh>Offene Ausstellung & Interaktion</subh>
        <p>Die zentralen Erkenntnisse aus der Discover-Phase wurden auf großformatigen Postern visualisiert und als selbstständige Ausstellung zugänglich gemacht. Besucher:innen – darunter Studierende, Lehrende, Mitarbeitende der TH Köln sowie externe Gäste – konnten sich frei durch die Inhalte bewegen und in das Projekt eintauchen.</p>

        <p>Begleitend dazu wurde ein Flyer an alle eingeladenen Gäste verteilt, der das Projekt und die Präsentationsinhalte kurz und anschaulich zusammenfasste.</p>
<div class="spacer-xs"></div>
        <subh>Lebendiger Austausch</subh>
        <p>Nach einer Reihe mündlicher Präsentationen durch die einzelnen Teams entwickelte sich ein lebendiger und offener Austausch: Ideen wurden diskutiert, Perspektiven geteilt und neue Impulse gesetzt. Besonders wertvoll war dabei das direkte Feedback von Besucher:innen – es zeigte uns, welche Themen besonders bewegen und wo noch Potenziale schlummern.</p>
<div class="spacer-xs"></div>
        <subh>Ein Meilenstein für FUSION 14</subh>
        <p>Diese dynamische Atmosphäre war für uns ein echter Meilenstein: Sie bestätigte, dass wir auf dem richtigen Weg sind – und dass der Wunsch nach Veränderung am Campus Gummersbach nicht nur bei uns, sondern auch bei vielen anderen vorhanden ist.</p>
      </div>

          <div class="image-area">
            <img src="img/ZPP1.jpg" alt="Teamfoto 2" />
            <img src="img/ZPP2.jpg" alt="Teamfoto 3" />
            <img src="img/ZPP3.jpg" alt="Teamfoto 3" />
            <img src="img/ZPP4.jpg" alt="Teamfoto 3" />
          </div>
        </div>
        </div>
      `;
      break;

    case "Develop":
      text = `
      <div id="content" class="card content-split">
         <h2>Develop - Von der Fragestellung zur Idee</h2>
         <div class="split-wrapper">
             <div class="text-area">
            <p>Bevor wir in die kreative Ideenphase gestartet sind, war eines klar: Wir brauchten Fokus. Denn nach der intensiven Recherche in der Discover-Phase und der Auswertung in Define standen viele spannende Themen im Raum. Um daraus gezielt weiterarbeiten zu können, haben wir einen letzten Loop im ersten „Diamond“ eingelegt – mit der „How might we…?“-Methode.</p>

            <p>Ziel war es, aus den gesammelten Erkenntnissen konkrete, offene Fragestellungen zu entwickeln, die Raum für kreative Lösungen lassen. Diese Methode hat uns geholfen, divergente Perspektiven zu strukturieren und zentrale Herausforderungen auf den Punkt zu bringen.</p>

            <div class="spacer-xs"></div>
            <subh>Fokus durch vier Fragestellungen</subh>
            <img src="img/Dev1.png" alt="Teamfoto 3" class="foto-zentral" />
            <p>Basierend auf diesen „How might we…?“-Fragen entstanden vier inhaltliche Schwerpunkte (Cluster), auf die wir unseren Fokus gelegt haben:</p>
            <ul>
              <li><strong>Outdoor:</strong> Wie kann der Außenraum als Spielraum für studentisches Leben genutzt werden?</li>
              <li><strong>Informationsvermittlung:</strong> Wie lassen sich Kommunikationskanäle verbessern, um Netzwerke zu stärken?</li>
              <li><strong>Begegnungszonen:</strong> Wie können Räume geschaffen werden, die Begegnung, Austausch und Rückzug ermöglichen?</li>
              <li><strong>Essensangebot:</strong> Wie kann das Angebot der Mensa besser auf die Bedürfnisse der Studierenden eingehen?</li>
            </ul>
<img src="img/Dev3.png" alt="Teamfoto 3" class="foto-zentral" />
            <div class="spacer-xs"></div>
            <subh>Ideen entwickeln – kreativ & methodisch</subh>
            <img src="img/Dev2.png" alt="Teamfoto 3" class="foto-zentral" />
            <p>Nun begann die eigentliche Develop-Phase: die Entwicklung konkreter Ideen. Auch hier arbeiteten wir nach dem Prinzip des Double Diamonds – zuerst divergent, dann konvergent.</p>

            <p><strong>Ideen generieren (divergent):</strong></p>
 
            <ul>
              <li><strong>Visionboard zum Anfassen:</strong> Wir bastelten, zeichneten und bauten erste Gedanken und Visionen für den Campus.</li>
              <li><strong>8 Minuten – 8 Ideen:</strong> Für jede Leitfrage entwickelten alle Teammitglieder in kürzester Zeit möglichst viele Ideen.</li>
              <li><strong>Steckbriefe & Ideensammlung:</strong> Die Ideen wurden geclustert, dokumentiert und in Kleingruppen weiterentwickelt.</li>
            </ul>

            <div class="spacer-xs"></div>
            <subh>Ideen bewerten & auswählen</subh>

            <p>Anschließend wurde es analytischer. Gemeinsam haben wir die vielversprechendsten Ideen ausgewählt und weiter konkretisiert:</p>

            <p><strong>Workshop & Ideenfilterung (konvergent):</strong></p>
            <ul>
              <li>Ähnliche Ideen wurden zusammengefasst und als Elevator Pitches präsentiert.</li>
              <li>Die Konzepte wurden in einer Nutzen-Aufwand-Matrix eingeordnet – also: Was bringt viel, was ist umsetzbar?</li>
            </ul>

            <p><strong>Nutzwertanalyse:</strong></p>
            <img src="img/Dev4.png" alt="Teamfoto 3" class="foto-zentral" />
            <ul>
              <li>Zur finalen Bewertung haben wir eine strukturierte Nutzwertanalyse durchgeführt.</li>
              <li>Die Kriterien wurden gemeinsam gewichtet, jede Lösung einzeln bewertet.</li>
              <li>Ziel war es, fundiert zu entscheiden, welche Ideen wir in der nächsten Phase umsetzen wollen.</li>
            </ul>

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Die Develop-Phase war der kreative Kern unseres Projekts. Dank gezielter Methoden konnten wir aus vielen losen Gedanken konkrete, tragfähige Ideen entwickeln – und damit die Basis für die Umsetzung in der Deliver-Phase schaffen.</p>
          </div>
             <div class="image-area">
               <img src="img/Develop.png" alt="Teamfoto 1" />
             </div>
           </div>
         `;
         break;

    case "Deliver":
      text = `
        <div class="card content-split">
        <h2>Deliver - Ideen werden Wirklichkeit</h2>
          <div class="split-wrapper">
          <div class="text-area">
             <p>Nach der intensiven Ideenentwicklung in der Develop-Phase war klar: Jetzt geht’s ans Eingemachte. In der Deliver-Phase wurden die ausgewählten Konzepte konkretisiert, getestet und – wo möglich – als Prototyp oder reales Angebot umgesetzt.</p>

            <p>Ziel dieser Phase war es, nicht nur zu konzipieren, sondern erlebbar zu machen: Studierende sollten den Campus direkt anders wahrnehmen – durch neue Räume, Aktionen, Kommunikationsformen und Begegnungsmöglichkeiten.</p>

            <p>Um effektiv arbeiten zu können, teilten wir uns in thematische Kleingruppen auf. Jede Gruppe übernahm die Verantwortung für einen konkreten Bereich – mit dem Ziel, am Ende ein umsetzbares Konzept oder ein fertiges Produkt zu präsentieren.</p>

            <div class="spacer-xs"></div>
            <subh>Die Gruppen im Überblick</subh>

            <p><strong>1. Events </strong><br>
            Diese Gruppe plante und konzipierte Veranstaltungsformate, die den Campus beleben sollen – etwa Sportevents, gemeinsame Kinoabende oder ein Ersti-Welcome-Day. Ziel war es, Formate zu schaffen, die Studierende zusammenbringen und regelmäßig stattfinden können.</p>

            <p><strong>2. Raumgestaltung </strong><br>
            Diese Gruppe beschäftigte sich mit der Umgestaltung zweier Räume am IAM (0.214 & 0.215). Entstanden sind die Konzepte „Brain & Chill“ (multifunktionaler Entspannungs-/Arbeitsraum) und „Bau*Raum“ (kreative Werkstatt und Projektspace). Zusätzlich wurde ein Discord-Kanal technisch und visuell überarbeitet – als „digitaler Raum“.</p>

            <p><strong>3. Interventionen </strong><br>
            Hier ging es um schnelle, sichtbare Veränderungen im Campusalltag. Die Gruppe entwickelte und testete spontane Formate wie:</p>
            <ul>
              <li>ein mobiler Kaffeewagen</li>
              <li>Treppensitze im Foyer</li>
              <li>eine QR-Code-Rallye</li>
              <li>Aktionen an den Fahrradständern (z. B. Sport-, Dehnübungen, Spielangebote)</li>
              <li>ein analoges Schwarzes Brett</li>
            </ul>
<div class="spacer-xs"></div>
            <p><strong>4. Ausleihsysteme </strong><br>
            Diese Gruppe konzipierte ein flexibles Ausleihsystem, das studentische Freizeitaktivitäten unterstützt – mit der Idee einer mobilen Leihstation („Boxenstopp“) für Sport- und Kreativmaterialien. Parallel entstand die WA-Community, eine WhatsApp-Struktur mit Gruppen für News, Events und Austausch.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Die Deliver-Phase hat gezeigt, wie viel in kurzer Zeit möglich ist, wenn Teams fokussiert und motiviert arbeiten. Ob physisch oder digital – die entstandenen Lösungen zeigen konkrete Wege, wie der Campus Gummersbach lebendiger, vernetzter und attraktiver gestaltet werden kann.</p>
          </div>
          <div class="image-area">
            <img src="img/Deliver.png" alt="Deliver" />
          </div>
        </div>
      `;
      break;

      case "Interventionen":
      text = `
   <div id="content" class="card content-split">
      <h2>Interventionen - Kleine Impulse, große Wirkung</h2>
      <div class="split-wrapper">
          <div class="text-area">
          <p>Die Gruppe Interventionen hatte ein klares Ziel: Sichtbare Veränderungen schaffen, die direkt erlebbar sind – ohne große Planung, aber mit großer Wirkung. Dabei ging es nicht um dauerhafte Umbauten, sondern um kreative, spontane und oft temporäre Impulse, die den Alltag am Campus Gummersbach auflockern, Begegnung fördern und neue Nutzungsformen anstoßen.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Ziel</subh>
            <p>Wie kann man mit wenig Aufwand spürbar etwas verändern?<br>
            Wie lassen sich bestehende Orte neu denken – oder aufwerten?</p>
            <p>Wir wollten zeigen, dass kleine Interventionen große Wirkung entfalten können, wenn sie nah an der Lebensrealität der Studierenden sind.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Vorgehen</subh>
            <p>Ausgangspunkt waren Beobachtungen aus der Sinnesdokumentation, Gespräche mit Studierenden und eigene Erfahrungen am Campus. Daraus entwickelten wir Ideen, die:</p>
            <ul>
              <li>gezielt untergenutzte Orte ansprechen</li>
              <li>für Bewegung, Begegnung oder Interaktion sorgen</li>
              <li>ohne langfristige Genehmigungen realisierbar sind</li>
              <li>direktes Feedback ermöglichen</li>
            </ul>
            <p>In mehreren Mini-Workshops konkretisierten wir unsere Ansätze und testeten erste Ideen direkt auf dem Campus.</p>

            <div class="spacer-xs"></div>
            <subh>Die Ergebnisse</subh>
            <ul>

            <p><strong style="color: #000;">Treppensitze im Foyer</strong><br>
            Die breite Treppe wurde durch Sitzkissen und einfache Holz-Elemente zu einem Aufenthaltsort umfunktioniert. Die Idee: eine sichtbare Einladung zum Verweilen statt nur zum Durchgehen.</p>

            <p><strong style="color: #000;">Mobiler Kaffeewagen (Pop-up)</strong><br>
            Ein selbst gebauter Wagen mit Stauraum, Schubladen und Rollen diente als Pop-up-Café. Ziel war es, durch Kaffeeaktionen spontane Begegnungen an wechselnden Orten zu schaffen – innen wie außen.</p>

            <p><strong style="color: #000;">Fahrradständer neu gedacht</strong><br>
            Die Fahrradständer wurden kreativ umgenutzt: für kleine Sportübungen, Spiele und als Halterung für klappbare Stehtische. So entstand mehr Aktivität an einem Ort, der sonst unbeachtet bleibt.</p>

            <p><strong style="color: #000;">QR-Code-Rallye über den Campus</strong><br>
            Ein spielerisches Entdecken des Campus per Smartphone – mit Fragen, Fun-Facts und Aufgaben. Die Idee: Wissen + Bewegung = eine niedrigschwellige Form der Campusbindung.</p>

           

            <p>Alle Interventionen wurden prototypisch umgesetzt, getestet und dokumentiert. Materialien, Bauanleitungen und Learnings stehen für künftige Studierendengruppen bereit.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Interventionen sind schnell, kreativ und direkt spürbar. Mit einfachen Mitteln haben wir gezeigt, wie man Orte neu aufladen kann – mit Funktion, Atmosphäre und Studierendenbeteiligung. Der Campus wird dadurch flexibler, lebendiger und ein Stück mehr „unserer“.</p>
          </div>

          <div class="image-area">
          <img src="img/INT1.jpg" alt="Teamfoto 3" />
            <img src="img/INT2.jpg" alt="Teamfoto 3" />
            <img src="img/INT5.jpg" alt="Teamfoto 3" />
            <img src="img/INT6.jpg" alt="Teamfoto 3" />
            <img src="img/INT3.jpg" alt="Teamfoto 3" />
            <img src="img/INT4.jpg" alt="Teamfoto 3" />
             <img src="img/INT6.png" alt="Teamfoto 3" />
          </div>
        </div>
        </div>
      `;
      break;

    case "Abschlusspräsentation":
      text = `
   <div id="content" class="card content-split">
      <h2>Abschlusspräsentation – der Campus wird zum Erlebnisraum</h2>
      <div class="split-wrapper">
          <div class="text-area">
         <p>Am 5. Februar 2025 fand die Abschlusspräsentation von FUSION 14 statt – der krönende Abschluss eines intensiven, kreativen und interdisziplinären Prozesses. Zahlreiche Gäste aus Hochschule, Stadtverwaltung, Studierendenschaft und Wirtschaft waren vor Ort, um die Ergebnisse live zu erleben.</p>
<div class="spacer-xs"></div>
        <subh>Auftakt: Einblicke & Hintergründe im Vortrag</subh>
        <p>Den Beginn bildete ein rund 30-minütiger Vortrag, der das Projekt von der Aufgabenstellung bis hin zu den entwickelten Lösungen in kompakter Form zusammenfasste. Dabei wurden nicht nur die einzelnen Projektphasen erläutert, sondern auch der kollaborative Arbeitsprozess, die Herausforderungen und die Wirkung einzelner Maßnahmen.</p>
        <p>Besonders betont wurde: Die Ideen wurden nicht nur gedacht, sondern auch umgesetzt – mit greifbaren Prototypen, echten Aktionen und messbarem Feedback aus der Studierendenschaft.</p>
<div class="spacer-xs"></div>
        <subh>Danach: Eine Führung, die zum Mitmachen einlud</subh>
        <p>Im Anschluss wurden die Gäste in kleinen Gruppen durch die verschiedenen Projektstationen geführt – direkt vor Ort auf dem Campus. An jeder Station präsentierten die jeweiligen Teams ihre Konzepte, Prototypen und Aktionen – vom Ausleihsystem „Boxenstopp“ bis hin zu den neugestalteten Räumen, dem Discord-Kanal, dem schwarzen Brett oder dem Kaffeewagen-Pop-up.</p>
        <p>Die Führung machte deutlich: Das Projekt war nicht nur theoretisch, sondern hatte echte, sichtbare Wirkung auf dem Campus – zum Ausprobieren, Anfassen und Erleben.</p>
<div class="spacer-xs"></div>
        <subh>Gemeinsamer Ausklang</subh>
        <p>Zum Abschluss lud ein offener Austauschbereich mit Waffeln, Kaffee und guter Stimmung dazu ein, sich zu vernetzen, weiterzudenken und Ideen mitzunehmen.</p>
      </div>

          <div class="image-area">
          <img src="img/APP5.jpg" alt="Teamfoto 3" />
            <img src="img/APP6.jpg" alt="Teamfoto 3" />
            <img src="img/APP7.jpg" alt="Teamfoto 3" />
            <img src="img/APP3.jpg" alt="Teamfoto 3" />
            <img src="img/APP8.jpg" alt="Teamfoto 3" />
          </div>
        </div>
        </div>
      `;
      break;

      case "Kommunikation":
      text = `
   <div id="content" class="card content-split">
      <h2>Kommunikation – Vernetzen, informieren, sichtbar machen</h2>
      <div class="split-wrapper">
          <div class="text-area">
          <p>Die Gruppe Kommunikation widmete sich einer der zentralen Herausforderungen am Campus Gummersbach: Wie erfahren Studierende überhaupt, was passiert?<br>
            Viele Informationen verlaufen ins Leere – oder erreichen die falsche Zielgruppe. Die Folge: Geringe Beteiligung, fehlende Sichtbarkeit, wenig Austausch.</p>

            <p>Unser Ziel war es, neue Kanäle und Formate zu entwickeln, die Information und Interaktion niedrigschwellig, sichtbar und zielgerichtet ermöglichen.</p>

            <div class="spacer-xs"></div>
            <subh>Unser Vorgehen</subh>
            <p>Aus der IST-Analyse wussten wir:</p>
            <ul>
              <li>Es gibt keine zentrale Plattform für Infos, Veranstaltungen und Mitteilungen</li>
              <li>Bestehende Kanäle (Moodle, Mail, Plakate) wirken fragmentiert oder übersehen</li>
              <li>Studierende wünschen sich mehr Überblick, Austausch und digitale Möglichkeiten</li>
            </ul>
            <p>Wir entwickelten daraufhin drei ineinandergreifende Kommunikationslösungen, die unterschiedliche Bedürfnisse abdecken – analog und digital, schnell und nachhaltig.</p>

            <div class="spacer-xs"></div>
            <subh>Die Ergebnisse</subh>

            <p><strong style="color: #000;">📲 WA-Community/Kanal (WhatsApp-Kommunikationsstruktur)</strong><br>
            Ein modulares Kommunikationssystem über WhatsApp, das mit wenigen Klicks funktioniert und Studierende dort abholt, wo sie eh schon aktiv sind.</p>

            <p><strong>Struktur:</strong><br>
            <li>Infochannel für offizielle Ankündigungen (z. B. Veranstaltungen, Deadlines, Aktionen)<br></li>
             <li>Themengruppen wie Events, Freizeit, Mitmachen<br></li>
             <li>Eine zentrale Linkgruppe mit QR-Code für den Überblick</p></li>

            <p><strong>Ziel:</strong> Informationen bündeln, Engagement fördern, spontane Vernetzung ermöglichen</p>
            <p> Hier ist der Link zu dem von uns erstellten Modell, wie eine solche Struktur aussehen könnte: <a href="https://chat.whatsapp.com/LIzItKsUE6709SiiQ3UiiW" target="_blank">WA-Community-Dummi</a> </p>
            <p> Aus datenschutzrechtlichen Gründen wurde das Konzept jedoch angepasst: Statt offener Gruppen soll ein WhatsApp-Kanal eingerichtet werden, was so nur von der Leiter*in der Öffentlichkeitsarbeit umgesetzt werden sollte.</p>

            <p><strong style="color: #000;">🖥️ Discord-Server – Digitaler Campusraum</strong><br>
            Der bestehende Discord wurde neu strukturiert, grafisch überarbeitet und klar gegliedert – als Ergänzung zur realen Welt.</p>

            <p><strong>Erweiterungen:</strong><br>
            <li>Channels für Events, Ankündigungen und AGs<br></li>
            <li>Bereiche für Skillsharing, Gaming, Studiengangs-Austausch<br></li>
            <li>Integration von Bots für Umfragen, Kalender und Moderation</li></p>

            <p><strong>Ziel:</strong> Einen informellen, lebendigen und nutzerfreundlichen digitalen Treffpunkt schaffen</p>

            <p><strong style="color: #000;">📌 Analoges Schwarzes Brett</strong><br>
            Um auch diejenigen zu erreichen, die offline unterwegs sind, wurde ein modernes Schwarzes Brett entwickelt und getestet.</p>

            <p><strong>Funktion:</strong><br>
            <li>Austauschfläche für studentische Aktionen, Hinweise, Gruppen und Events<br></li>
            <li>Platz für Kreatives, Post-Its, flexible Kartenhalter und mehr</p></li>

            <p><strong>Ziel:</strong> Physische Sichtbarkeit schaffen – als niederschwellige Ergänzung zu den digitalen Kanälen</p>

            <div class="spacer-xs"></div>
            <subh>Unser Fazit</subh>
            <p>Gute Kommunikation ist der Schlüssel zu Teilhabe.<br>
            Mit der WA-Community, dem optimierten Discord-Server und dem neuen Schwarzen Brett haben wir drei Formate entwickelt, die Kommunikation am Campus sichtbarer, zugänglicher und persönlicher machen – und Studierende miteinander verbinden.</p>
          </div>

          <div class="image-area">
          <img src="img/WA.jpeg" alt="Teamfoto 3" />
            <img src="img/Discord.png" alt="Teamfoto 3" />
            <img src="img/SB.jpg" alt="Teamfoto 3" />
            <img src="img/SB2.png" alt="Teamfoto 3" />
          </div>
        </div>
        </div>
      `;
      break;
    
      case "Danksagung":
        text = `
     <div id="content" class="card content-split">
        <h2>Wir sagen Danke!</h2>
        <div class="split-wrapper">
            <div class="text-area">
           <p>Ein Projekt wie FUSION 14 lebt von Engagement, Offenheit und Zusammenarbeit – und genau das durften wir in den letzten Monaten erleben.</p>

        <p>Wir möchten uns von Herzen bei all jenen bedanken, die uns auf diesem Weg begleitet und unterstützt haben:</p>
<div class="spacer-xs"></div>
        <subh>Lehrende & Betreuende</subh>
        <p>Für ihr Vertrauen, ihre kritischen Fragen, die fachliche Begleitung und den Raum, den sie uns gegeben haben, um Ideen zu entwickeln und umzusetzen.</p>
<div class="spacer-xs"></div>
        <subh>Studierende</subh>
        <p>Die mitgemacht, mitgedacht und mitgestaltet haben – ob durch Interviews, Feedback, Diskussionen oder spontane Beteiligung an unseren Aktionen.</p>
<div class="spacer-xs"></div>
        <subh>TH Köln & Campus Gummersbach</subh>
        <p>Für die strukturelle und technische Unterstützung sowie für die Offenheit gegenüber neuen, unkonventionellen Ideen.</p>
<div class="spacer-xs"></div>
        <subh>Stadt Gummersbach & externe Partner:innen</subh>
        <p>Die ihre Sichtweisen eingebracht und unser Projekt als Chance für gemeinsame Entwicklung gesehen haben.</p>

        <p>Ein besonderer Dank gilt all denen, die bereit waren, Neues zuzulassen, unsere Vision mitzutragen – und den Campus mit uns ein Stück weit neu zu denken.</p>

        <p><strong>FUSION 14 sagt: Danke für diesen Weg. Und auf das, was noch kommt.</strong></p>
      </div>
  
            <div class="image-area">
            <img src="img/logo_blau.png" alt="Teamfoto 3" />
            </div>
          </div>
          </div>
        `;
        break;

    case "Unser Weg zum Verstehen":
      text = `
   <div id="content" class="card content-split">
      <h2>Unser Weg zum Verstehen</h2>
      <div class="split-wrapper">
          <div class="text-area">
        <p>Die Discover-Phase war der Startpunkt von FUSION 14 und diente dazu, die Herausforderungen des Campus Gummersbach aus möglichst vielen Blickwinkeln zu beleuchten. Unser Ziel war es, den Ist-Zustand detailliert zu erfassen und ein umfassendes Verständnis für die Wünsche, Bedürfnisse und Einschränkungen rund um das Campusleben zu entwickeln.</p>
<div class="spacer-xs"></div>
        <subh>Drei Perspektiven, ein Ziel</subh>
        <p>Um systematisch vorzugehen, haben wir uns in drei Arbeitsgruppen aufgeteilt – jede mit einem eigenen Fokus:</p>
        <img src="img/3Blicke.png" alt="Teamfoto 3" class="foto-zentral" />
<div class="spacer-xs"></div>
        <subh>Benchmarking (Externer Blick)</subh>
        <p>Diese Gruppe analysierte vergleichbare Hochschulen und Städte, um erfolgreiche Konzepte für lebendige Campusumgebungen zu identifizieren.</p>
        <ul>
          <li>Web-Recherchen & Social Media</li>
          <li>Exkursionen zur Dutch Design Week Eindhoven & Folkwang Universität Essen</li>
          <li>Anwendung der Matching-Methode (Willi-Hanni-Gebbi-Board)</li>
        </ul>
<div class="spacer-xs"></div>
        <subh>IST-Analyse (Interner Blick)</subh>
        <p>Hier lag der Fokus auf den Bedürfnissen der Studierenden vor Ort.</p>
        <ul>
          <li>Fokusgruppen und Einzelinterviews</li>
          <li>Sinnes- und Fotodokumentationen</li>
          <li>Aufsteller auf dem Campus für spontane Impulse</li>
          <li>Analyse bestehender Angebote & Stakeholder-Perspektiven</li>
        </ul>
<div class="spacer-xs"></div>
        <subh>Rahmenbedingungen (Regulatorischer Blick)</subh>
        <p>Diese Gruppe identifizierte alle organisatorischen, rechtlichen und sicherheitsrelevanten Einschränkungen für zukünftige Maßnahmen.</p>
        <ul>
          <li>Interviews mit Hochschulverantwortlichen</li>
          <li>Recherche zu Veranstaltungsvorgaben, Brandschutz, Zugänglichkeit etc.</li>
          <li>Erstellung eines Handouts zu Regularien</li>
        </ul>
<div class="spacer-xs"></div>
        <subh>Methodenvielfalt für maximale Tiefe</subh>
        <p>Durch diese strukturierte Arbeitsteilung konnten wir die Situation aus drei komplementären Perspektiven beleuchten: inspirierende Best Practices von außen, echte Erfahrungen von innen und die realistischen Rahmenbedingungen für mögliche Lösungen.</p>
<div class="spacer-xs"></div>
        <subh>Das Ergebnis</subh>
        <p>Am Ende der Discover-Phase stand ein umfassendes Bild der aktuellen Campusrealität – und ein Katalog an Erkenntnissen, die in die nächste Phase, Define, eingeflossen sind. Die Erkenntnisse wurden visualisiert, präsentiert und in Cluster strukturiert, die später zur Formulierung erster Leitfragen genutzt wurden.</p>
      </div>
          <div class="image-area">
            <img src="img/D.png" alt="Teamfoto 1" />
          </div>
        </div>
      `;
      break;

    case "IST Analyse":
      text = `
   <div id="content" class="card content-split">
      <h2>Die IST-Gruppe – der Blick nach innen</h2>
      <div class="split-wrapper">
          <div class="text-area">
        <p>Die IST-Gruppe war verantwortlich für den internen Blick auf den Campus Gummersbach. Ihr Ziel war es, ein realistisches und möglichst vielschichtiges Bild der aktuellen Situation zu zeichnen – aus Sicht der Studierenden, Lehrenden und weiterer Akteur:innen vor Ort.</p>
<div class="spacer-xs"></div>
        <subh>Unsere Methoden</subh>
        <p>Um die tatsächlichen Bedürfnisse und Stimmungen am Campus einzufangen, setzte die Gruppe auf eine Kombination aus qualitativer Recherche, Beobachtung und Interaktion:</p>
<img src="img/IST.png" alt="Teamfoto 3" class="foto-zentral" />
        <subh>Fokusgruppen und Einzelinterviews</subh>
        <p>Mit gezielten Leitfragen wurden Gespräche mit Studierenden, Fachschaften und anderen relevanten Personen geführt. Hierbei stand der Alltag auf dem Campus im Mittelpunkt: Wo wird sich aufgehalten? Was fehlt? Was stört?</p>
<div class="spacer-xs"></div>
        <subh>Sinnes- und Fotodokumentationen</subh>
        <p>Die Gruppe beobachtete typische Wege, Orte und Verhaltensmuster auf dem Campus – und hielt diese visuell und stichwortartig fest.</p>
<div class="spacer-xs"></div>
        <subh>Recherche & Umfeldanalyse</subh>
        <p>Auch das Umfeld der Hochschule – insbesondere die Stadt Gummersbach – wurde in den Blick genommen. Wie wird die Stadt von Studierenden wahrgenommen? Welche Angebote gibt es außerhalb der TH?</p>
<div class="spacer-xs"></div>
        <subh>Interventionen & Campus-Aufsteller</subh>
        <p>Mit Interventionen auf dem Campus (kleine Änderungen oder Experimenten) wurden bisher nicht genutzte Orte geprüft. So wurde beispielsweise die Treppe im Foyer kurzzeitig zu einem Cafe oder die Fahrradständer zu einem Oudoor Fitnessstudio.</p>
<img src="img/I1.png" alt="Teamfoto 3" class="foto-zentral" />
        <div class="spacer-xs"></div>
        <subh>Die Ergebnisse</subh>
        <p>Die Erkenntnisse der IST-Gruppe zeigten deutlich:</p>
        <ul>
          <li>Es fehlt an niedrigschwelligen Begegnungsmöglichkeiten – sowohl innen wie außen.</li>
          <li>Viele Studierende empfinden den Campus als funktional, aber nicht einladend.</li>
          <li>Die Kommunikationswege zu Veranstaltungen oder Angeboten sind oft unklar oder zu verstreut.</li>
          <li>Es herrscht ein starker Wunsch nach mehr sozialer Interaktion am Campus – und mehr Verbindung zur Stadt Gummersbach.</li>
        </ul>

        <p>Diese Ergebnisse bildeten eine entscheidende Grundlage für die nachfolgenden Projektphasen und halfen dabei, realitätsnahe, bedürfnisorientierte Konzepte zu entwickeln. Das Miro-Board für die Wünsche finden sie hier in höherer Auflösung: <a href="https://miro.com/welcomeonboard/Wm9Vb1dHVDA2RklDMVdRdTduUGxHRzh5NHpYSHNxdGI2OXJrV3VIY3dNSk5TZ3BxNWRCSTF1b3FIeVdvemNDWEdGeEQ0R29BY1RVVGh1ZXpaS2U1c3NhbC9teFZyeGxiQnRuRU51MFdsTFJLNnpFY1JJWGhNWnVJQWh3RjRqV053VHhHVHd5UWtSM1BidUtUYmxycDRnPT0hdjE=?share_link_id=203974847063" target="_blank">Miro-Board</a></p>
      </div>

          <div class="image-area">
          <img src="img/leer.jpg" alt="Teamfoto 3" />
            <img src="img/IST2.jpg" alt="Teamfoto 3" />
            <img src="img/IST3.jpg" alt="Teamfoto 3" />
          </div>
        </div>
        </div>
      `;
      break;

    case "Benchmarking":
      text = `
      <div id="content" class="card content-split">
         <h2>Benchmarking - Was machen andere besser?</h2>
         <div class="split-wrapper">
             <div class="text-area">
            <p>Um frische Ideen für den Campus Gummersbach zu entwickeln, hat unser Team bewusst den Blick nach außen gerichtet. Die Benchmarking-Gruppe recherchierte, analysierte und ließ sich inspirieren – von anderen Hochschulen, Städten und innovativen Begegnungsorten.</p>

            <p><strong>Unser Ziel:</strong> Was können wir vom Campusleben anderswo lernen und auf Gummersbach übertragen?</p>
        <div class="spacer-xs"></div>
              <subh>Unser Weg</subh>
              <img src="img/BM.png" alt="Teamfoto 3" class="foto-zentral" />
              <p>Wir haben Websites, Social Media und Projektberichte durchstöbert – mit dem Fokus auf studentisches Leben, Raumgestaltung, Events und Kommunikationskultur. Mithilfe unseres selbst entwickelten „Willi-Hanni-Gebbi-Boards“ haben wir besonders gelungene Konzepte strukturiert miteinander verglichen.</p>
              <p>Ein weiteres Highlight waren unsere Exkursionen – unter anderem zur Dutch Design Week in Eindhoven und zur Folkwang Universität der Künste in Essen. Dort konnten wir hautnah erleben, wie kreative, offene Orte Begegnung und Identifikation schaffen.</p>
        <div class="spacer-xs"></div>
              <subh>Was wir mitgenommen haben</subh>
              <p>Erfolgreiche Campusse setzen auf:</p>
              <ul>
                <li>Offene, flexibel nutzbare Räume für Arbeit und Freizeit</li>
                <li>Kulinarische Vielfalt durch Foodtrucks und studentische Cafés</li>
                <li>Sichtbare Events, die Gemeinschaft schaffen</li>
                <li>Kommunikation, die funktioniert – über Instagram, Discord & Co.</li>
                <li>Räume für Mitgestaltung, Kultur, Sport und Kreativität</li>
              </ul>
                      <div class="spacer-xs"></div>
              <subh>Unser Fazit</subh>
              <p>Ein lebendiger Campus ist kein Zufallsprodukt – sondern das Ergebnis mutiger Ideen, offener Strukturen und echter Teilhabe. Die Erkenntnisse aus dem Benchmarking haben unsere Konzeptentwicklung maßgeblich geprägt und zeigen: Gummersbach kann mehr.</p>
            </div>
             <div class="image-area">
             <img src="img/BM3.jpg" alt="Teamfoto 3" />
               <img src="img/BM1.jpg" alt="Teamfoto 3" />
             </div>
           </div>
           </div>
         `;
         break;

         case "Rahmenbedingungen":
          text = `
            <div id="content" class="card content-split">
              <h2>Rahmenbedingungen – Was ist (rechtlich) machbar?</h2>
              <div class="split-wrapper">
                <div class="text-area">
                  <p>Neben kreativen Ideen braucht ein gutes Konzept auch Realitätssinn. Die Gruppe Rahmenbedingungen hat sich genau darum gekümmert: Welche Vorgaben gelten am Campus Gummersbach? Wo sind Spielräume – und wo Grenzen?</p>
        
                  <p><strong>Unser Ziel:</strong> Herausfinden, was bei der Umsetzung von Ideen organisatorisch, rechtlich und sicherheitstechnisch möglich ist – damit unsere Konzepte nicht nur gut gedacht, sondern auch machbar sind.</p>
        <div class="spacer-xs"></div>
                  <subh>Unser Vorgehen</subh>
                  <img src="img/RB.png" alt="Teamfoto 3" class="foto-zentral" />
                  <p>Wir haben Informationen gesammelt, Gespräche geführt und recherchiert. Dazu gehörten:</p>
                  <ul>
                    <li>Interviews mit Ansprechpersonen aus Verwaltung, Technik und Sicherheit</li>
                    <li>Analyse von Hochschulrichtlinien, Brandschutzvorgaben und Veranstaltungsregeln</li>
                    <li>Sammlung und Aufbereitung aller relevanten Dokumente</li>
                  </ul>
        <div class="spacer-xs"></div>
                  <subh>Erkenntnisse aus unserer Recherche</subh>
                  <ul>
                    <li>Viele Ideen sind grundsätzlich umsetzbar – aber unter bestimmten Bedingungen (z. B. Brandschutz, Lärmschutz, Fluchtwege)</li>
                    <li>Veranstaltungsplanung ist möglich, aber aufwändig: Es braucht Ansprechpartner:innen, rechtzeitige Anträge und ein gutes Konzept</li>
                    <li>Manche Räume sind öffentlich zugänglich, andere nur eingeschränkt oder gar nicht nutzbar – es braucht transparente Regelungen</li>
                    <li>Bei Infrastruktur (z. B. Strom, Wasser, Möbel) muss frühzeitig geplant werden – spontane Aktionen sind schwer realisierbar</li>
                    <li>Kreative Formate wie Pop-up-Stände oder Veranstaltungen im Außenbereich sind möglich, wenn Sicherheitsauflagen erfüllt werden</li>
                  </ul>
        <div class="spacer-xs"></div>
                  <subh>Unser Fazit</subh>
                  <p>Gute Ideen brauchen gute Vorbereitung. Die rechtlichen und organisatorischen Rahmenbedingungen bilden den Boden, auf dem unsere Konzepte wachsen können. Wir haben das Wissen gesammelt – damit andere nicht bei null anfangen müssen.</p>
                </div>
        
                <div class="image-area">
                  <img src="img/RB1.jpg" alt="Recherchematerial" />
                </div>
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
  const downloadCard = document.getElementById("downloads");
if (["Danksagung", "Willkommen", "Develop", "Unser Weg zum Verstehen", "Define", "Ausleihsystem"].includes(section)) {
  downloadCard.style.display = "none";
  return;
} else {
  downloadCard.style.display = "block";
}

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

      case "Events":
        files = [
          { name: "Broschüren", file: "FUSION14_Broschüren_Events.pdf", image: "Events1.png" }
        ];
        text.innerText = "Downloads zu den Ergebnissen der Gruppe Events:";
        break;
      
        case "Raumgestaltung":
          files = [
            { name: "Handout", file: "FUSION14_Raumgestaltung_Handout.pdf", image: "RG1.png" }
          ];
          text.innerText = "Downloads zu den Ergebnissen der Gruppe Raumgestaltung:";
          break;

    case "Startseite":
      files = [
        { name: "Unser Weg", file: "UnserWeg.pdf", image: "UnserWegTB.png" }
      ];
      text.innerText = "Downloads zum unserem bisherigen Weg:";
      break;
      case "IST Analyse":
        files = [
          { name: "GM Steckbrief", file: "FUSION14_Gummersbach_Steckbrief.pdf", image: "GM.png" },
          { name: "Fotodoku", file: "FUSION14_Fotodokumentation.pdf", image: "leer.jpg" },
          { name: "Interviews", file: "FUSION14_Interviews_Ergebnisse.pdf", image: "ICON.png" },
          { name: "User Journey", file: "FUSION14_UserJourney_Tabelle.pdf", image: "UJ.png" },
          { name: "Unsere Wünsche", file: "FUSION14_Wunschbilder.pdf", image: "W.png" },
        ];
        text.innerText = "Downloads zu den Ergebnissen aus der IST-Analyse:";
        break;
    case "Zwischenpräsentation":
      files = [
        { name: "Vision A0", file: "FUSION14_Vision_Poster.pdf", image: "logo_blau.png" },
        { name: "Stakeholder A0", file: "FUSION14_Stakeholder_Poster.pdf", image: "logo_blau.png" },
        { name: "Einführung A0", file: "FUSION14_Einführung_Poster.pdf", image: "logo_blau.png" },
        { name: "Personas A0", file: "FUSION14_Personas_Poster.pdf", image: "logo_blau.png" },
        { name: "User Journey A0", file: "FUSION14_UserJourney_Poster.pdf", image: "logo_blau.png" },
        { name: "Aufruf A1", file: "FUSION14_Aufsteller_A1.pdf", image: "ZP5.png" },
        { name: "Flyer", file: "Flyer_Zwischenpräsentation_FUSION14.pdf", image: "Flyer.png" },
      ];
      text.innerText = "Downloads zur Zwischenpräsentation:";
      break;

      case "Interventionen":
      files = [
        { name: "Treppen Poster A1", file: "FUSION14_Treppe_Poster.pdf", image: "INT3.jpg" },
        { name: "StudiStep Bauanleitung", file: "FUSION14_StudiStep_Bauanleitung.pdf", image: "INT2.jpg" },
        { name: "THrone Schnittmuster", file: "FUSION14_THrone_Schnittmuster.pdf", image: "INT8.jpg" },
        { name: "Modularer Treppensitz CAD-Datei", file: "FUSION14_modularer_Treppensitz_CAD_Daten.zip", image: "INT1.jpg" },
        { name: "Challenges Fahrradständer", file: "FUSION14_Fahrradständer_Challenges.pdf", image: "INT4.jpg" },
        { name: "Tisch Fahrradständer CAD-Datei", file: "FUSION14_Tischplatte.zip", image: "INT3.jpg" },
         { name: "QR-Ralley Handout", file: "FUSION14_QR-Ralley.pdf", image: "INT6.jpg" },
      ];
      text.innerText = "Downloads zu den Ergebnissen der Gruppe Interventionen:";
      break;

      case "Kommunikation":
        files = [
          { name: "Schwarzes Brett Beschriftung", file: "FUSION14_SchwarzesBrett.pdf", image: "SB.jpg" },
        ];
        text.innerText = "Downloads zu den Ergebnissen der Kommunikationskanäle:";
        break;


      case "Benchmarking":
        files = [
          { name: "Externe Hochschulen", file: "FUSION14_Analyse_externeHochschulen_Handout.pdf", image: "logo_blau.png" },
          { name: "Aufsteller", file: "FUSION14_Aufsteller.pdf", image: "logo_blau.png" },
          { name: "Exkursionen", file: "FUSION14_Exkursionen.pdf", image: "logo_blau.png" },
        ];
        text.innerText = "Downloads zur den Ergebnissen der Gruppe Benchmarking:";
        break;
      
        case "Rahmenbedingungen":
          files = [
            { name: "Handout", file: "FUSION14_Handout_Rahmenbedingungen.pdf", image: "logo_blau.png" },
          ];
          text.innerText = "Downloads zu den Ergebnissen der Gruppe Rahmenbedingungen:";
          break;
    case "Abschlusspräsentation":
      files = [
        { name: "Präsentation", file: "FUSION14_Endpräsentation.pdf", image: "logo_blau.png" },
        { name: "Ausleihsystem Plakate A1", file: "FUSION14_Ausleihsystem_Plakate.pdf", image: "logo_blau.png" },
        { name: "Kaffeewagen Plakat A1", file: "FUSION14_Interventionen_Plakat.pdf", image: "logo_blau.png" },
        { name: "Treppensitze Plakat A1", file: "FUSION14_Interventionen_Plakate2.pdf", image: "logo_blau.png" },
        { name: "QR-Ralley und Challenges Plakate A1", file: "FUSION14_Interventionen_Plakat3.pdf", image: "logo_blau.png" },
        { name: "Raumgestaltung Plakat A1", file: "FUSION14_Raumgestaltung_Plakat.pdf", image: "logo_blau.png" },
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
      text.innerText = "Ergebnisse aus der Deliver-Phase:";
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
