const gridDisplayBox = document.getElementById('gridDisplayBox');


// ---------- EVENT LISTENERS ---------- //
gridDisplayBox.addEventListener('mousedown', () => {
    gridDisplayBox.addEventListener('mousemove', draw);
    gridDisplayBox.addEventListener('mouseup', stopDraw);
})



// ---------- FUNCTION CREATE GRID ---------- //

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
createDiv(24);


// ------- DRAWING FUNCTIONS ------- //
function draw(e){
    e.preventDefault();
    e.target.style.backgroundColor = '#3b3b3b';
}
function stopDraw(e) {
    gridDisplayBox.removeEventListener('mousemove', draw);
}

