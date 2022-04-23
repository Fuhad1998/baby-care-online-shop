
import { Button } from '@mui/material';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../../Hooks/UseAuth';
import "./Milk.css"

const Milk = ({milk}) => {
  const {handelAddToCart} = UseAuth()
    const {img, name, price, id} = milk;
    return (
        
        <CardGroup className='col-md-3 col-xs-12 col-sm-12  group-container '>
        
      <Card className=' card-container my-2'>
      <Link className='link-name' to={`/productDetail/${id}`}>
        <Card.Img className='img-box p-2' variant="top" src={img} />
        </Link>
        <Card.Body className=' '>
          <Card.Title> {name}</Card.Title>
          <Card.Text className='fs-5 text-danger'>
            Price: {price}
          </Card.Text>
          <Button onClick={()=>handelAddToCart(milk)} className='text-white bg-danger buy-now-btn px-3'>Add To Cart</Button>
        </Card.Body>
        
      </Card>
      
      
      
    </CardGroup>
  
 
    );
};

export default Milk;