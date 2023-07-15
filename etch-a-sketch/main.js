const INITIAL_SIZE = 16;

const gridContainer = document.querySelector('.grid-container')

const createGrid = (size) => {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        gridContainer.appendChild(gridRow)
        for (let j = 0; j < size; j ++) {
            const gridSquare = document.createElement('div')
            gridSquare.classList.add('grid-element')
            gridRow.appendChild(gridSquare)
        }
    }
}

createGrid(INITIAL_SIZE)