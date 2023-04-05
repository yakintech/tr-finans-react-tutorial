import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { cartContext } from './CartContext'

function CartPage() {

  const { cart, setCart } = useContext(cartContext);


  let totalPrice = 0;

  cart.forEach(element => {
    totalPrice = (element.unitPrice * element.quantity) + totalPrice
  });

  const removeToCart = (id) => {
    let filteredCart = cart.filter(q => q.id != id);

    setCart([...filteredCart])
  }

  return (<>
  {
    cart.length > 0 ? <Button onClick={() => setCart([])} variant='outlined' color='error'>Empty</Button> : <></>
  }
    
    {
      cart.length > 0 ? <h1>{totalPrice.toFixed(2)}</h1> : <></>
    }
    <ul>
      {
        cart && cart.map(item => <li>
          <span style={{ marginRight: 10 }}>{item.name} </span>
          {item.quantity} * {item.unitPrice.toFixed(2)} =
          {(item.quantity * item.unitPrice).toFixed(2)}

          <Button onClick={() => removeToCart(item.id)} style={{ marginLeft: 10 }} variant='outlined' color='error'>Remove to Cart</Button>
        </li>)
      }
    </ul>
  </>
  )
}

export default CartPage