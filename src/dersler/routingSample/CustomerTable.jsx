import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function CustomerTable() {

    const [customers, setcustomers] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data);
            })

    }, []);

    let navigate = useNavigate();

    const goToDetail = (id) => {
        navigate('/customers/' + id);
    }


    return (<>
        <table className="w3-table w3-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Title</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map(item => <>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            {/* <td><Link to={'/customers/' + item.id}>Detail</Link></td> */}
                            <td><button onClick={() => goToDetail(item.id)} className='w3-button w3-blue'>Detail</button></td>
                        </tr>
                    </>)
                }
            </tbody>
        </table>
    </>
    )
}

export default CustomerTable