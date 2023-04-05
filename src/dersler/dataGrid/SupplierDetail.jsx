import React from 'react'
import { useParams } from 'react-router-dom'

function SupplierDetail() {

    let { id } = useParams();

    return (<>
        <h1>{id}</h1>
    </>
    )
}

export default SupplierDetail