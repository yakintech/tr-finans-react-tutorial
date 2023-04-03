import React from 'react'

function Child3Comp({ webUser }) {

    return (<>
        <h3>{webUser.name}</h3>
        <h3>{webUser.surname}</h3>
        <ul>
            {
                webUser.countries && webUser.countries.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default Child3Comp