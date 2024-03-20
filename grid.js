
const container = document.querySelector('.container')
    //the above code is allowing us to select only the grid and we
    //are assigning it to a variable in JS

function createGrid(column, rows){
    for (let i = 0; i < (column * rows); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid black'
        container.style.gridTemplateColumns = `repeate(${columns}, ifr)`
        container.style.gridTemplateRows = `repeate(${rows}, ifr)`
        container.appendChild(div).classList.add('box')
    }
}
createGrid(16,16)
console.log("working")
