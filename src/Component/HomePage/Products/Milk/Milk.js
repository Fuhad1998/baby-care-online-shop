
import { Button } from '@mui/material';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Milk.css"

const Milk = ({milk}) => {
    const {img, name, price, id} = milk;
    return (
        
        <CardGroup className='col-md-3 col-xs-12 col-sm-12  group-container '>
        <Link className='link-name' to={`/productDetail/${id}`}>
      <Card className=' card-container my-2'>
        <Card.Img className='img-box p-2' variant="top" src={img} />
        <Card.Body className=' '>
          <Card.Title> {name}</Card.Title>
          <Card.Text className='fs-5 text-danger'>
            Price: {price}
          </Card.Text>
          <Button className='text-white bg-danger buy-now-btn px-3'><Link to="/addToCart" className='link-cart'>Add To Cart</Link></Button>
        </Card.Body>
        
      </Card>
      
      </Link>
      
    </CardGroup>
  
 
    );
};

export default Milk;