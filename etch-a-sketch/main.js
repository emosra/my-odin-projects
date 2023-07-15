const INITIAL_SIZE = 16;

const gridContainer = document.querySelector('.grid-container')
const gridElement = document.querySelector('.grid-cell')

const createGrid = (size) => {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        gridContainer.appendChild(gridRow)
        for (let j = 0; j < size; j ++) {
            const gridCell = document.createElement('div')
            gridCell.classList.add('grid-cell')
            gridRow.appendChild(gridCell)

            gridCell.addEventListener('mouseover', (e) => {
                gridCell.style.backgroundColor = 'black'
            })
        }
    }
}

createGrid(INITIAL_SIZE)