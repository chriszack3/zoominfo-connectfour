import React, { useContext, useEffect, useState } from 'react';
import CreateUser from './CreateUser';
import Game from './Game';

const GameController = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    useEffect(() => {
        console.log(gameState)
    }, [gameState])
    return (
        <div>
            <h1>Game</h1>
            {
                gameState.players.length !== 2 && <CreateUser context={context} />
            }
            {
                gameState.players.length === 2 && <Game context={context} />
            }
        </div>
    )
}

export default GameController;