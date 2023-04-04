import React, { useState } from 'react'
import { productsData } from '../data/productsData'


function TableSample() {

  const [products, setproducts] = useState(productsData);
  const [search, setSearch] = useState('');

  //Add Product Inputs States
  const [name, setname] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [unitsInStock, setUnitsInStock] = useState(0);

  let totalPrice = 0;
  products.forEach(item => {
    totalPrice = totalPrice + item.unitPrice;
  });

  let avgPrice = totalPrice / products.length;


  const removeProduct = (id) => {

    let filteredProducts = products.filter(q => q.id != id);
    setproducts([...filteredProducts])
  }


  const searchProductsByName = (data) => {
    setSearch(data);
    let filteredProducts = productsData.filter(q => q.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()));

    setproducts([...filteredProducts])

  }

  const add = () => {

    let productControl = products.find(q => q.name == name);

    if (productControl) {
      alert('Bu isimde bir ürün mevcut. Lütfen başka ürün ekleyiniz.')
    }
    else {
      let lastId = products[products.length - 1].id
      let newProduct = {
        id: lastId + 1,
        name: name,
        unitPrice: Number(unitPrice),
        unitsInStock: unitsInStock
      }

      setproducts([...products, newProduct]);

      setname('');
      setUnitPrice(0);
      setUnitsInStock(0);
    }

  }

  //unitsInStock değeri 0 olan ürünler kırmızı renkte olsun
  return (<>
    <h1>Length: {products.length}</h1>
    <h1>Avg Unit Price {avgPrice.toFixed(2)}</h1>
    <div>
      <label>Search by name: </label>
      <input type='text' value={search} onChange={(e) => searchProductsByName(e.target.value)} />
    </div>
    <hr></hr>

    <div>
      <h1>Add New Product</h1>
      <div>
        <label>Name: </label>
        <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
      </div>

      <div>
        <label>Unit Price: </label>
        <input type='text' value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
      </div>

      <div>
        <label>Units In Stock: </label>
        <input type='text' value={unitsInStock} onChange={(e) => setUnitsInStock(e.target.value)} />
      </div>

      <div>
        <button onClick={() => add()}>Add</button>
      </div>
    </div>
    <hr></hr>

    <h1>Product List</h1>
    <table class="w3-table w3-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map(item => {

            let color = '';

            if (item.unitsInStock == 0)
              color = 'tomato'

            return <tr style={{ backgroundColor: color }}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice?.toFixed(2)}</td>
              <td>{item.unitsInStock}</td>
              <td><button className='w3-button w3-red' onClick={() => removeProduct(item.id)}>Delete</button></td>
            </tr>
          })
        }
      </tbody>
      <tbody>

      </tbody>

    </table>
  </>)
}

export default TableSample