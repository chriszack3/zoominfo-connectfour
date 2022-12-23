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
                gameState.turn > 0 && gameState.turn < 42 && <Game context={context} />
            }
            {
                gameState.turn === 42 && <h2>Draw :/</h2>
            }
        </div>
    )
}

export default GameController;