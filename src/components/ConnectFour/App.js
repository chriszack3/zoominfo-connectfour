import React, {createContext, useContext, useState} from "react";
import Table from "./lib/Table";
import Game from "./lib/Game";

const App = () => {
    const [gameState, setGameState] = useState({
        player: 1,
        name: 'Chris'
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