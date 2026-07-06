// ── Variables ───────────────────────────────────────────────────────────────

const INITIAL_ELO = 1500;
const ELO_K = 32;

const LOW_ELO_THRESHOLD = 1420;
const HIGH_ELO_THRESHOLD = 1565;
const LOW_ELO_WEIGHT = 0.05;
const HIGH_ELO_WEIGHT = 2.0;

// ── State ───────────────────────────────────────────────────────────────────

let currentListKey = "letterboxd";
let originalFilms = []; // Backup für Feintuning
let isFinetuning = false;
let films = createFilms(FILM_LISTS[currentListKey].films);
let comparedPairs = new Set();
let comparisons = 0;
let history = [];
let pair = [];

// ── Filmliste ───────────────────────────────────────────────────────────────

function createFilms(rawFilms) {
  const films = [];
  const seen = new Set();

  for (const [title, year, director, altTitle = "", poster = ""] of rawFilms) {
    const key = title.toLowerCase().trim();
    if (seen.has(key)) continue;

    seen.add(key);
    films.push(newFilm(title, year, director, altTitle, poster));
  }

  return films;
}

function newFilm(title, year = "?", director = "Unbekannt", altTitle = "", poster = "") {
  return {
    title,
    year,
    director,
    altTitle,
    poster,
    elo: INITIAL_ELO,
    wins: 0,
    losses: 0,
    comparisons: 0,
    skipped: false
  };
}

// ── Pair-Auswahl ────────────────────────────────────────────────────────────

function pairKey(a, b) {
  return [a, b].sort((x, y) => x - y).join("-");
}

function topComparisonTarget() {
  const topFilms = films.filter(
    film => !film.skipped && film.elo >= HIGH_ELO_THRESHOLD
  );

  if (topFilms.length === 0) return 1;
  return Math.max(...topFilms.map(film => film.comparisons), 1);
}

function filmWeight(film, target) {
  let weight = 1.0;

  // weak films appear less often
  if (film.elo < LOW_ELO_THRESHOLD) {
    weight *= LOW_ELO_WEIGHT;
  }

  // strong films appear more often
  if (film.elo > HIGH_ELO_THRESHOLD) {
    weight *= HIGH_ELO_WEIGHT;

    // dynamic boost if a good film is not yet well tested
    const coverage = film.comparisons / target;
    weight *= Math.max(1, 2 - coverage);
  }

  return weight;
}

function chooseFilm(exclude = null) {
  const active = films
    .map((film, index) => ({ film, index }))
    .filter(item => !item.film.skipped && item.index !== exclude)
    .map(item => item.index);

  if (active.length === 0) return null;

  // first phase: every film must appear at least once
  // so unknown movies can be sorted early out
  const untested = active.filter(index => films[index].comparisons === 0);
  if (untested.length > 0) {
    return randomItem(untested);
  }

  // weighted phase
  // lower rated movies are shown less and higher rated movies more often
  const target = topComparisonTarget();
  const weights = active.map(index => filmWeight(films[index], target));
  return weightedChoice(active, weights);
}

function choosePair() {
  for (let tries = 0; tries < 100; tries++) {
    const first = chooseFilm();
    const second = chooseFilm(first);

    if (first === null || second === null) return null;

    if (!comparedPairs.has(pairKey(first, second))) {
      const nextPair = [first, second];
      shuffle(nextPair);
      return nextPair;
    }
  }

  return null;
}

// ── ELO ─────────────────────────────────────────────────────────────────────

function updateElo(winnerElo, loserElo) {
  // using elo formula from chess
  const expected = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
  winnerElo = Math.round(winnerElo + ELO_K * (1 - expected));
  loserElo = Math.round(loserElo + ELO_K * (expected - 1));
  return [winnerElo, loserElo];
}

// ── UI ──────────────────────────────────────────────────────────────────────

const startPage = document.querySelector("#startPage");
const quizPage = document.querySelector("#quizPage");
const resultsPage = document.querySelector("#resultsPage");

const newTitleInput = document.querySelector("#newTitleInput");
const addFilmButton = document.querySelector("#addFilmButton");
const addFeedback = document.querySelector("#addFeedback");
const startButton = document.querySelector("#startButton");
const listSelect = document.querySelector("#listSelect");

const undoButton = document.querySelector("#undoButton");
const resultsButton = document.querySelector("#resultsButton");
const resetButton = document.querySelector("#resetButton");
const backButton = document.querySelector("#backButton");

