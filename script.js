const gridDisplayBox = document.getElementById('gridDisplayBox');   // Grid Selection //
const sliderValue = document.getElementById('gridSlider');          // Slider
const resetBtn = document.getElementById('resetBtn');               // Reset Button
const eraseBtn = document.getElementById('eraseBtn');               // Erase Button


// ******* STARTER - DEFAULT GRID ******* //
const defaultValue = 56;
createDiv(defaultValue);

// ******* ---------- RETRIEVE SLIDER VALUE FOR GRID GENERATION ---------- ******* //

sliderValue.addEventListener('mouseup', () => {
    resetGrid();
    let num = sliderValue.value;
    createDiv(num);
    // console.log(num);
})



// ******* ---------- GENERATE GRID FUNCTION---------- ******* //

function createDiv(num){
    let gridArea = num * num;
    for (let i = 0; i < gridArea; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'gridBlock');
        gridDisplayBox.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        gridDisplayBox.style.gridTemplateRows = `repeat(${num}, 1fr))`;
        gridDisplayBox.appendChild(gridDiv);
    } 
}


// ******* ---------- CLEAR GRID FUNCTION---------- ******* //
function resetGrid() {
    while (gridDisplayBox.firstChild) {
        gridDisplayBox.removeChild(gridDisplayBox.lastChild)
    }
}




// ******* ---------- EVENT LISTENERS - FOR DRAWING---------- ******* //

gridDisplayBox.addEventListener('mousedown', () => {
    gridDisplayBox.addEventListener('mousemove', draw);
    gridDisplayBox.addEventListener('mouseup', stopDraw);
})


// ******* ------- DRAWING FUNCTIONS ------- ******* //
function draw(e){
    e.preventDefault();
    e.target.style.backgroundColor = '#3b3b3b';
}
function stopDraw(e) {
    gridDisplayBox.removeEventListener('mousemove', draw);
}




// ******* ---------- RESET BUTTON - EVENT LISTENERS ---------- ******* //
resetBtn.addEventListener('click', () => {
    resetGrid();
    createDiv(sliderValue.value);
});




// ******* ---------- EVENT LISTENERS - FOR ERASING---------- ******* //
eraseBtn.addEventListener('click', addEraseListener);    // Targets Erase Button

// Erase when mouse down
function addEraseListener(e){                                           
    gridDisplayBox.addEventListener('mousedown', eraseOnMove);
}
//Erase when mouse moving BUT switches back to draw on mouse up
function eraseOnMove(){
    gridDisplayBox.addEventListener('mousemove', erase)
    gridDisplayBox.addEventListener('mouseup', () => {
        gridDisplayBox.removeEventListener('mousemove', erase);
        gridDisplayBox.removeEventListener('mousedown', eraseOnMove);
    })
}

// ------- ERASE FUNCTIONS ------- //
function erase(e){
    e.target.style.backgroundColor = '#c9c9c9';
    }



