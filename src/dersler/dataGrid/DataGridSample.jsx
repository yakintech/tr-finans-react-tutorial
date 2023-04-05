import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


function DataGridSample() {

  const [products, setproducts] = useState([]);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 190
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 190
    },
    {
      field: 'unitPrice',
      headerName: 'Unit Price',
      width: 190
    },
    {
      field: 'unitsInStock',
      header: 'Stock',
      width: 190
    }
  ]

  useEffect(() => {

    axios.get(`https://northwind.vercel.app/api/products`)
      .then(res => {
        setproducts(res.data);
      })

  }, [])


  return (<>
    <div style={{ width: '100%', height: 400 }}>
      <DataGrid
        rows={products}
        columns={columns}
      />
    </div>

  </>)
}

export default DataGridSample