import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../../../Hooks/UseAuth";

const AllMilk = ({ allMilk }) => {
  const { handelAddToCart, admin } = UseAuth();
  const { name, price, img, id } = allMilk;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            className="text-white bg-dark buy-now-btn px-3"
          >
            Add To Cart
          </Button>

          {admin && (
                 <Button
                 onClick={handleShow}
                  className="text-white bg-dark buy-now-btn px-3 ms-2"
                >
                  Update Product
                </Button>
              )}
         
         <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          autoFocus
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

   
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllMilk;
