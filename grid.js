document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    let popup = document.querySelector("#popup");
    popup.addEventListener("click", function(){
        let size = getSize();
        createGrid(size);
    });
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
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        })
        container.insertAdjacentElement("beforeend", div);
        }
}

function getSize(){
    let input = prompt("choose a size of the grid")
    let message = document.querySelector("#message")
    if(input === ""){
        message.innerHTML = "Please enter a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Please enter a number between 1 and 100"
    }
    else{
        message.innerHTML = "Lets draw"
        return input;
    }
    }