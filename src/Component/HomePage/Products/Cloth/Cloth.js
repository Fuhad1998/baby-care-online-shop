import { Button } from '@mui/material';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../../Hooks/UseAuth';
import "./Cloth.css"


const Cloth = ({cloth}) => {
  const {handelAddToCart} = UseAuth()
    const {name, img, price, id} = cloth;
    return (
        <CardGroup className='col-md-3 col-xs-12 col-sm-12 py-2 '>
        
      <Card className='p-2 border-0 card-container' >
      <Link className='link-name' to={`/productDetail/${id}`}>
        <Card.Img className='img-box' variant="top" src={img} />
        </Link>
        <Card.Body className='p-4'>
          <Card.Title> {name}</Card.Title>
          <Card.Text className='fs-5 text-danger'>
            Price: {price}
          </Card.Text>
          

          <Button onClick={()=>handelAddToCart(cloth)} className='text-white bg-danger buy-now-btn px-3'>Add To Cart</Button>
        </Card.Body>
        
      </Card>
      
      
      
    </CardGroup>
    );
};

export default Cloth;