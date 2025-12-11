const typingSpeed = 100;
const deletingSpeed = 60;
const delayBetweenWords = 800;

var div = null;
var WORDS = [];

let wordIndex = 0;

function initWord(arrayOfWord, htmlElement) {
  WORDS = arrayOfWord;
  div = htmlElement;
  // Lancement
  typeWord(WORDS[wordIndex]);
}

function typeWord(word, i = 0) {
  if (i <= word.length) {
    div.innerHTML = word.substring(0, i) + '<span class="cursor">|</span>';
    setTimeout(() => typeWord(word, i + 1), typingSpeed);
  } else {
    setTimeout(() => deleteWord(word, word.length), delayBetweenWords);
  }
}

function deleteWord(word, i) {
  if (i >= 0) {
    div.innerHTML = word.substring(0, i) + '<span class="cursor">|</span>';
    setTimeout(() => deleteWord(word, i - 1), deletingSpeed);
  } else {
    // Prochain mot
    wordIndex = (wordIndex + 1) % WORDS.length;
    setTimeout(() => typeWord(WORDS[wordIndex]), typingSpeed);
  }
}

// Init
/*initWord([
  "Bonjour",
  "Monde"
  ], 
  document.getElementById("typewriter")
);*/