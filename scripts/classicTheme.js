//VARIABLES
let dashesPosition = [];
console.log(dashesPosition);
let wrongLettersPosition = [];
console.log(wrongLettersPosition);
const typedLetters = [];
console.log(typedLetters);
const correctLetters = [];
console.log(correctLetters);
const wrongLetters = [];
console.log(wrongLetters);

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

function drawBodyParts(mistakes) {
    switch (mistakes) {
        case 1:
            drawingHead()
            break;
        case 2:
            drwaingNeck()
            break;
        case 3:
            drwaingBody()
            break;
        case 4:
            drwaingRightArm()
            break;
        case 5:
            drwaingLeftArm()
            break;
        case 6:
            drwaingLeftLeg()
            break;
        case 7:
            drwaingRightLeg()
            break;
    }
}

// Head
function drawingHead() {
    ctx.beginPath();
    ctx.arc(355, 250, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

// Neck
function drwaingNeck() {
    drawingTheBody("black", 355, 300, 355, 325);
}

// Body
function drwaingBody() {
    drawingTheBody("black", 355, 325, 355, 500);
}

// Right arm
function drwaingRightArm() {
    drawingTheBody("black", 355, 325, 250, 250);
}


// Left arm
function drwaingLeftArm() {
    drawingTheBody("black", 355, 325, 460, 250);
}

// Left leg
function drwaingLeftLeg() {
    drawingTheBody("black", 355, 500, 460, 600);
}

// Right leg
function drwaingRightLeg() {
    drawingTheBody("black", 355, 500, 250, 600);
}


// **********DASHES AND WORDS**********
// Creating words by categories
let words = {
    biology: ["cabeca", "perna", "braco", "pe", "mao"]
};

// Selecting a random word
const wordRandomSelected = words.biology[Math.floor(Math.random() * words.biology.length)];
console.log(wordRandomSelected)

// Drawing the letters
function drawLetters(color, letter, xPosition, yPosition) {
    ctx.font = "55px Arial";
    ctx.fillStyle = color;
    ctx.fillText(letter.toUpperCase(), xPosition + 5, yPosition);
}

// Drawing the dashes
function drawDashes(xPosition) {
    for (let i = 0; i < wordRandomSelected.length; i++) {
        xPosition += 70;
        dashesPosition.push(xPosition);
        drawingStructure("black", xPosition, 450, 50, 5);
    }
}
drawDashes(500);

function drawWrongLetters(xPosition) {
    for (let i = 0; i < attempts; i++) {
        xPosition += 70;
        wrongLettersPosition.push(xPosition);
    }
}
drawWrongLetters(500);

// Drawing the correct letters in the dashes and wrong letters + body parts
function typingLetter(event) {
    const keyPressed = event.key;
    typedLetters.push(keyPressed)
    let miss = wordRandomSelected.includes(keyPressed);
    if (miss != true) {
        wrongLetters.push(keyPressed);

    } else {
        correctLetters.push(keyPressed);
    }
    // Wrong letters + body parts
    for (let i = 0; i < attempts; i++) {
        if (wrongLetters[i] === keyPressed) {
            mistakes++;
            drawLetters("red", wrongLetters[i], wrongLettersPosition[i], 140);
            drawBodyParts(mistakes);
        }
    }
    // Correct letters
    let counter = 0;
    while (counter < wordRandomSelected.length) {
        if (wordRandomSelected[counter] === keyPressed) {
            drawLetters("blue", wordRandomSelected[counter], dashesPosition[counter], 440);
        }
        counter += 1;
    }
}
window.addEventListener("keydown", typingLetter);