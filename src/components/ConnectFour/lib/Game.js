import React, { useContext } from "react";
import Table from "./Table";

const Game = ({ context }) => {
    const { gameState, setGameState } = useContext(context);
    const { players, turn, selected } = gameState;
    
    return (
        <div>
            {
                turn % 2 === 0 ? <h1>{players[0].name}'s Turn</h1> : <h1>{players[1].name}'s Turn. <br/> Please Select a Column to Drop your Tile</h1>
            }
            {
                selected.length > 0 && <h1>Selected: {selected[0]}, {selected[1]}</h1>
            }
            <Table context={context} />
        </div>
    )
}

export default Game;