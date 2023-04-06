import React from 'react'
import { PostDataQuery } from './BaseQuery'

function AddOrder() {


    const add = () => {
        let result = PostDataQuery("orders");

        console.log('Result ', result);
    }
    return (<>
        <button onClick={add}>Add Order</button>
    </>
    )
}

export default AddOrder