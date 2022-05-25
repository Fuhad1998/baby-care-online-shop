import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Purchase.css"
import UseAuth from "../../Hooks/UseAuth";

const Purchase = () => {
    const {carts} = UseAuth();
    
    const Navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  let orderName = carts.map(product =>(product.name))
  // console.log(orderName)
  


  const onSubmit = (data) => {
    
    data.totalPrice = cartTotal;
    data.product = orderName;
    fetch("https://secure-falls-76091.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            Navigate("/")
            alert("Successful Add Yours Orders");
          }
        });
        // console.log(data)
  };
  // console.log(carts)
  

  



  const cartTotal = carts.reduce(
    (acc, product) => acc +   Number(product.price),
    0
  );



  

//   console.log(cartTotal)
  return (
    <div className="container ">
    <div className="row p-5">
      <div className="col-xs-12 col-md-6 col-sm-12 purchase-container  pt-3">
          <h1>Order Details</h1>
        <form className="product-from " onSubmit={handleSubmit(onSubmit)}>
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

      <div className="col-xs-12 col-md-6 col-sm-12 order-container pt-3 shadow-lg pr-4">
      <h2 className="cart-text p-2 ">Your Order </h2>
        <h4 className="cart-text p-2 ">Item: {carts?.length}</h4>
      <div className="ul-container">
          <ul>Sub-Total:</ul>
          <ul>Tk.{cartTotal}</ul>
        </div>
        <div className="ul-container">
        <ul>Shipping:</ul>
          <ul>Tk. 0.00</ul>
          
        </div>
        <div className="ul-container">
          <ul>VAT:</ul>

          <ul>Tk. 0.00</ul>
        </div>
        <div className="ul-container cart-total">
          <ul>Total:</ul>
          <ul>Tk.{cartTotal}</ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Purchase;
