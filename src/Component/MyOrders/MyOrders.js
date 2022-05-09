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

    const handelDeleteOrders = id =>{
        const proceed = window.confirm('Are You Sure You Want TO Delete')
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data, "clicked")
              if(data.deletedCount > 0){
                alert('deleted successful')
                const remainingUser = myOrders?.filter(order => order._id!==id)
                setMyOrders(remainingUser)
              }
            })
        }
    
      
        
      }
    return (
        <div className='p-5'>
            <h1>Your Orders</h1>
            <MyOrder
            myOrders={myOrders}
            handelDeleteOrders={handelDeleteOrders}
            ></MyOrder>
        </div>
    );
};

export default MyOrders;