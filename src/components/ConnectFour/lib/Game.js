import React, { useContext, useEffect } from 'react';

const Game = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    useEffect(() => {
        console.log(gameState)
    }, [gameState.turn])
    return (
        <div>
            <h1>Game</h1>
            <p>Player: {gameState.player}</p>
            <p>Turn: {gameState.turn}</p>
            <p>Selected: {gameState.selected[0]}, {gameState.selected[1]}</p>
        </div>
    )
}

export default Game;