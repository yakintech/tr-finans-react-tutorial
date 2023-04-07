import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByValue } from './counterSlice'

function ReduxCounter() {

    const [data, setdata] = useState(0)

    //global state değiştirmek için useDispatch kullanıyorum!!
    let dispatch = useDispatch()

    //use Selector hook ile global state e erişiyorum!!
    let value = useSelector(state => state.value)


    const arttir = () => {
        dispatch(increment());
    }


    const degelerArttir = () => {
        dispatch(incrementByValue(Number(data)))
    }

    return (<>
        <h1>{value}</h1>
        <button onClick={arttir}>Arttir</button>


        <hr></hr>
        <input type='text' onChange={(e) => setdata(e.target.value)} />
        <button onClick={degelerArttir}>Değerle Arttir</button>
    </>)
}

export default ReduxCounter