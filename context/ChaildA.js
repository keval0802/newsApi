import React from 'react'
import ChaildB from './ChaildB'

function ChaildA({ name }) {
    return (
        <div>
            ChaildA
            <ChaildB name={name} />
        </div>
    )
}

export default ChaildA
