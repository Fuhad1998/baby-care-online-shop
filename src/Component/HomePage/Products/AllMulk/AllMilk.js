import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../../../Hooks/UseAuth";

const AllMilk = ({ allMilk }) => {
  const { handelAddToCart } = UseAuth();
  const { name, price, img, id } = allMilk;
  return (
    <div className="col-md-3 col-xs-12 col-sm-12  group-container ">
      <Card className=" card-container my-2">
        <Link className="link-name" to={`/productDetail/${id}`}>
          <Card.Img className="img-box p-2" variant="top" src={img} />
        </Link>
        <Card.Body className=" ">
          <Card.Title> {name}</Card.Title>
          <Card.Text className="fs-5 text-danger">Price: {price}</Card.Text>
          <Button
            onClick={() => handelAddToCart(allMilk)}
            className="text-white bg-danger buy-now-btn px-3"
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMilk;
