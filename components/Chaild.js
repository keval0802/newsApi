import React, { memo } from 'react'

function Chaild({ numbar, hndleIncrement }) {
    console.log("chaild componet");


    return (
        <div>
            <button onClick={() => hndleIncrement()}>+</button>
            <h1>{numbar}</h1>
        </div>
    )
}

export default memo(Chaild)
