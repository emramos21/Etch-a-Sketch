const gridContainer = document.getElementById("gridContainer");
for (let i = 1; i < 15; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem);
}