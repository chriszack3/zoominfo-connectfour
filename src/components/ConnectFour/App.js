import React, { createContext, useState, useEffect } from "react";
import GameController from "./lib/GameController";
import { game_container } from "./App.module.scss";

const App = () => {
    const [gameState, setGameState] = useState({
        players: [],
        turn: 0,
        selected: [],
        win: false,
        //create a 6x7 board, this is from where the Table.js component will render the table
        board: Array(6).fill(0).map((row, rowIndex) => {
            return Array(7).fill(0).map((col, colIndex) => {
                return {
                    color: null,
                    coords: [rowIndex, colIndex],
                    id: colIndex + (7 * rowIndex)
                }
            })
        }),
        scoreBoard: []
    })

    const GameContext = createContext(null);

    useEffect(() => {
        //set the players from local storage
        const players = JSON.parse(localStorage.getItem("players"));
        if(players) {
            setGameState(prevState => {
                return {
                    ...prevState,
                    players
                }
            }
        )}
        //set the scoreBoard from local storage
        const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"));
        if(scoreBoard) {
            setGameState(prevState => {
                return {
                    ...prevState,
                    scoreBoard
                }
            }
        )}
    }, [])
    return (
        <div id={game_container}>
            <GameContext.Provider value={{
                gameState,
                setGameState
            }}>
                <GameController context={GameContext} />
            </GameContext.Provider>
        </div>
    );
}

export default App;