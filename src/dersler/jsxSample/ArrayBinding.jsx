import React from 'react'

function ArrayBinding() {

    let cities = ["İzmir", "İstanbul", "Ankara", "Trabzon", "Diyarbakır", "Edirne"]

    //jsx içerindeki element döngülerinde MAP KULLANILIR!
    return (<>
        <ul>
            {
                // cities.map(function (item) {
                //     return <li>{item}</li>
                // })

                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default ArrayBinding