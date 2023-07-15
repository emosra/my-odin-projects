// Variables

const INITIAL_SIZE = 8;

const gridContainer = document.querySelector('.grid-container')
const resetBtn = document.querySelector('.reset-btn')
const blackBtn = document.querySelector('.black-btn')
const randomBtn = document.querySelector('.random-btn')
const rangeSlider = document.querySelector('.range-slider')
const rangeValue = document.querySelector('.range-value')

// Functions

const createGrid = (size) => {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        gridContainer.appendChild(gridRow)
        for (let j = 0; j < size; j ++) {
            const gridCell = document.createElement('div')
            gridCell.classList.add('grid-cell')
            gridRow.appendChild(gridCell)
        }
    }
}

const getRandomInt = () => {
    return Math.floor(Math.random() * 255)
}

// DOM

blackBtn.addEventListener('click', (e) => {
    document.querySelectorAll('.grid-cell').forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor ='black'
        })
    })
})

randomBtn.addEventListener('click', (e) => {
    document.querySelectorAll('.grid-cell').forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
        })
    })
})

resetBtn.addEventListener('click', (e) => {
    document.querySelectorAll('.grid-cell').forEach((cell) => {
        cell.style.backgroundColor = 'beige';
    })
})

rangeSlider.addEventListener('input', (e) => {
    rangeValue.textContent = rangeSlider.value + ' x ' + rangeSlider.value;
    gridContainer.replaceChildren()
    createGrid(rangeSlider.value)
})


// Intialize Grid

createGrid(INITIAL_SIZE)