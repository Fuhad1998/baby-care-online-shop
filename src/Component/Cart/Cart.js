import { Button } from '@mui/material';
import React from 'react';
import { Link} from 'react-router-dom';

import "./Cart.css"


const Cart = ({carts}) => {
  
  
  
    // console.log(carts)
    const cartTotal = carts.reduce(
        (acc, product) => acc +   Number(product.price),
        0
      );
      // console.log(cartTotal)

   
    return (
        <div className='bg-light'>
            <h2 className='cart-text p-2 '>Order Summary</h2>
            <h4 className='cart-text p-2 '>Item: {carts.length}</h4>
            <h6 className='cart-text p-2 '>Sub-Total: <span className='tk-span'>Tk.{cartTotal}</span></h6>
            <h6 className='cart-text p-2 '>VAT: <span className='tk-span px-5'>Tk. 0.00</span></h6>
            <h6 className='cart-text p-2 '>Shipping: <span className='tk-span p-1'>Tk. 0.00</span></h6>
            <h4 className='cart-text p-2 cart-total'>Total: <span className='tk-span p-3'>Tk.{cartTotal}</span></h4>
            <Button  className='bg-dark text-white '><Link className='checkout-btn px-2' to="/purchase">Checkout</Link>  </Button>
           
            
        
        </div>
    );
};

export default Cart;