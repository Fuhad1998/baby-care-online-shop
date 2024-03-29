import React, { useEffect, useState } from 'react';

import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    
    const [manageAllOrders, setManageAllOrders] = useState([])

    useEffect(()=>{
       
        fetch("https://secure-falls-76091.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setManageAllOrders(data))
    }, [])
    return (
        <div className='p-5'>
            <h1>All Orders</h1>
            <ManageAllOrder
            manageAllOrders={manageAllOrders}
            ></ManageAllOrder>
        </div>
    );
};

export default ManageAllOrders;