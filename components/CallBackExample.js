import React, { useCallback, useState } from 'react'
import Chaild from './Chaild'

function CallBackExample() {
    const [numbar, setnumbar] = useState(0)
    const [text, settext] = useState("user")
    const hndleIncrement = () => {
        setnumbar(numbar + 1)
    }

    const hanldeText = () => {
        settext("ABC")
    }
    const handleChaild = useCallback(() => {
        hndleIncrement()
    }, [numbar])
    console.log("perent componet");


    return (
        <div>
            <Chaild numbar={numbar} hndleIncrement={handleChaild} />
            <button onClick={() => hanldeText()}>Clike Me</button>
            <h1>{text}</h1>
        </div>
    )
}

export default CallBackExample
