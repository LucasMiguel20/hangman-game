// VARIABLES
let body = document.querySelector("body");
let starGameBtn = document.getElementById("start-game");

// Create the modal div
const modalDiv = document.createElement("div");
modalDiv.setAttribute("id", "modal-theme");
modalDiv.setAttribute("class", "theme-modal");
body.insertBefore(modalDiv, null);

// Create the modal contents
const modalContentDiv = document.createElement("div");
modalContentDiv.setAttribute("class", "theme-modal-content");
modalDiv.appendChild(modalContentDiv);

// Create a span in the modal content
const modalCloseSpan = document.createElement("span");
modalCloseSpan.setAttribute("id", "close-theme");
modalCloseSpan.setAttribute("class", "theme-close");
modalContentDiv.appendChild(modalCloseSpan);
document.getElementById("close-theme").innerHTML = "&times";

// Create a paragraph in the modal content
const modalText = document.createElement("p");
modalText.setAttribute("id", "modal-text");
modalContentDiv.appendChild(modalText);
document.getElementById("modal-text").innerHTML = "Escolha o tema";

// Create buttons with themes
function createThemeButtons(themeId, themeName) {
    const modalThemeButtons = document.createElement("button");
    modalThemeButtons.setAttribute("id", themeId);
    modalContentDiv.appendChild(modalThemeButtons);
    document.getElementById(themeId).innerHTML = themeName;
}
createThemeButtons("classic-theme", "Clássico");
createThemeButtons("school-theme", "Escola/Criança");
createThemeButtons("mk-theme", "MK");

// Start game button
starGameBtn.onclick = function () {
    modalDiv.style.display = "block";
}

// Clicking <span> (x), closes the modal
modalCloseSpan.onclick = function () {
    modalDiv.style.display = "none";
}

// Clicking anywhere outside the modal closes it
window.onclick = function (event) {
    if (event.target == modalDiv) {
        modalDiv.style.display = "none";
    }
}

// Start the game with the classic theme button.
const classicThemeBtn = document.getElementById("classic-theme");
let htmlClassicThemePath = "classicTheme.html";
function openInSameTab(path) {
    let openCalssicThemeScreen = window.open(path, "_self");
    openCalssicThemeScreen.focus();
}

classicThemeBtn.addEventListener("click", function () {
    openInSameTab(htmlClassicThemePath);
})