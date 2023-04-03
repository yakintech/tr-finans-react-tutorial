import React from 'react'

function PropFunctionSample(props) {



  return (<>
    <button onClick={() => props.hello()}>Hello Props Function!</button>
    <button onClick={() => props.calc(10)}>Calc</button>
  </>
  )
}

export default PropFunctionSample

//props - function, object, array, number, string...