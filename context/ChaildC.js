import React, { useContext } from 'react'
import { data } from '../App';

function ChaildC({ name }) {
  const appData = useContext(data)
  console.log(appData, "ChaildC");

  return (
    <div>
      <p>{appData}</p>
    </div>
  )
}

export default ChaildC
