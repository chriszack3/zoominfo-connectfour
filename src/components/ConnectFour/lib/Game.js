import React, { useContext, useEffect, useState } from 'react';

const Game = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    const handleSubmit = (e) => {
        e.preventDefault();
        setGameState({
            ...gameState,
            players: [
                {
                    name: e.target[0].value,
                    color: 'red'
                },
                {
                    name: e.target[1].value,
                    color: 'blue'
                }
            ],
        })
    }

    useEffect(() => {
        console.log(gameState)
    }, [gameState.turn])
    return (
        <div>
            <h1>Game</h1>
            {
                gameState.players.length !== 2 && (
                    <>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type="text" placeholder="Player 1 Name" />
                            <input type="text" placeholder="Player 2 Name" />
                            <button type="submit">Submit</button>
                        </form>
                    </>
                )
            }
            {
                gameState.players.length === 2 && (
                    <>
                        <p>Player: {gameState.player}</p>
                        <p>Turn: {gameState.turn}</p>
                        <p>Selected: {gameState.selected[0]}, {gameState.selected[1]}</p>
                    </>
                )
            }
        </div>
    )
}

export default Game;