const clickArea = document.getElementById("click-area");
const morseOutput = document.getElementById("morse-output");
const textOutput = document.getElementById("text-output");

let timer;
let holdTime;
let inactivityTimer;
let currentMorse = "";

const morseToChar = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  "...---...": "@",
  "-.-..--.-.": ".",
  "/": " ",
};

function translateMorse() {
  const letter = morseToChar[currentMorse] || "?"; // Translate or use "?" for unknown
  textOutput.innerText += letter; // Add the translated letter to the text output
  currentMorse = ""; // Reset for the next character
  morseOutput.innerText = ""; // Clear the current Morse code display
  if (textOutput.innerText.length > 0) {
    document.getElementById("button").innerHTML =
      "<input type='button' value='confirm' onclick='send()'>";
  }
}

clickArea.addEventListener("mousedown", () => {
  clearTimeout(inactivityTimer);
  timer = Date.now();
});

clickArea.addEventListener("mouseup", () => {
  holdTime = Date.now() - timer;

  if (holdTime >= 500 && holdTime < 1000) {
    currentMorse += ".";
  } else if (holdTime >= 1000 && holdTime < 2000) {
    currentMorse += "-";
  }

  morseOutput.innerText = currentMorse;

  inactivityTimer = setTimeout(() => {
    translateMorse();
  }, 5000);
});

function send() {
  document.getElementById("button").innerHTML =
    "<p>email registered, sending you back to title</p>";
  timer = setTimeout(() => {
    location.href = document.URL.replace("contactMorse.html", "index.html");
  }, 2500);
}
