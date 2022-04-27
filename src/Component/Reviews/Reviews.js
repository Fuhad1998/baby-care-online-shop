import React from "react";
import { useForm } from "react-hook-form";
import "./Reviews.css"

const Reviews = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://secure-falls-76091.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("successful Add reviews");
        }
      });
  };
  return (
    <div className="p-5">
      <h2>Give Your Review</h2>
      <form className="review-from  " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 p-2 input-btn shadow rounded"
          {...register("name")}
          placeholder="Write your name"
        />
        <input
          className="input-btn p-2 shadow rounded"
          {...register("email")}
          placeholder="Write your email"
        />
        <textarea
          className="mt-3 input-btn p-2 shadow rounded"
          {...register("text")}
          placeholder="Write your "
        />
        <br />

        <input
          className=" bg-primary text-white  shadow  p-2 input-btn fs-5 border border-secondary"
          type="submit"
          value="Review"
        />
      </form>
    </div>
  );
};

export default Reviews;
