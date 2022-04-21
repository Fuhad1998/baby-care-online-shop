import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./ProductDetail.css"

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    // console.log(product)

    const item = product.find((pd) => pd.id == id);
    // console.log(item)

    useEffect(() => {
        fetch("/cloth.json")
          .then((res) => res.json())
          .then((data) => setProduct(data));

          fetch("/data.json")
          .then((res) => res.json())
          .then((data) => setProduct(data));

      }, []);
    // useEffect(() => {
    //     fetch("/data.json")
    //       .then((res) => res.json())
    //       .then((data) => setProduct(data));
    //   }, []);
    return (
        <div className="container my-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={item?.img} />
              
            </Card>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <h1 className=" product-det">{item?.name}</h1>
            <p className="product-det">Description: {item?.description}</p>
            <h4 className=" text-danger product-det pb-2">Price: {item?.price}</h4>
            
            <Button className="d-grid justify-content-start bg-danger text-white p-2 addToCart-btn"><Link to="/addToCart" className='link-cart'>Add To Cart</Link></Button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetail;