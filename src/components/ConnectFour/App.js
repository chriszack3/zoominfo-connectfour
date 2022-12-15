import React, { createContext, useContext, useState } from "react";
import Table from "./lib/Table";
import Game from "./lib/Game";
import { game_container } from "./App.module.scss";

const App = () => {
    const [gameState, setGameState] = useState({
        players: [],
        turn: 0,
        selected: [],
        board: Array(6).fill(0).map((row, rowIndex) => {
            return Array(7).fill(0).map((col, colIndex) => {
                return {
                    color: null,
                    coords: [rowIndex, colIndex],
                    id: colIndex + (7 * rowIndex)
                }
            })
        }),
    })

    const GameContext = createContext(null);

    return (
        <div id={game_container}>
            <GameContext.Provider value={{
                gameState,
                setGameState
            }}>
                <Game context={GameContext} />
                <Table context={GameContext} />
            </GameContext.Provider>
        </div>
    );
}

export default App;