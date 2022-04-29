import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./ProductDetail.css"

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const {handelAddToCart} = UseAuth()
    const { id } = useParams();

    console.log(product)

    const item = product.find((pd) => pd.id !== id);
    // console.log(item)

    useEffect(() => {
      const url =`https://secure-falls-76091.herokuapp.com/products?category=cloths`
      
        fetch(url)
          .then((res) => res.json())
          .then((data) => setProduct(data));
          const urlMilks =`https://secure-falls-76091.herokuapp.com/products?category=milks`
          fetch(urlMilks)
          .then((res) => res.json())
          .then((data) => setProduct(data));

      }, []);
   
    return (
        <div className="container  my-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={item?.img} />
              
            </Card>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 detail-container">
            <h1 className=" product-det">{item?.name}</h1>
            <p className="product-det">Description: {item?.description}</p>
            <h4 className=" text-danger product-det pb-2">Price: {item?.price}</h4>
            <h4 className=" product-det">In Stock Order Soon</h4>
            
            <Button onClick={()=>handelAddToCart(item)} className='text-white bg-danger buy-now-btn px-3'>Add To Cart</Button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetail;