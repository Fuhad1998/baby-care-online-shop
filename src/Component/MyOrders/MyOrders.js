import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const {user} = UseAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(()=>{
        const url =`https://secure-falls-76091.herokuapp.com/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [])
    return (
        <div className='p-5'>
            <h1>Your Orders</h1>
            <MyOrder
            myOrders={myOrders}
            ></MyOrder>
        </div>
    );
};

export default MyOrders;