import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../img/banner/New Project (10).jpg"
import img2 from "../../../img/banner/New Project (11).jpg"
import img3 from "../../../img/banner/New Project (9).jpg"

const Banner = () => {
    return (
        <Carousel className=''>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
      
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
      
         
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;






































