import React, { useEffect, useState } from 'react';

import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    
    const [manageAllOrders, setManageAllOrders] = useState([])

    useEffect(()=>{
       
        fetch("http://localhost:5000/orders")
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