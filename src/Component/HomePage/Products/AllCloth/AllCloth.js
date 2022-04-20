import { Button } from '@mui/material';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCloth = ({allCloth}) => {
    const {img, price, name, id} = allCloth;
    return (
        <CardGroup className='col-md-3 col-xs-12 col-sm-12 py-2 '>
        <Link className='link-name' to={`/productDetail/${id}`}>
      <Card className='p-2 border-0 card-container'>
        <Card.Img className='img-box' variant="top" src={img} />
        <Card.Body className='p-4'>
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

export default AllCloth;