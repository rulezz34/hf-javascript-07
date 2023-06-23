// 1.1 Irassuk ki a mostani dátumot YYYY/MM/DD formátumban
// protip:
// '6' --> '06'
// '6'.padStart(2, '0') // '06'

const currentDate = new Date();
console.log(currentDate.toLocaleDateString('en'));

// 1.2 Irassuk ki a mostani dátum MM/DD/YY formátumban
// protip: használd az str.slice metódust

const dateString = currentDate.toISOString();
const slicedDateString = dateString.slice(0, 12);

// console.log(slicedDateString.toLocaleDateString('en'));

// 2. hozz létre egy dátum objektumot mostani dátummal, majd az adott dátumhoz adj hozzá 2 hetet

// 3. írj egy függvényt, amely paraméterül kap 2 dátumot, és visszaadja a későbbi dátumot

let firstDate = new Date('2021-08-01');
let secondDate = new Date('2023-08-15');

function kesobbiDatum(firstDate, secondDate) {
  if (firstDate > secondDate) {
    return firstDate;
  } else {
    return secondDate;
  }
}

// 4. számoljuk ki hány óra van még hátra éjfélig (felfele kerekítve --- használd a Math objektumot)

// 5. Irasd ki magyarul, hogy milyen nap van ma felhasználva a mostani dátumot
// Azaz a kód minden nap megfelelő napot írjon ki!!! // nem elég, hogy console.log('szombat');
// (hétfő-kedd-szerda-csütörtök-péntek-szombat-vasárnap)
// protip: jól nézd meg, hogy melyik a vasárnap és melyik a hétfő, pl MDN-en

const days = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];

function getDateNameOfToday(days) {
  const date = new Date();
  const dayIndex = date.getDay();
  const today = days[dayIndex];
  console.log(today);
}

// =====================================================================================
// || Az alábbi feladatok mindegyike az index.html-hez tartozik.                      ||
// || Ezen feladatokat anélkül oldd meg, hogy az index.html-ben módosítanál bármit is ||
// =====================================================================================
// protip: document.body
// 6. Kérd le az összes p elemet a dokumentumból és töröld ki azokat.

const allPTags = document.querySelectorAll('p');

for (let i = 0; i < allPTags.length; i++) {
  allPTags[i].remove();
}

// 7. Szúrj be egy h1 tag-et a dokumentumba, aminek a szövege legyen "Csapat statisztika"

const h1Tag = document.createElement('h1');
h1Tag.innerText = 'Csapat statisztika';
document.body.appendChild(h1Tag);

// 8.1 Szúrj be egy h2 tag-et a dokumentumba, aminek a szövege legyen "Csapatok"

const h2Tag = document.createElement('h2');
h2Tag.innerText = 'Csapatok';
document.body.appendChild(h2Tag);

// 8.2 Szúrj be egy span tag-et a h2-be, aminek a szövege legyen " listája" (figyelj a szóközre)

const h2TagSpan = document.createElement('span');
h2TagSpan.innerText = ' listája';
h2Tag.appendChild(h2TagSpan);

// 8.3 Kérd le ezt a span elemet a dokumentumból, nevezd el 'soughtSpan'-nak, majd állítsd át a színét kékre
// --- itt már CSSOM módosítást hajtunk végre, ezt még nem tanultuk, itt van a kód hozzá:
// soughtSpan.style.color = 'blue';
const soughtSpan = document.querySelector('span');
soughtSpan.style.color = 'blue';

// 9. Írj egy függvényt - getDOMRepresentationOf(team) -, amely paraméterül kap egy team-et és
// abból létrehozza a következő DOM részfát:
// (nem szúrja be a dokumentumba, csak létrehozza a DOM elemeket egymásba ágyazva)
// azaz a div gyermeke a p tag, a p tag szövege a csapat neve
// div gyermeke még az ul; ul-nek li gyermekei vannak....
/*
  <div>
    <p>Csapat neve pl. Best champions ever</p>
    <ul>
      <li>Csapattag neve pl. József</li>
      <li>Csapattag neve pl. Panna</li>
        ...
    </ul>
  </div>
*/
// protip: nyugodtan szedd szét további függvényekre ha úgy könyebb
// én személy szerint csak egy dolgot szerveztem ki külön függvénybe


function getDOMRepresentationOf(teams) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  for (let i = 0; i < teams.length; i++) {
    const teamsP = document.createElement('p');
    teamsP.innerText = teams[i].name;
    div.appendChild(teamsP);
    const ul = document.createElement('ul');
    div.appendChild(ul);
    for (let j = 0; j < teams[i].players.length; j++) {
      const player = document.createElement('li');
      player.innerText = teams[i].players[j].name;
      ul.appendChild(player);
    }
  }
}

// 10. Menj végig a teams tömbön és a 9. feladatban megírt függvényt felhasználva, szúrd be ezeket a
// rendezetlen listákat a dokumentumba

// 11. Válaszd ki minden második div-nél a benne lévő p elemet, és állítsd át kékre a szövegét
// (lásd 7.3-as feladat)
// protip: használj nth-child vagy nth-of-type pseudo class-t

function setToBlueTheTex() {
  const divs = document.querySelectorAll('div:nth-child(even)');
  console.log(divs);
}

// 12. Írj egy - getAverageScoreIn(team) - függvényt, ami meghatározza egy adott csapathoz tartozó átlagpontszámot
// Azaz a csapattagok átlagosan hány pontot szereztek.

function getAverageScoreIn(teams) {
  for (let i = 0; i < teams.length; i++) {
    let scoreOfTeam = 0;
    let averageScore = 0;
    for (let j = 0; j < teams[i].players.length; j++) {
      scoreOfTeam = scoreOfTeam + teams[i].players[j].score
    }
    averageScore = scoreOfTeam / teams[i].players.length;
    console.log(teams[i].name + ' csapat átlagpontszáma: ' + averageScore);
  }
}

// 13. Szúrj be egy h2 tag-et, a dokumentumba, aminek a szövege legyen "Csapattagok átlagos pontszáma"

const averagePointsOfTeamH2 = document.createElement('h2');
averagePointsOfTeamH2.innerText = 'Csapatok átlagos pontszáma';
document.body.appendChild(averagePointsOfTeamH2);


// 14. Szúrj be egy rendezetlen listát, mely tartalmazza az összes csapat átlagpontszámát a következő formátumban:
// - csapat1: átlagpontszáma csapat1-nek
// - csapat2: átlagpontszáma csapat2-nek
// ...
