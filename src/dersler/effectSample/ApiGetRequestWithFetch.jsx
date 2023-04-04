import React, { useEffect, useState } from 'react'

function ApiGetRequestWithFetch() {

    const [suppliers, setsuppliers] = useState([]);


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then(res => res.json())
            .then(data => {
                setsuppliers(data);
            })

    }, [])


    return (<>
        <ul>
            {
                suppliers && suppliers.map(item => <li>{item.companyName}</li>)
            }
        </ul>
    </>)
}

export default ApiGetRequestWithFetch