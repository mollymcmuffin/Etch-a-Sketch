
function buildGrid(size){
    const container = document.querySelector('.container');
    for (let i = 0; i < size; i++){
        const colDiv = document.createElement('div');
        colDiv.setAttribute('class','column')
        container.appendChild(colDiv);
        for (let i = 0; i < size; i++){
            const rowDiv = document.createElement('div');
            rowDiv.setAttribute('class', 'row')
            colDiv.appendChild(rowDiv);
        }
    }
}



function draw(){
    this.classList.add('drawn');
    console.log()
}

function stopdraw(e){
    
    this.classList.remove('drawn');
}


function changeSize(e){
    let size = 16;
    do {size = prompt("Please enter NxN size", 16);
    }while (size > 100);

    const container = document.querySelector('.container');
    container.textContent = '';
    buildGrid(size);

    const grids = document.querySelectorAll('.row');
    grids.forEach(grid => grid.addEventListener('mouseover', draw));
}

function clearGrid(){
    let size = 16;
    const container = document.querySelector('.container');
    container.textContent = '';
    buildGrid(size);

    const grids = document.querySelectorAll('.row');
    grids.forEach(grid => grid.addEventListener('mouseover', draw));

}



buildGrid(16);

const size = document.querySelector('.size');
const grids = document.querySelectorAll('.row');
const clear = document.querySelector('.clear');
grids.forEach(grid => grid.addEventListener('mouseover', draw));


size.addEventListener('click', changeSize);
clear.addEventListener('click', clearGrid);




