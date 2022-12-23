import React, { useContext } from 'react';
import CreateUser from './CreateUser';
import Game from './Game';

const GameController = ({ context }) => {
    const { gameState, setGameState } = useContext(context);
    
    return (
        <div>
            <h1>Game</h1>
            {
                gameState.turn < 1 && <CreateUser context={context} />
            }
            {
                gameState.turn > 0 && <Game context={context} />
            }
        </div>
    )
}

export default GameController;