import React, { useContext } from 'react';
import {
    connect_table
} from "./Table.module.scss";

const Table = ({ context }) => {
    const { gameState, setGameState } = useContext(context);
    const { selected } = gameState;
    const tdOnClick = (coords) => {
        // const newBoard = [...gameState.board];
        // newBoard[coords[0]][coords[1]].color = gameState?.players?.[gameState.turn % 2]?.color;

        setGameState({
            ...gameState,
            selected: coords,
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
                                    row.map((col, colIndex) => {
                                        console.log(col)
                                        return (
                                            <td style={{backgroundColor: `${col?.color || 'black'}`, borderTop: 0, borderBottom: 0, borderRight: '4px solid', borderLeft: '4px solid', borderColor: `${selected[1] === col.coords[1] ? 'red' : 'black'}`}} id={col.id} className={`col${colIndex}`} key={col.id}>
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