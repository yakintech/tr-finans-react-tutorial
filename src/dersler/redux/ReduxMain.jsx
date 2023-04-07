import React from 'react'
import { useSelector } from 'react-redux'

function ReduxMain() {

    //use Selector hook ile global state e erişiyorum!!
    let value = useSelector(state => state.value)


    return (<>
        <h1>Value: {value}</h1>
    </>
    )
}

export default ReduxMain