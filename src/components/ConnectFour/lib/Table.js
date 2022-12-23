import React, { useContext } from 'react';
import {
    connect_table
} from "./Table.module.scss";

const Table = ({ context }) => {
    const { gameState, setGameState } = useContext(context);
    const { selected, win } = gameState;

    const tdOnClick = (coords) => {
        //set the selected tile to state to be handled from the Game.js component
        setGameState({
            ...gameState,
            selected: coords,
        })
    }

    return(
        <table id="connect_app" className={connect_table}>
            <tbody>
                {
                    gameState.board.map((row, rowIndex) => {
                        return (
                            <tr id={rowIndex} key={rowIndex}>
                                {
                                    row.map((col, colIndex) => {
                                        //render the table with the colors from the stateful representation of the board
                                        return (
                                            <td>
                                                <button style={{backgroundColor: `${col?.color || 'white'}`, borderTop: 0, borderBottom: 0, borderRight: '4px solid', borderLeft: '4px solid', borderColor: `${selected[1] === col.coords[1] ? 'black' : 'white'}`}} id={col.id} className={`col${colIndex}`} key={col.id} onClick={() => tdOnClick(col.coords)}></button>
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
    )
};


export default Table;