import React, { useContext } from 'react';

const Game = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    return (
        <div>
            <h1>Game</h1>
            <p>Player: {gameState.player}</p>
            <p>Selected: {gameState.selected[0]}, {gameState.selected[1]}</p>
        </div>
    )
}

export default Game;