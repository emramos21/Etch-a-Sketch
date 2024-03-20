document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    getSize();
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

function getSize(){
    //assign this to the button
    let input = prompt("choose a size of the grid")
    let error = document.querySelector("#error message")
    if(input === ""){

    }
}