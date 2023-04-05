import { Button, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



function SuppliersDataGrid() {

    const [suppliers, setsuppliers] = useState([]);
    const [loading, setloading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        loadSuppliers();
    }, [])


    const loadSuppliers = () => {
        axios.get(`https://northwind.vercel.app/api/suppliers`)
            .then(res => {
                setsuppliers(res.data);
                setloading(false);
            })
    }

    const deleteSupplier = (item) => {

        setloading(true);
        axios.delete(`https://northwind.vercel.app/api/suppliers/${item.id}`)
            .then(res => {
                loadSuppliers();
            })

    }


    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'companyName',
            headerName: 'Company Name',
            width: 200
        },
        {
            field: 'contactName',
            headerName: 'Contact Name',
            width: 200
        },
        {
            field: 'contactTitle',
            headerName: 'Title',
            width: 200
        },
        {
            field: 'Delete',
            headerName: 'Delete',
            width: 200,
            renderCell: (item) => {
                return <Button variant="outlined" color='error' onClick={() => deleteSupplier(item)}>Delete</Button>
            }
        },
        {
            field: 'Detail',
            headerName: 'Go To Detail',
            width: 200,
            renderCell: (item) => {
                return <Button variant="outlined" color='info' onClick={() => navigate('/suppliers/' + item.id)}>Detail</Button>
            }
        }
    ]

    return (<>
        {
            loading ? <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <CircularProgress />
            </div> : <div style={{ width: '100%', height: 400 }}>

            <DataGrid
                rows={suppliers}
                columns={columns}
                paginationMode='server'
            />
        </div>
    }



    </>)
}

export default SuppliersDataGrid