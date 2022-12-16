import React, { useContext } from "react";

const CreateUser = ({ context }) => {
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
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Player 1 Name" />
                <input type="text" placeholder="Player 2 Name" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreateUser;