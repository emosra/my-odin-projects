const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const haveWinner = false;
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
    

    const renderBoard = () => {
        for (let i = 0; i < gameBoard.board.length; i++) {
            cells[i].textContent = gameBoard.board[i];
        }
    }

    const checkWinner = (player) => {
        for (let i = 0; i < gameBoard.winningCombos.length; i++) {
            // keep track of how much numbers of array matched x
            let matches = 0;
            // loop over numbers of array within array (winningcombos)
            for (let j = 0; j < gameBoard.winningCombos[i].length; j++) {
        
                if (gameBoard.board[gameBoard.winningCombos[i][j]] === player.choice) {
                    matches += 1;
                }
                console.log(matches)
            }
            if (matches === 3) {
                gameBoard.haveWinner = true;
                console.log(`${player.name} : ${player.choice} is the winner`)
                break;
            }
        }
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', (e) => {

            if (e.target.textContent !== '' || gameBoard.haveWinner === true) return;

            if (playerOne.isTurn) {
                gameBoard.board[index] = playerOne.choice;
                e.target.textContent = playerOne.choice;
                playerOne.isTurn = false;
                playerTwo.isTurn = true;
                checkWinner(playerOne)
            } else {
                gameBoard.board[index] = playerTwo.choice;
                e.target.textContent = playerTwo.choice;
                playerTwo.isTurn = false;
                playerOne.isTurn = true;
                checkWinner(playerTwo)
            }
            
        })
    })
    
    return {renderBoard, checkWinner}

})();

// Player factory function

const Player = (name, choice, isTurn) => {
    return {name, choice, isTurn}
}

const playerOne = Player('one', 'X', true)
const playerTwo = Player('two', 'O', false)

// Functions

displayController.renderBoard()