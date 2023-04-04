import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ApiGetRequestWithAxios() {

    //js tarafında api çağrıları fetch VEYA axios ile yapılır
    const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsuppliers(res.data)
            })
            .catch(err => {
                alert('Data çekme sırasında bir hata meydana geldi!')
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

export default ApiGetRequestWithAxios