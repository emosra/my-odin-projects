const Player = (name, choice, isTurn) => {
    
    return {name, choice, isTurn}
}

const gameBoard = (() => {
    const winningCombos = [
        [0,1,2], // [1,1,1,0,0,0,0,0,0]
        [3,4,5], // [0,0,0,1,1,1,0,0,0]
        [6,7,8], // [0,0,0,0,0,0,1,1,1]
        [0,3,6], // [1,0,0,1,0,0,1,0,0]
        [1,4,7], // [0,1,0,0,1,0,0,1,0]
        [2,5,8], // [0,0,1,0,0,1,0,0,1]
        [0,4,8], // [1,0,0,0,1,0,0,0,1]
        [2,4,6], // [0,0,1,0,1,0,1,0,0]
    ]
    const board = Array(9).fill(null);
    let playerOne;
    let playerTwo;
    let winningCombo;
    let haveWinner = false;
    let isBoardFull;

    return {winningCombos, board, playerOne, playerTwo, winningCombo, haveWinner, isBoardFull}
})();

const displayController = (() => {
    const body = document.querySelector('body')
    const gameContainer = document.querySelector('.game-container')
    const choiceContainer = document.querySelector('.choices-container')
    const cells = document.querySelectorAll('.cell')
    const selectionBtns = document.querySelectorAll('.choices')
    
    const renderBoard = () => {
        for (let i = 0; i < gameBoard.board.length; i++) {
            cells[i].textContent = gameBoard.board[i];
        }
    }

    const unBlurContainer = () => {
        gameContainer.style.filter = "blur(0px)";
        gameContainer.style.opacity = "1";

    }

    const hideSelectionContainer = () => {
        choiceContainer.style.display = 'none'
    }

    const createPlayerInfo = (player) => {
        const choiceText = document.createElement('div')
        choiceText.textContent = `${player.name}: ${player.choice}`
        body.appendChild(choiceText)
    }

    const checkWinner = (boardArr, player) => {
        for (let i = 0; i < gameBoard.winningCombos.length; i++) {
            let arr = [];
            for (let j = 0; j < gameBoard.winningCombos[i].length; j++) {
                const winningIndex = gameBoard.winningCombos[i][j];
                if (boardArr[winningIndex] === player.choice) {
                    arr.push(winningIndex);
                }
            }
            if (arr.length === 3) {
                gameBoard.winningCombo = arr;
                gameBoard.haveWinner = true;
                return;
            }
        }
    }

    const playerOneMove = (index) => {
        if (gameBoard.haveWinner === true) {
            return;
        }

        if (gameBoard.board.every(element => element !== null)) {
            return;
        }

        if (gameBoard.board[index] !== null) {
            return false
        }

            gameBoard.board[index] = gameBoard.playerOne.choice;
            gameBoard.playerOne.isTurn = !gameBoard.playerOne.isTurn;
            gameBoard.playerTwo.isTurn = !gameBoard.playerTwo.isTurn
            checkWinner(gameBoard.board, gameBoard.playerOne)

            return true;
    }

    const playerTwoMove = () => {
        if (gameBoard.haveWinner === true) {
            return;
        }

        if (gameBoard.board.every(element => element !== null)) {
            return;
        }

        const playerTwoIndex = Math.floor(Math.random() * gameBoard.board.length);
        if (gameBoard.board[playerTwoIndex] !== null) {
            playerTwoMove()
            return;
        }

        gameBoard.board[playerTwoIndex] = gameBoard.playerTwo.choice;
        gameBoard.playerOne.isTurn = !gameBoard.playerOne.isTurn;
        gameBoard.playerTwo.isTurn = !gameBoard.playerTwo.isTurn;
        checkWinner(gameBoard.board, gameBoard.playerTwo)
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', (e) => {
            if (playerOneMove(index)) {
                playerOneMove(index)
                playerTwoMove()
            }
            
            renderBoard()

            if (gameBoard.haveWinner) {
                for (let i = 0; i < gameBoard.winningCombo.length; i++) {
                    const winningIndexes = gameBoard.winningCombo[i];
                    
                    cells[winningIndexes].style.opacity = '0.5';
                    cells[winningIndexes].style.outline = '1px solid #FCC726'
                }
            }

            gameBoard.isBoardFull = gameBoard.board.every(element => element !== null)

            if (gameBoard.isBoardFull & gameBoard.haveWinner === false) {
                for (let i = 0; i < cells.length; i++) {
                    
                    cells[i].style.opacity = '0.5';
                }
            }
        })
    })
    
    selectionBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            gameBoard.playerOne = Player('Player One', btn.textContent, true)

            if (gameBoard.playerOne.choice === 'X') {
                gameBoard.playerTwo = Player('Player Two', 'O', false)
            } else if (gameBoard.playerOne.choice === 'O') {
                gameBoard.playerTwo = Player('Player Two', 'X', false)
            }

            hideSelectionContainer();
            unBlurContainer();
            createPlayerInfo(gameBoard.playerOne);
            createPlayerInfo(gameBoard.playerTwo);
        })
    })
    return {renderBoard}
})();