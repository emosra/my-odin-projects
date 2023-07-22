const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    let haveWinner = false;

    let playerOne;
    let playerTwo;
    

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

    return {board, haveWinner, winningCombos}
})();

const displayController = (() => {
    const cells = document.querySelectorAll('.cell')
    const selectionBtns = document.querySelectorAll('.choices')
    const choiceContainer = document.querySelector('.choices-container')
    const gameContainer = document.querySelector('.game-container')
    const body = document.querySelector('body')
    
    const renderBoard = () => {
        for (let i = 0; i < gameBoard.board.length; i++) {
            cells[i].textContent = gameBoard.board[i];
        }
    }

    const unBlurContainer = () => {
        gameContainer.style.filter = "blur(0px)";

    }

    const checkWinner = (player) => {
        for (let i = 0; i < gameBoard.winningCombos.length; i++) {
            let matches = 0;
            for (let j = 0; j < gameBoard.winningCombos[i].length; j++) {
                if (gameBoard.board[gameBoard.winningCombos[i][j]] === player.choice) {
                    matches += 1;
                }
            }
            if (matches === 3) {
                gameBoard.haveWinner = true;
                break;
            }
        }
    }

    const playerMove = (player, cell, index) => {
        gameBoard.board[index] = player.choice;
        cell.textContent = player.choice;
        playerOne.isTurn = !playerOne.isTurn;
        playerTwo.isTurn = !playerTwo.isTurn;
        checkWinner(player)


        // if (player.isTurn) {
            // gameBoard.board[index] = player.choice;
            // cell = player.choice;


            // playerOne.isTurn = false;
            // playerTwo.isTurn = true;
            // checkWinner(playerOne)
        // }

        // else {
        //     gameBoard.board[index] = playerTwo.choice;
        //     e.target.textContent = playerTwo.choice;
        //     playerTwo.isTurn = false;
        //     playerOne.isTurn = true;
        //     checkWinner(playerTwo)
        // }
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', (e) => {

            if (e.target.textContent !== '' || gameBoard.haveWinner === true) return;

            if (playerOne.isTurn) {
                playerMove(playerOne, e.target, index)
                // cell.textContent = playerOne.choice;
            } else {
                playerMove(playerTwo, e.target, index)
                // e.target.textContent = playerTwo.choice;
            }

            // if (playerOne.isTurn) {
            //     gameBoard.board[index] = playerOne.choice;
            //     e.target.textContent = playerOne.choice;
            //     playerOne.isTurn = false;
            //     playerTwo.isTurn = true;
            //     checkWinner(playerOne)
            // } else {
            //     gameBoard.board[index] = playerTwo.choice;
            //     e.target.textContent = playerTwo.choice;
            //     playerTwo.isTurn = false;
            //     playerOne.isTurn = true;
            //     checkWinner(playerTwo)
            // }
            
        })
    })

    selectionBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            

            playerOne = Player(e.target.textContent, true)

            if (playerOne.choice === 'X') {
                playerTwo = Player('O', false)
            } else if (playerOne.choice === 'O') {
                playerTwo = Player('X', false)
            }

            choiceContainer.style.display = 'none'
            unBlurContainer()

            const playerOneChoiceText = document.createElement('div')
            const playerTwoChoiceText = document.createElement('div')

            playerOneChoiceText.textContent = `Player one: ${playerOne.choice}`
            playerTwoChoiceText.textContent = `Player two: ${playerTwo.choice}`

            body.appendChild(playerOneChoiceText)
            body.appendChild(playerTwoChoiceText)
            
        })
    })
    
    return {renderBoard}

})();

// Player factory function

const Player = (choice, isTurn) => {
    return {choice, isTurn}
}

// Functions

displayController.renderBoard()