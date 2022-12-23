import React, { useContext } from "react";
import Table from "./Table";
import WinMessage from "./WinMessage";

const Game = ({ context }) => {
    //get the gameState and setGameState from the context
    const { gameState, setGameState } = useContext(context);
    const { players, turn, selected, win } = gameState;
    
    const checkWin = (board, row, col, color) => {
        //check for vertical win
        let count = 0;
        if(board?.[row + 1]?.[col]?.color === color) {
            for(let i = 0; i < board.length - 1; i++){
                if(board?.[row + i]?.[col]?.color === color) {
                    count++;
                    if(count === 4) {
                        return color;
                    }
                } else {
                    count = 0;
                }
            }
        }

        //check for horizontal win
        else if(board?.[row]?.[col - 1]?.color === color || board?.[row]?.[col + 1]?.color === color) {
            for(let i = 0; i < board[row].length - 1; i++){
                if(board?.[row]?.[i]?.color === color) {
                    count++;
                    if(count === 4) {
                        return color;
                    }
                } else {
                    count = 0;
                }
            }
        }

        //check for diagonal win
        else if(board?.[row + 1]?.[col + 1]?.color === color) {
            for(let i = 0; i < board.length - 1; i++){
                if(board?.[row + i]?.[col + i]?.color === color) {
                    count++;
                    if(count === 4) {
                        return color;
                    }
                } else {
                    count = 0;
                }
            }
        }

        return false
    }

    const handleSelect = (e, col) => {
        e.preventDefault();
        const newBoard = [...gameState.board];

        let rowId = null;

        //iterate through the selected column and find the first empty space
        for (let i = newBoard.length - 1; i >= 0; i--) {
            if (newBoard[i][col].color === null) {
                newBoard[i][col].color = turn % 2 === 0 ? players[0].color : players[1].color;
                rowId = i;
                break;
            }
        }

        const win = checkWin(newBoard, rowId, col, newBoard[rowId][col].color)
       
        //save previous state, set the new board to state and increment the turn
        setGameState({
            ...gameState,
            board: newBoard,
            turn: win ? turn : turn + 1,
            selected: [],
            win: win
        })
    }

    return (
        !win ? (
            <div>
            {
                turn % 2 === 0 ? <h1>{players[0].name}'s Turn</h1> : <h1>{players[1].name}'s Turn. <br/> Please Select a Column to Drop your Tile</h1>
            }
            {
                selected.length > 0 && (
                    <form onSubmit={(e) => handleSelect(e, selected[1])} >
                        <h1>Drop Tile into Column {selected[1] + 1}</h1>
                        <button type="submit">Confirm?</button>
                    </form>
                )
            }
            <Table context={context} />
        </div>
        ) : (
            <WinMessage win={win} players={players} turn={turn} />
        )
    )
}

export default Game;