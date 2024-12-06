const clickArea = document.getElementById('click-area');
const morseOutput = document.getElementById('morse-output');
const textOutput = document.getElementById('text-output');

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
    "/": " " 
};


function translateMorse() {
    const letter = morseToChar[currentMorse] || "?"; 
    textOutput.innerText += letter; 
    currentMorse = ""; 
    morseOutput.innerText = ""; 
}

clickArea.addEventListener('mousedown', () => {
    clearTimeout(inactivityTimer); 
    timer = Date.now(); 
});

clickArea.addEventListener('mouseup', () => {
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
