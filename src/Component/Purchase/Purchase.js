import React from "react";
import { useForm } from "react-hook-form";

import UseAuth from "../../Hooks/UseAuth";

const Purchase = () => {
    const {carts} = UseAuth();
    
    
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    
    data.totalPrice = cartTotal;
    data.product = carts;
    fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            
            alert("Successful Add Yours Orders");
          }
        });
        console.log(data)
  };

  



  const cartTotal = carts.reduce(
    (acc, product) => acc +   Number(product.price),
    0
  );



  

//   console.log(cartTotal)
  return (
    <div className="row p-5">
      <div className="col-xs-12 col-md-8 col-sm-12">
          <h1>Order Details</h1>
        <form className="product-from" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-btn p-2"
            {...register("name")}
            placeholder="Write your name"
            type="text"
          />
          <br />
          <input
            className="input-btn p-2"
            {...register("email")}
            placeholder="Write your email"
            type="email"
          />
          <br />
          <input
            className="input-btn p-2"
            {...register("phone")}
            placeholder="phone number"
            type="number"
          />
          <br />
          <select
            className="input-btn p-2"
            {...register("district", { required: true })}
            placeholder=""
          >
            <option value="Inside Dhaka">Inside Dhaka</option>
            <option value="Outside Dhaka">Outside Dhaka</option>
            
          </select>
          <br />

          <input
            className="input-btn p-2"
            {...register("address")}
            placeholder="street address "
            type="text"
          />
          <br />
          <input
            className="input-btn p-2"
            {...register("order nodes")}
            placeholder="order nodes "
            type="text"
          />

          <br />
          <input
            className="btn-submit mb-4 input-btn p-2  bg-danger border border-secondary text-white fs-5"
            type="submit"
            value="Please Order"
          />
        </form>
      </div>
      <div className="col-xs-12 col-md-4 col-sm-12">
        <h2 className="cart-text p-2 ">Your Order </h2>
        <h4 className="cart-text p-2 ">Item: {}</h4>
        <h6 className="cart-text p-2 ">
          Sub-Total: <span className="tk-span">Tk.{cartTotal}</span>
        </h6>
        <h6 className="cart-text p-2 ">
          VAT: <span className="tk-span px-4">Tk. 0.00</span>
        </h6>
        <h6 className="cart-text p-2 ">
          Shipping: <span className="tk-span">Tk. 0.00</span>
        </h6>
        <h4 className="cart-text p-2 cart-total">
          Total: <span className="tk-span p-2">Tk.{cartTotal}</span>
        </h4>
      </div>
    </div>
  );
};

export default Purchase;
