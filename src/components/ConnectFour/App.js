import React, {createContext, useContext, useState} from "react";
import Table from "./lib/Table";
import Game from "./lib/Game";

const App = () => {
    const [gameState, setGameState] = useState({
        players: [
            {
                name: "Player 1",
                color: "red"
            },
            {
                name: "Player 2",
                color: "blue"
            }
        ],
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
        <GameContext.Provider value={{
            gameState,
            setGameState
        }}>
            <Game context={GameContext} />
            <Table context={GameContext} />
        </GameContext.Provider>
    );
}

export default App;