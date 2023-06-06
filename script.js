const gridDisplayBox = document.getElementById('gridDisplayBox');   // Grid Selection //
const sliderValue = document.getElementById('gridSlider');



// ---------- RETRIEVE SLIDER VALUE FOR GRID GENERATION ---------- //

sliderValue.addEventListener('mouseup', () => {
    let num = sliderValue.value;
    console.log(num);
    createDiv(num);
})



// ---------- GENERATE GRID FUNCTION---------- //

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


// ---------- CLEAR GRID FUNCTION---------- //





// ---------- EVENT LISTENERS - FOR DRAWING---------- //
gridDisplayBox.addEventListener('mousedown', () => {
    gridDisplayBox.addEventListener('mousemove', draw);
    gridDisplayBox.addEventListener('mouseup', stopDraw);
})



// ------- DRAWING FUNCTIONS ------- //
function draw(e){
    e.preventDefault();
    e.target.style.backgroundColor = '#3b3b3b';
}
function stopDraw(e) {
    gridDisplayBox.removeEventListener('mousemove', draw);
}



