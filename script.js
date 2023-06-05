const gridDisplayBox = document.getElementById('gridDisplayBox');


// Make divs for grid //

// function createDiv(){
//     const gridItem = document.createElement('div');
//     gridItem.setAttribute('class', 'gridBlock');
//     gridDisplayBox.appendChild(gridItem);
// }
// createDiv();



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