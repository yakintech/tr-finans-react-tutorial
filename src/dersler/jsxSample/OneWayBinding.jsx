import React from 'react'

function OneWayBinding() {

    //let,var ve const
    let name = "Çağatay"
    let age = 18;
    let onlineStatus = true;

    let product = {
        name: 'IPhone',
        price: 4000,
        unitsInStock: 20
    }

    return (<>
        <h1>Name: {name.toUpperCase()}</h1>
        <h1>Age: {age}</h1>
        <h3>{onlineStatus.toString()}</h3>

        <hr></hr>

        <h1>{product.name}</h1>
        <h1>{product.unitsInStock}</h1>
        <h1>{product.price.toFixed(2)}</h1>


    </>)
}

export default OneWayBinding

// Notlar:
//JSX içerisinde Javascript kodu yazmak için {} kullanılır.
