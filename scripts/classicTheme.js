//VARIABLES
let xDashesPosition = [];
const wordLetters = [];
console.log(wordLetters);
const correctLetters = [];
console.log("correct"+correctLetters);
const wrongLetters = [];
const typedLetters = [];
console.log(typedLetters);
let hits = 0;
let mistakes = 0;
let attempts = 7;

//Canvas
let classicScreen = document.querySelector("#classicTheme");
let ctx = classicScreen.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 1200, 800);

// **********DRAWING GALLOWS STRUCTURES**********
function drawingStructure(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
}

// Base
drawingStructure("black", 10, 700, 150, 15);

// Main stem
drawingStructure("black", 50, 100, 10, 600);

// Rod support
function drawingRodSupport(color, mtx, mty, ltx1, lty1, ltx2, lty2) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(mtx, mty);
    ctx.lineTo(ltx1, lty1);
    ctx.lineTo(ltx2, lty2);
    ctx.fill();
}
drawingRodSupport("black", 50, 100, 185, 100, 50, 250)
drawingRodSupport("white", 60, 100, 160, 100, 60, 210)

// Rod to hang
drawingStructure("black", 50, 100, 300, 10);

// Rod for gallows
drawingStructure("black", 350, 100, 10, 100);

// **********BODY DRAWING**********
function drawingTheBody(color, mtx, mty, ltx, lty) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(mtx, mty);
    ctx.lineTo(ltx, lty);
    ctx.stroke();
}

// Head
ctx.beginPath();
ctx.arc(355, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

// Body
drawingTheBody("black", 355, 300, 355, 500);

// Right arm
drawingTheBody("black", 355, 325, 250, 250);

// Left arm
drawingTheBody("black", 355, 325, 460, 250);

// Left leg
drawingTheBody("black", 355, 500, 460, 600);

// Right leg
drawingTheBody("black", 355, 500, 250, 600);

// **********DASHES AND WORDS**********
// Creating words by categories
let words = {
    biology: ["cabeca", "perna", "braco", "pe", "mao"]
};

// Selecting a random word
const wordRandomSelected = words.biology[Math.floor(Math.random() * words.biology.length)];
console.log(wordRandomSelected)
wordLetters.push(wordRandomSelected.split(""))
// Drawing the letters
function drawLetters(letter, xPosition, yPosition) {
    ctx.font = "55px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText(letter.toUpperCase(), xPosition + 5, yPosition);
}

// Drawing the dashes
function drawDashes(xPosition) {
    for (let i = 0; i < wordRandomSelected.length; i++) {
        xPosition += 70;
        xDashesPosition.push(xPosition);
        drawingStructure("black", xPosition, 450, 50, 5);
    }
}
drawDashes(500);


// Drawing the correct letters in the dashes
window.addEventListener("keydown", typingLetter);

function typingLetter(event) {
    const keyPressed = event.key;
    typedLetters.push(keyPressed)
    for (let i = 0; i < wordRandomSelected.length; i++) {
        correctLetters.push(wordRandomSelected[i]);
        if (correctLetters[i] === keyPressed) {
            drawLetters(correctLetters[i], xDashesPosition[i], 440);
        } 
    }
}



/*
// Drawing the correct letters in the dashes
window.addEventListener("keydown", typingLetter);

function typingLetter(event) {
    const keyPressed = event.key;
    typedLetters.push(keyPressed)
    if (wordRandomSelected.includes(keyPressed)) {
        correctLetters.push(keyPressed);
    } else {
        wrongLetters.push(keyPressed);
    }
    drawCorrectLetters()
}

// Drawing the correct letters
function drawCorrectLetters() {
    for (let i = 0; i < wordRandomSelected.length; i++) {
        if (correctLetters[i] === typedLetters[i]) {
            drawLetters(correctLetters[i], xDashesPosition[i], 440);
        }         
        console.log(correctLetters[i]);
        console.log(xDashesPosition[i]);
    }
}
*/