const clickArea = document.getElementById("click-area");
const morseOutput = document.getElementById("morse-output");
const textOutput = document.getElementById("text-output");

let timer; // To track the duration of the click
let holdTime; // To calculate the hold duration
let inactivityTimer; // Timer for inactivity (end of a character)
let currentMorse = ""; // To store the current Morse code for a character

// Morse code dictionary
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
  "/": " ", // Space for clarity
};

// Function to translate Morse code to text
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
  clearTimeout(inactivityTimer); // Clear inactivity timer
  timer = Date.now(); // Record when the button is pressed
});

clickArea.addEventListener("mouseup", () => {
  holdTime = Date.now() - timer; // Calculate how long the button was held

  // Add to the current Morse code based on duration
  if (holdTime >= 500 && holdTime < 1000) {
    currentMorse += ".";
  } else if (holdTime >= 1000 && holdTime < 2000) {
    currentMorse += "-";
  }

  morseOutput.innerText = currentMorse; // Update the current Morse code display

  // Reset inactivity timer
  inactivityTimer = setTimeout(() => {
    translateMorse(); // Translate the Morse code after 5 seconds of inactivity
  }, 5000);
});

function send() {
  document.getElementById("button").innerHTML =
    "<p>email registered, sending you back to title</p>";
  timer = setTimeout(() => {
    location.href = document.URL.replace("contactMorse.html", "index.html");
  }, 2500);
}
