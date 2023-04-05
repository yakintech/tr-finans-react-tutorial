import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { favoritesContext } from './FavoritesContext';

function ProductsList() {

    const [products, setproducts] = useState([]);

    //use context ile context e erişip oradaki GLOBAL STATELERİ KULLANIYORUM!!
    const { favorites, setfavorites } = useContext(favoritesContext);

    useEffect(() => {

        axios.get(`https://northwind.vercel.app/api/products`)
            .then(res => {
                setproducts(res.data);
            })

    }, [])


    const favOperation = (item) => {

        let favoriteControl = favorites.find(q => q.id == item.id);

        if (!favoriteControl) {
            setfavorites([...favorites, item])
        }
        else {
            let filteredFavorites = favorites.filter(q => q.id != item.id);
            setfavorites([...filteredFavorites])
        }
    }
    return (<>
        <ul>
            {
                products && products.map(item => {

                    let favoriteControl = favorites.find(q => q.id == item.id);

                    let favString = favoriteControl ? "Remove to Fav" : "Add to Fav"

                    return <>
                        <li>
                            <span style={{ marginRight: 20 }}>{item.name}</span>
                            <Button variant='outlined' onClick={() => favOperation(item)}>{favString}</Button>

                        </li>
                        <hr />
                    </>
                }

                )
            }
        </ul>
    </>)
}

export default ProductsList