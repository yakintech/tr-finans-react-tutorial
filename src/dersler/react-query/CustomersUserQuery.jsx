import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


function CustomersUserQuery() {

    const second = 1000;
    const minute = 60 * second;
    const twoMinutes = 2 * minute;



    const { isLoading, data, error, refetch } = useQuery({
        queryKey: ['customers'],
        queryFn: () => {
            return fetch("https://northwind.vercel.app/api/customers").then((res) =>
                res.json()
            )
        },
        staleTime: twoMinutes,
        
    })


    if (isLoading) {
        return <span>Loading...</span>
    }


    return (<>
        <button onClick={() => refetch()}>Refect Data</button>
        <ul>
            {

                data && data.map(item => {
                    return <li>{item.companyName}</li>
                })
            }
        </ul>
    </>)
}

export default CustomersUserQuery