import React from 'react'
import ChaildC from './ChaildC'

function ChaildB({ name }) {
    return (
        <div>
            ChaildB
            <ChaildC name={name} />
        </div>
    )
}

export default ChaildB
