import React from 'react'
import { GetQuery } from './BaseQuery'

function OrderList() {


    const { isLoading, data, error, refetch } = GetQuery("orders", "orders");

    if(isLoading){
        return <h1>loading...</h1>
    }

    return (<>
        <ul>
            {
               data && data.map(item => <li>{item.shipName}</li>)
            }
        </ul>
    </>)
}

export default OrderList