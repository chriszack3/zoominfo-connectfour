import React, { useContext } from 'react';
import {
    connect_table
} from "./Table.module.scss";

const Table = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    const tdOnClick = (rowIndex, colIndex, tdIndex) => {
        const coords = [rowIndex, colIndex];
        setGameState({
            ...gameState,
            coords
        })
    }
    return (
        <table id="connect_app" className={connect_table}>
            <tbody>
                {
                    Array(6).fill(0).map((row, rowIndex) => {
                        return (
                            <tr id={rowIndex} key={rowIndex}>
                                {
                                    Array(7).fill(0).map((col, colIndex) => {
                                        const tdIndex = colIndex + (7 * rowIndex)
                                        return (
                                            <td  id={tdIndex} key={tdIndex}>
                                                <button onClick={() => tdOnClick(rowIndex, colIndex, tdIndex)}>{rowIndex}, {colIndex}</button>
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;