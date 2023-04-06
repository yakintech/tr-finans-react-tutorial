import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseNetwork } from '../network/baseNetwork';

function CategoryDetail() {

    let { id } = useParams();
    const [detail, setdetail] = useState({});

    useEffect(() => {

        baseNetwork.getById("categories", id)
            .then(res => {
                setdetail(res);
            })

    }, [])


    return (<>
        <h1>{detail.id}</h1>
        <h1>{detail.name}</h1>
        <h1>{detail.description}</h1>
    </>)
}

export default CategoryDetail