let color = "black";
let click = false;
document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    document.querySelector("body").addEventListener("click", function(startDrawing){
        if(startDrawing.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Drawing";
            }
            else{
                draw.innerHTML = "Not Drawing";
            }
        }
    })
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
        div.addEventListener("mouseover", colorDiv)
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
    function colorDiv(){
        if(click){
            if(color == "random"){
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
            else{
                this.style.backgroundColor = 'black';
            }
    }
}
    function setColor(colorChoice){
        color = colorChoice;
    }
    function eraseGrid(){
        let divs = document.querySelectorAll("div")
        divs.forEach((div) => div.style.backgroundColor = "white")
    }