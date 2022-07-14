/* Run JS */
const container = document.querySelector('div#container');
const customLayoutButton = document.querySelector('button#custom-layout-prompt');
calculateGrid();

customLayoutButton.addEventListener('click', newGridPrompt);


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
    this.style.backgroundColor = "salmon";
}

function newGridPrompt(e){
    let newSize = Number(prompt("Please enter a new size of your grid (i.e. 64 for a 64x64 grid, up to a maximum of 100 for a 100x100 grid)"));
    if( isNaN(newSize) || newSize > 100 ) {
        newSize = 16;
    }
    calculateGrid(newSize);
}