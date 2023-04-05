import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from './CartContext';
import { favoritesContext } from './FavoritesContext';

function ProductsList() {

    const [products, setproducts] = useState([]);

    //use context ile context e erişip oradaki GLOBAL STATELERİ KULLANIYORUM!!
    const { favorites, setfavorites } = useContext(favoritesContext);
    const { cart, setCart } = useContext(cartContext);

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


    const cartOperation = (item) => {

        //Öncelikle sepettte ürün var mı ona bakıyorum...

        let cartControl = cart.find(q => q.id == item.id);

        if (cartControl) {
            cartControl.quantity = cartControl.quantity + 1;
            setCart([...cart]);
        }
        else {
            let newCartItem = {
                id: item.id,
                quantity: 1,
                name:item.name,
                unitPrice: item.unitPrice
            }

            setCart([...cart, newCartItem])
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
                            <Button style={{ marginRight: 20 }} variant='outlined' onClick={() => favOperation(item)}>{favString}</Button>
                            <Button variant='outlined' onClick={() => cartOperation(item)}>Add To Cart</Button>

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


// let cartSample = [
//     {
//         productId:1,
//         name:'IPhone',
//         quantity:2,
//         unitPrice:20
//     },
//     {
//         productId:4,
//         name:'Ayakkabı',
//         quantity:5,
//         unitPrice:50
//     }
// ]