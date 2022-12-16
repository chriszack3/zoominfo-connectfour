import React, { useContext } from "react";
import Table from "./Table";

const Game = ({ context }) => {
    const { gameState, setGameState } = useContext(context);
    const { players, turn, selected } = gameState;
    
    const handleSelect = (e) => {
        e.preventDefault();
        const newBoard = [...gameState.board];
        for (let i = newBoard.length - 1; i >= 0; i--) {
            if (newBoard[i][selected[1]].color === null) {
                newBoard[i][selected[1]].color = turn % 2 === 0 ? players[0].color : players[1].color;
                break;
            }
        }
        setGameState({
            ...gameState,
            board: newBoard,
            turn: turn + 1,
            selected: []
        })
    }

    return (
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
    )
}

export default Game;