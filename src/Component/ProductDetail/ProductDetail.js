import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import "./ProductDetail.css"

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const {handelAddToCart} = UseAuth()
    const { id } = useParams();

    // console.log(product)

    const item = product.find((pd) => pd.id !== id);
    // const category = product.find((pd) => pd.id !== category);
    // console.log(category)

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
     <div>
          <div className="container productDetail-container pb-5 my-5">
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
            
            <Button onClick={()=>handelAddToCart(item)} className='text-white bg-dark buy-now-btn px-3'>Add To Cart</Button>
          </div>
        </div>
        
      </div>
      <SimilarProducts></SimilarProducts>
     </div>
      
    );
};

export default ProductDetail;