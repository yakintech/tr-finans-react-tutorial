import React from 'react'

function StateIntro() {

    let sayac = 0;

    const increase = () => {
        sayac = sayac + 1;
        document.getElementById('sayac').innerHTML = sayac;
    }

    return (<>
        <h1 id='sayac'>0</h1>
        <button onClick={increase}>Arttir</button>
    </>)
}

export default StateIntro