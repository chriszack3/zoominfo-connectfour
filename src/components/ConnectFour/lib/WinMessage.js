import React from 'react';

const WinMessage = ({win, players, turn}) => {
    const message = win === 'red' ? `${players[0].name} wins` : `${players[1].name} wins`
    return (
        <h1>{message} in {turn} turns</h1>
    )
}

export default WinMessage;