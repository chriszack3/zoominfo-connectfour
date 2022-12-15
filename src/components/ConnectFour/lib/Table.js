import React, { useContext } from 'react';
import {
    connect_table
} from "./Table.module.scss";

const Table = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    const tdOnClick = (coords) => {
        const newBoard = [...gameState.board];
        newBoard[coords[0]][coords[1]].color = gameState?.players?.[gameState.turn % 2]?.color;

        setGameState({
            ...gameState,
            turn: gameState.turn + 1,
            selected: coords,
            board: newBoard
        })
        console.log(gameState)
    }
    return (
        <table id="connect_app" className={connect_table}>
            <tbody>
                {
                    gameState.board.map((row, rowIndex) => {
                        return (
                            <tr id={rowIndex} key={rowIndex}>
                                {
                                    row.map((col) => {
                                        console.log(col)
                                        return (
                                            <td style={{backgroundColor: `${col?.color || 'black'}`}} className="table_cell" id={col.id} key={col.id}>
                                                <button onClick={() => tdOnClick(col.coords)}>{col.coords[0]}, {col.coords[1]}</button>
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    }
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;