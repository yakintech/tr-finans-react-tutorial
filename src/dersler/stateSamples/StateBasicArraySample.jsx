import React, { useState } from 'react'

function StateBasicArraySample() {

    const [cities, setCities] = useState(['İstanbul', 'İzmir', 'Ankara', 'Trabzon', 'Diyarbakır', 'Edirne'])


    const clearAll = () => {
        setCities([]);
    }

    return (<>
        <h1>Length: {cities.length}</h1>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
        <button onClick={clearAll}>Clear All</button>

    </>
    )
}

export default StateBasicArraySample