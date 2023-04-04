import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CustomerDetail() {

    let { id } = useParams();

    const [detail, setdetail] = useState({});
    const [loading, setloading] = useState(true)


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {
                setdetail(res.data);
                setloading(false)
            })

    }, [])

    let navigate = useNavigate();
    const goToBack = () => {
        navigate(-1);
    }

    return (<>
    <button onClick={goToBack}>Go to back!</button>
    {
        loading ? <h1>loading...</h1> : <>
        <h1>Customer Id: {id}</h1>
        <h1>Street: {detail.address?.street}</h1>
        <h1>City: {detail.address?.city}</h1>
        <h1>Country: {detail.address?.country}</h1>
        </>
    }
        
    </>
    )
}

export default CustomerDetail