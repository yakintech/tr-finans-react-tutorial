import React, { useState } from 'react'

function VirtualDomSample() {

    console.log('Component rendered! ');

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(10)
    }

    return (<>

        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
    </>)
}

export default VirtualDomSample