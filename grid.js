document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    console.log("working");
})

function createGrid(size){
    const container = document.querySelector(".container");
    //the above code is allowing us to select only the grid and we
    //are assigning it to a variable in JS
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;
    for(let i = 0; i < numberDivs; i++){
        let div = document.createElement("div")
        div.style.backgroundColor = "red";
        container.insertAdjacentElement("beforeend", div);
        }
}