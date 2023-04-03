import React from 'react'

function Child2Comp(props) {

    const { product } = props


    return (<>
        <h3>Name: {product.name}</h3>
        <h3>Price: {product.price}</h3>
        <h3>Brand: {product.brand}</h3>

    </>)
}

export default Child2Comp