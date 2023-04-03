import React from 'react'

function JsxEvents() {

    // function hello() {
    //     alert('Hello JSX EVENT!')
    // }

    const merhaba = () => {
        alert('Hello Türkiye Finans!')
    }

    const getCity = (value) => {
        console.log("Value ", value)
    }

    const getName = (value) => {
        console.log('Value ', value);
    }
    return (<>
        {/* <button onClick={hello}>Click!</button> */}
        <button onClick={merhaba}>Click!</button>
        <button onClick={() => merhaba()}>Click - 2!</button>

        <hr></hr>

        <select onChange={(e) => getCity(e.target.value)}>
            <option value={1}>Türkiye</option>
            <option value={2}>Almanya</option>
            <option value={3}>Fransa</option>
        </select>

        <hr />
        <label>Name: </label>
        <input type='text' onChange={(e) => getName(e.target.value)} />

        <hr />

    </>)
}

export default JsxEvents