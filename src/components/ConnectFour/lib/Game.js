import React, { useContext } from "react";
import Table from "./Table";
import WinMessage from "./WinMessage";

const Game = ({ context }) => {
    //get the gameState and setGameState from the context
    const { gameState, setGameState } = useContext(context);
    const { players, turn, selected, win, scoreBoard } = gameState;
    
    const checkWin = (board, row, col, color) => {
        //function to get column
        const checkVertical = () => {
            //if impossible break and return false immediately
            if(row > 4) {
                return false
            }
            //if it is possible for a vertical win, iterate over column and check win --if we must :/
            else {
                return board?.[row + 3]?.[col]?.color === color && board?.[row + 1]?.[col]?.color === color && board?.[row + 2]?.[col]?.color === color  
            }
        }

        const checkHorizontal = () => {
            let count = 0
            let win = false
            board[row].forEach((tile) => {
                const tileColor = tile.color
                if(tileColor === color) {
                    win = count + 1 > 3
                    count++
                } else {
                    count = 0
                }
            })
            return win && color
        }

        const checkDiagonal = () => {
            let upRight = 0
            let upLeft = 0
            let downRight = 0
            let downLeft = 0
            let win = false
            for(let i = 1; i > 4; i++) {
                if(board?.[row + i]?.[col + i]?.color === color) {
                    win = upRight + 1 === 4
                    upRight++
                } else {
                    upRight = 0
                }

                if(board?.[row + i]?.[col - i]?.color === color) {
                    win = upLeft + 1 === 4
                    upLeft++
                } else {
                    upLeft = 0
                }

                if(board?.[row - i]?.[col + i]?.color === color) {
                    win = downRight + 1 === 4
                    downRight++
                } else {
                    downRight = 0
                }

                if(board?.[row - i]?.[col - i]?.color === color) {
                    win = downLeft + 1 === 4
                    downLeft++
                } else {
                    downLeft = 0
                }

                if(win) {
                    return win
                }
            }

        }

        return checkVertical() || checkHorizontal() || checkDiagonal() && color
    }

    const handleSelect = (e, col) => {
        e.preventDefault();
        const newBoard = [...gameState.board];
        const playerColor = turn % 2 === 0 ? players[0].color : players[1].color;

        let rowId = null;

        //iterate through the selected column and find the first empty space
        for (let i = newBoard.length - 1; i >= 0; i--) {
            if (newBoard[i][col].color === null) {
                rowId = i;
                newBoard[i][col].color = playerColor
                break;
            }
        }

        const win = checkWin(newBoard, rowId, col, newBoard[rowId][col].color)
       
        //save previous state, set the new board to state and increment the turn
        const player = turn % 2 === 0 ? players[0].name : players[1].name;
        setGameState({
            ...gameState,
            board: newBoard,
            turn: win ? turn : turn + 1,
            selected: [],
            win: win,
            scoreBoard: win ? [...gameState.scoreBoard, {player: player, turn: turn, time: gameState.date}] : [...gameState.scoreBoard]
            
        })
        
    }

    return (
        !win ? (
            <div>
            {
                turn % 2 === 0 ? <h1>{players[0].name}'s turn</h1> : <h1>{players[1].name}'s turn. <br/> Please Select a Column to Drop your Tile</h1>
            }
            {
                selected.length > 0 && (
                    <form onSubmit={(e) => handleSelect(e, selected[1])} >
                        <h1>Drop tile into column {selected[1] + 1}</h1>
                        <button type="submit">Confirm?</button>
                    </form>
                )
            }
            <Table context={context} />
        </div>
        ) : (
            <>
                <WinMessage scoreBoard={scoreBoard} win={win} players={players} turn={turn} />
                <button onClick={() => setGameState({
                    ...gameState,
                    turn: 0
                })}>New Game</button>
            </>
        )
    )
}

export default Game;