import React, { useContext } from 'react';
import {
    connect_table
} from "./Table.module.scss";

const Table = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    const tdOnClick = (coords) => {
        setGameState({
            ...gameState,
            selected: coords
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
                                            <td className="table_cell" id={col.id} key={col.id}>
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