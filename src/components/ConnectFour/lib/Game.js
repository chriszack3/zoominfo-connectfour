import React, { useContext } from 'react';

const Game = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    return (
        <div>
            <h1>Game</h1>
            <p>Player: {gameState.player}</p>
            <p>Selected: {gameState?.coords?.[0] || 0}, {gameState?.coords?.[1] || 0}</p>
        </div>
    )
}

export default Game;