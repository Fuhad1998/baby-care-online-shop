import React from "react";
import { useForm } from "react-hook-form";
import "./AddAProduct.css";

const AddAProduct = () => {
  

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("successful Add A Product");
            
          }
        });
  };
  return (
    <div>
      <h1 className="text-center p-3">Add-A-Product</h1>

     

      <form className="product-from" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-btn p-2"
          {...register("name")}
          placeholder="Write product name"
          type="text"
        />
        <br />
        <input
          className="input-btn p-2"
          {...register("description")}
          placeholder="Write description"
          type="text"
        />
        <br />
        <input
          className="input-btn p-2"
          {...register("img")}
          placeholder="Write imgUrl"
          type="text"
        />
        <br />
        <input
          className="input-btn p-2"
          {...register("price")}
          placeholder="Write product price "
          type="number"
        />
       
        <br />
        <select className="input-btn p-2"  {...register("category",  { required: true })} placeholder="select category">
          <option value="cloths">cloths</option>
          <option value="milks">milks</option>
          <option value="toys">toys</option>
          
        </select>

        <br />
        <input
          className="btn-submit mb-4 input-btn p-2  bg-danger border border-secondary text-white fs-5"
          type="submit"
          value="Please Add product"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
