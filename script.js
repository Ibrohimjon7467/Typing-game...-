const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

const words = [
  'norin',
  'googosha',
  'bayroq',
  'sichqon',
  'tomorqa',
  'avtoshoxbekat',
  'xarita',
  'sigir',
  'quloqchin',
  'erkatoy',
  'paxlavon',
  'sandiq',
  'barkamol',
  'qovun',
  'kashfiyot',
  'musoboqa',
  'mushohada',
  'karvon',
  'qishloq',
  'dangasa',
  'chumoli',
  'oyna',
  'deraza',
  'bashorat',
  'hammom',
  'choy',
  'diydor',
  'daftar',
  'axborot',
  'chiroq',
  'begona',
  'jarlik',
  'ibora',
  'muyulish',
  'daraxt',
  'sarson',
  'extimol',
  'kamon',
  'oyoq',
  'saboq',
  'ishonch',
  'pushaymon',
  'tong',
  'baxt',
  'zamon',
  'musiqa',
  'stol',
  'maxalla',
  'dardisar',
  'foydali',
  'piyola',
  'alisher',
  'kulgu',
  'piyoz',
  'poyezd',
  'kinofilm',
  'marjona',
  'kalit',
  'zargar',
  'igna',
  'chopar',
  'viloyat',
  'multfilm',
  'maqtanchoq',
  'million',
  'fanlar',
  'charxpalak',
  'yurak',
  'kaltabin',
  'dasturchi',
  'dasturlash',
  'panjara',
  'chorvoq',
  'qovoq',
  'baquvvat',
  'muslima',
  'musibat',
  'eshshak',
  'burgut',
  'mushuk',
  'choyxona',
  'humoyun',
  'sardor',
  'sulton',
  'amerika',
  'lashkarboshi',
  'kapitan',
  'harakat',
  'mashaqqat',
  'mukammal',
  'kalamush',
  'olma',
  'anor',
  'nok',
  'paxta',
  'norin',
  `go'sht`,
  `o'rmon`,
  `mo'ri`,
  `ko'rpa`,
  `po'kak`,
  `ko'pkari`,
];

let randomWord;

let score = 0;

let time = 10;

let difficulty = localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "medium";

difficultySelect.value = localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "medium";

text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `<h1>Time ran out</h1><p>Your final score is ${score}</p><button onclick="location.reload()" class="reload">Reload</button>`;

  endgameEl.style.display = "flex";
}

addWordToDOM();

text.addEventListener("input", (e)=> {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = "";

    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

settingsBtn.addEventListener("click", ()=> settings.classList.toggle("hide"));

settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});