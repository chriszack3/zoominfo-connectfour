import React, { useEffect, useState } from 'react';

const WinMessage = ({ win, players, turn, scoreBoard }) => {
    //interpolate the message based on the winner
    const message = win === 'red' ? `${players[0].name} wins` : `${players[1].name} wins`

    useEffect(() => {
        //set the scoreBoard in localStorage
        localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard))
    }, [])

    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <h1>{message} in {turn} turns</h1>
            <button onClick={handleClick}>Show Scoreboard</button>
            {
                toggle && (
                
            
                scoreBoard?.length > 0 && (
                    <ul>
                        {
                            scoreBoard.map((player, i) => {
                                const gameTime = new Date() - player.time
                                return <li key={i}>Name: {player.player} - Turns: {player.turn} Time: {gameTime / 1000} seconds</li>
                            }
                            )
                        }
                    </ul>
                )
            
                )
            }
        </>
    )
}

export default WinMessage;