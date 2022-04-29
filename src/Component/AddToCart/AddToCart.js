import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';

const AddToCart = () => {
    const {carts} = UseAuth();
    // console.log(carts)
    return (
       <div className='container'>
            <div className='row p-2 my-5'>
            <div className='col-xs-12 col-sm-12 col-md-8 '>
            <h1>Cart Details</h1>
                <CartProduct
                carts={carts}
                ></CartProduct>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4'>
            <Cart carts={carts}></Cart>
            </div>
            
            
            

        </div>
       </div>
    );
};

export default AddToCart;

