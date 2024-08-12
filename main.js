let gridSize = 69;
let containerSize = 780 - gridSize;
let squareSize = (parseInt(containerSize) / gridSize).toString();

const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

const changeSizeInput = document.createElement("input");
changeSizeInput.addEventListener("input", updateGridParams);

const changeSizeBtn = document.createElement("button");
changeSizeBtn.textContent = "Change Grid Size";
changeSizeBtn.addEventListener("click", repaintGrid);

createGrid();

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
            square.style.opacity = 1;

            square.addEventListener("mouseover", (e) => {
                e.target.style.background = `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`;

                // darken by 10% on each mouse hover
                e.target.style.opacity = e.target.style.opacity - 0.1;
            });

            row.append(square);
        }

        container.append(row);
    }
}

function updateGridParams(e) {
    const newSize = e.target.value;
    gridSize = newSize;

    containerSize = 800 - gridSize;
    squareSize = (parseInt(containerSize) / gridSize).toString();
}

function repaintGrid() {
    if (gridSize > 100 || gridSize < 2 || isNaN(gridSize)) return;

    container.innerHTML = "";
    createGrid();
}

function getRandomRGBValue() {
    return (Math.random() * 255).toFixed().toString();
}

body.append(changeSizeInput, changeSizeBtn, container);
