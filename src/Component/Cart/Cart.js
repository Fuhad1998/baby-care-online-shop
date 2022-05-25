import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./Cart.css";

const Cart = ({ carts }) => {
  // console.log(carts)
  const cartTotal = carts.reduce(
    (acc, product) => acc + Number(product.price),
    0
  );
  // console.log(cartTotal)

  return (
    <div className="cart-container p-3 shadow-lg">
      <div>
        <h2 className=" p-2 ">Order Summary</h2>
        <h4 className="item-text p-2 ">Item: {carts.length}</h4>

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
        <Button className="bg-dark text-white checkout-btn">
          <Link className="checkout-link px-2" to="/purchase">
            Checkout
          </Link>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
