import React, { useEffect } from 'react';

const WinMessage = ({ win, players, turn, scoreBoard }) => {
    //interpolate the message based on the winner
    const message = win === 'red' ? `${players[0].name} wins` : `${players[1].name} wins`

    useEffect(() => {
        //set the scoreBoard in localStorage
        localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard))
    }, [])

    return (
        <>
            <h1>{message} in {turn} turns</h1>
            <h2>Scoreboard</h2>
            {
                scoreBoard?.length > 0 && (
                    <ul>
                        {
                            scoreBoard.map((player, i) => {
                                return <li key={i}>Name: {player.player} - Turns: {player.turn}</li>
                            }
                            )
                        }
                    </ul>
                )
            }
        </>
    )
}

export default WinMessage;