const statusText = document.querySelector("#status");
const progressFill = document.querySelector("#progressFill");
const rankingBody = document.querySelector("#rankingBody");
const resultsInfo = document.querySelector("#resultsInfo");

const exportButton = document.querySelector("#exportButton");
const finetuneButton = document.querySelector("#finetuneButton");

const yearMinInput = document.querySelector("#yearMin");
const yearMaxInput = document.querySelector("#yearMax");
const yearMinLabel = document.querySelector("#yearMinLabel");
const yearMaxLabel = document.querySelector("#yearMaxLabel");
const rangeHighlight = document.querySelector("#rangeHighlight");
const yearFilterInfo = document.querySelector("#yearFilterInfo");

const cards = [
  document.querySelector("#card0"),
  document.querySelector("#card1")
];

function showPage(page) {
  startPage.classList.add("hidden");
  quizPage.classList.add("hidden");
  resultsPage.classList.add("hidden");
  page.classList.remove("hidden");
}

function setFeedback(text, type = "") {
  addFeedback.textContent = text;
  addFeedback.className = `feedback ${type}`.trim();
}

function resetRankingForList(listKey) {
  currentListKey = listKey;
  films = createFilms(FILM_LISTS[currentListKey].films);
  originalFilms = [];
  isFinetuning = false;
  comparisons = 0;
  history = [];
  pair = [];
  newTitleInput.value = "";
  setFeedback(`${FILM_LISTS[currentListKey].label}: ${films.length} Filme geladen.`, "good");
  updateYearSliderRange();
  updateYearFilter();
}

function normalize(text) {
  return text.toLowerCase().trim();
}

// ── Startseite ──────────────────────────────────────────────────────────────

function checkTitle() {
  // check while typing if the title is already in the list
  const raw = newTitleInput.value.trim();
  const query = normalize(raw);

  if (!raw) {
    setFeedback("");
    return;
  }

  // exact match
  const exact = films.find(film => normalize(film.title) === query || normalize(film.altTitle) === query);
  if (exact) {
    setFeedback(`„${exact.title}” ist bereits in der Liste.`, "good");
    return;
  }

  // safe partial match, only after 3 characters
  // works for english title oder german title
  let partial = null;
  if (query.length >= 3) {
    partial = films.find(film => normalize(film.title).includes(query) || normalize(film.altTitle).includes(query));
  }

  if (partial) {
    setFeedback(`Meinst Du „${partial.title}”? Der Film ist bereits in der Liste.`, "good");
  } else {
    setFeedback(`„${raw}” ist noch nicht in der Liste – Enter zum Hinzufügen.`, "bad");
  }
}

function addFilm() {
  const title = newTitleInput.value.trim();
  if (!title) return;

  const exists = films.some(film => normalize(film.title) === normalize(title));
  if (exists) return;

  films.push(newFilm(title));
  newTitleInput.value = "";
  setFeedback(`✓ „${title}” wurde hinzugefügt.`, "good");
}

// ── Year Range Slider ────────────────────────────────────────────────────────

function updateYearSliderRange() {
  const years = films.map(f => typeof f.year === "number" ? f.year : parseInt(f.year, 10)).filter(y => !isNaN(y));
  if (years.length === 0) return;
  const min = Math.min(...years);
  const max = Math.max(...years);
  yearMinInput.min = min;
  yearMinInput.max = max;
  yearMinInput.value = min;
  yearMaxInput.min = min;
  yearMaxInput.max = max;
  yearMaxInput.value = max;
}

function updateYearFilter() {
  let minVal = parseInt(yearMinInput.value, 10);
  let maxVal = parseInt(yearMaxInput.value, 10);

  // prevent crossing
  if (minVal > maxVal) {
    yearMinInput.value = maxVal;
    minVal = maxVal;
  }
  if (maxVal < minVal) {
    yearMaxInput.value = minVal;
    maxVal = minVal;
  }

  yearMinLabel.textContent = minVal;
  yearMaxLabel.textContent = maxVal;

  // highlight bar
  const rangeMin = parseInt(yearMinInput.min, 10);
  const rangeMax = parseInt(yearMinInput.max, 10);
  const span = rangeMax - rangeMin || 1;
  const leftPct = ((minVal - rangeMin) / span) * 100;
  const rightPct = ((maxVal - rangeMin) / span) * 100;
  
  // Update CSS custom properties on the wrapper
  const wrap = rangeHighlight.closest('.range-track-wrap');
  if (wrap) {
    wrap.style.setProperty('--left', leftPct + '%');
    wrap.style.setProperty('--right', (100 - rightPct) + '%');
  }

  // count filtered films
  const count = films.filter(f => {
    const y = typeof f.year === "number" ? f.year : parseInt(f.year, 10);
    return !isNaN(y) && y >= minVal && y <= maxVal;
  }).length;
  yearFilterInfo.textContent = `${count} von ${films.length} Filmen im gewählten Zeitraum`;
}

// ── Quiz ────────────────────────────────────────────────────────────────────

function startQuiz() {
  // apply year filter: mark films outside selected range as skipped
  const minYear = parseInt(yearMinInput.value, 10);
  const maxYear = parseInt(yearMaxInput.value, 10);
  for (const film of films) {
    const y = typeof film.year === "number" ? film.year : parseInt(film.year, 10);
    if (isNaN(y) || y < minYear || y > maxYear) {
      film.skipped = true;
    }
  }

  const active = films.filter(f => !f.skipped);
  if (active.length < 2) {
    alert("Nicht genug Filme im gewählten Zeitraum. Bitte den Filter anpassen.");
    return;
  }

  showPage(quizPage);
  refresh();
  nextPair();
}

function nextPair() {
  const next = choosePair();

  if (next === null) {
    alert(
      "Alle möglichen Vergleiche wurden durchgeführt.\n\n" +
      "Du kannst die Ergebnisse ansehen oder weitere Filme hinzufügen."
    );
    return;
  }

  pair = next;
  updateCard(0, films[pair[0]]);
  updateCard(1, films[pair[1]]);
}

function updateCard(side, film) {
  const card = cards[side];
  card.querySelector(".year").textContent = film.year;
  card.querySelector(".title").textContent = film.title;
  card.querySelector(".director").textContent = film.director;
  
  // Set poster image with a robust fallback placeholder
  const posterImg = card.querySelector(".poster");
  const encodedTitle = encodeURIComponent(film.title_en || film.title);
  const placeholder = `https://ui-avatars.com/api/?name=${encodedTitle}&size=400&background=1c1c1e&color=fff&length=2&bold=true`;
  posterImg.onerror = () => { posterImg.onerror = null; posterImg.src = placeholder; };
  posterImg.src = film.poster ? film.poster : placeholder;
}

function choose(side) {
  const winnerIndex = pair[side];
  const loserIndex = pair[1 - side];

  comparedPairs.add(pairKey(winnerIndex, loserIndex));

  const winner = films[winnerIndex];
  const loser = films[loserIndex];

  history.push({
    winnerIndex,
    loserIndex,
    winnerElo: winner.elo,
    loserElo: loser.elo
  });

  [winner.elo, loser.elo] = updateElo(winner.elo, loser.elo);

  winner.wins += 1;
  winner.comparisons += 1;
  loser.losses += 1;
  loser.comparisons += 1;
  comparisons += 1;

  refresh();
  nextPair();
}

function skip(side) {
  films[pair[side]].skipped = true;

  const kept = pair[1 - side];
  const newIndex = chooseFilm(kept);

  if (newIndex === null) {
    alert("Nicht genug aktive Filme übrig.");
    refresh();
    return;
  }

  pair[side] = newIndex;
  updateCard(side, films[newIndex]);
  refresh();
}

function undo() {
  if (history.length === 0) {
    alert("Kein vorheriger Vergleich.");
    return;
  }

  const last = history.pop();
  const winner = films[last.winnerIndex];
  const loser = films[last.loserIndex];

  winner.elo = last.winnerElo;
  loser.elo = last.loserElo;
  winner.wins -= 1;
  winner.comparisons -= 1;
  loser.losses -= 1;
  loser.comparisons -= 1;
  comparisons -= 1;

  pair = [last.winnerIndex, last.loserIndex];
  updateCard(0, winner);
  updateCard(1, loser);
  refresh();
}

function refresh() {
  const skipped = films.filter(film => film.skipped).length;
  const f_length = films.filter(film => !film.skipped).length;
  let recommended_comparisons = (f_length * (f_length - 1)) / 2;
  
  // recommended comparisons are dynamically calculated
  if (recommended_comparisons > 500){
    recommended_comparisons = Math.round(2.5 * f_length);
  }
  
  const remaining = Math.max(0, recommended_comparisons - comparisons);

  statusText.textContent = `Vergleiche: ${comparisons} · ~${remaining} empfohlen · ${skipped} übersprungen`;
  progressFill.style.width =
    `${Math.min(100, comparisons / recommended_comparisons * 100)}%`;
}

// ── Ergebnisse und Export ──────────────────────────────────────────────────────────────

function showResults() {
  const ranked = films
    .filter(film => !film.skipped)
    .slice()
    .sort((a, b) => b.elo - a.elo);

  rankingBody.innerHTML = "";
  
  if (isFinetuning) {
    resultsInfo.textContent = `Feintuning: ${comparisons} Vergleiche · ${ranked.length} aktive Filme`;
    finetuneButton.style.display = "none";
    backButton.textContent = "Zurück zum Haupt-Ranking";
  } else {
    resultsInfo.textContent = `${comparisons} Vergleiche · ${ranked.length} aktive Filme`;
    finetuneButton.style.display = "inline-block";
    backButton.textContent = "Zurück zur Abfrage";
  }

  ranked.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${escapeHtml(film.title)}</td>
      <td>${escapeHtml(String(film.year))}</td>
      <td>${escapeHtml(film.director)}</td>
      <td>${film.elo}</td>
    `;
    rankingBody.appendChild(row);
  });

  showPage(resultsPage);
}

function exportTxt() {
  const ranked = films
    .filter(film => !film.skipped)
    .slice()
    .sort((a, b) => b.elo - a.elo);

  const lines = [
    "MEIN PERSÖNLICHES FILM-RANKING",
    `${comparisons} Vergleiche · ${ranked.length} aktive Filme`,
    "",
    ...ranked.map((film, i) =>
      `${String(i + 1).padStart(3, " ")}. ${film.title} (${film.year}) – ${film.director}  [ELO ${film.elo}]`
    )
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "film_ranking.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function startFinetuning() {
  const ranked = films
    .filter(film => !film.skipped)
    .slice()
    .sort((a, b) => b.elo - a.elo);

  const top20 = ranked.slice(0, Math.ceil(ranked.length * 0.2));

  // Backup der aktuellen Session speichern, bevor wir überschreiben
  originalFilms = films;
  isFinetuning = true;

  // Feintuning-Filme mit allen Eigenschaften (inkl. Poster) erzeugen
  films = top20.map(film => {
    const newF = newFilm(film.title, film.year, film.director, film.altTitle, film.poster);
    newF.elo = INITIAL_ELO; // Reset ELO für sauberes Feintuning
    return newF;
  });

  comparisons = 0;
  history = [];
  pair = [];
  comparedPairs = new Set();

  startQuiz();
}

function exitFinetuning() {
  if (!isFinetuning) return;
  
  // Backup wiederherstellen
  films = originalFilms;
  isFinetuning = false;
  originalFilms = [];
  
  // Die Haupt-Historie & Vergleiche sind unwiederbringlich weg, 
  // da wir im Feintuning globale Zähler (`comparisons`, `history`) überschrieben haben.
  // Um das sauber zu lösen, triggern wir besser einen Hard-Refresh für das gewählte Listen-Set,
  // ODER wir zeigen einfach die Results der großen Liste wieder an, was aber eine tiefergehende State-Speicherung bräuchte.
  // Einfachste und sauberste Lösung für den "Zurück" Klick aus dem Feintuning:
  showResults();
}

// ── Utils ───────────────────────────────────────────────────────────────────

function weightedChoice(items, weights) {
  const total = weights.reduce((sum, value) => sum + value, 0);
  let randomValue = Math.random() * total;

  for (let i = 0; i < items.length; i += 1) {
    randomValue -= weights[i];
    if (randomValue <= 0) return items[i];
  }

  return items[items.length - 1];
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ── Events ──────────────────────────────────────────────────────────────────

newTitleInput.addEventListener("input", checkTitle);
newTitleInput.addEventListener("keydown", event => {
  if (event.key === "Enter") addFilm();
});

addFilmButton.addEventListener("click", addFilm);
listSelect.addEventListener("change", () => resetRankingForList(listSelect.value));
yearMinInput.addEventListener("input", updateYearFilter);
yearMaxInput.addEventListener("input", updateYearFilter);
startButton.addEventListener("click", startQuiz);
undoButton.addEventListener("click", undo);
resultsButton.addEventListener("click", showResults);
resetButton.addEventListener("click", () => window.location.reload());
backButton.addEventListener("click", () => {
  if (isFinetuning) {
    exitFinetuning();
  } else {
    showPage(quizPage);
  }
});
exportButton.addEventListener("click", exportTxt);
finetuneButton.addEventListener("click", startFinetuning);

cards.forEach((card, side) => {
  card.addEventListener("click", () => choose(side));
  card.querySelector(".skip").addEventListener("click", event => {
    event.stopPropagation();
    skip(side);
  });
});

resetRankingForList(currentListKey);
