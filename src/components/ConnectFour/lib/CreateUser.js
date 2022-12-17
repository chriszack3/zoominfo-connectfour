import React, { useContext } from "react";

const CreateUser = ({ context }) => {
    const { gameState, setGameState } = useContext(context);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { p1nick, p1age, p2nick, p2age } = e.target;
        setGameState({
            ...gameState,
            players: [
                {
                    name: p1nick.value,
                    age: p1age.value,
                    color: 'red'
                },
                {
                    name: p2nick.value,
                    age: p2age.value,
                    color: 'blue'
                }
            ],
        })
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <legend>Player 1</legend>
                    <input name="p1nick" type="text" placeholder="Nickname" />
                    <input name="p1age" type="number" placeholder="Age" />
                </fieldset>
                <fieldset>
                    <legend>Player 2</legend>
                    <input name="p2nick" type="text" placeholder="Nickname" />
                    <input name="p2age" type="number" placeholder="Age" />
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreateUser;