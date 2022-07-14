/* Run JS */
const container = document.querySelector('div#container');
const customLayoutButton = document.querySelector('button#custom-layout-prompt');
const newRandomColorButton = document.querySelector('button#new-random-color');
let backgroundColor = getRandomColor();

calculateGrid();

/* Event Listeners */
customLayoutButton.addEventListener('click', newGridPrompt);
newRandomColorButton.addEventListener('click', assignNewColors);


/* Functions */
function calculateGrid( size=16 ) {
    clearGrid();
    for( let i = 0; i < size*size; i++ ){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', colorTile);
        container.appendChild(gridItem);
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    } 
}

function clearGrid() {
    container.innerHTML = "";
}

function colorTile(e) {
    this.style.backgroundColor = backgroundColor;
    this.classList.add("colorful");
}

function newGridPrompt(e){
    let newSize = Number(prompt("Please enter a new size of your grid (i.e. 64 for a 64x64 grid, up to a maximum of 100 for a 100x100 grid)"));
    if( isNaN(newSize) || newSize > 100 ) {
        newSize = 16;
    }
    calculateGrid(newSize);
}

function assignNewColors(e) {
    backgroundColor = getRandomColor();
    setNewColorToTiles();
}

function getRandomColor() {
    red = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    return `rgb(${red},${blue},${green})`;
}

function setNewColorToTiles() {
    let colorfulTiles = document.querySelectorAll("div.colorful");
    colorfulTiles.forEach( (tile) => {
        tile.style.backgroundColor = backgroundColor;
    });
}