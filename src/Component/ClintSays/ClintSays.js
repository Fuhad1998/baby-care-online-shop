import React, { useEffect, useState } from "react";
import ClintSay from "../ClintSay/ClintSay";


const ClintSays = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setReviews(data.slice(0, 1)))
    }, [])



  return (
    <div>
        <h1>Our Clint says</h1>
        {
            reviews.map(review => <ClintSay
            key={review._id}
            review={review}
            ></ClintSay>)
        }
    </div>
  );
};

export default ClintSays;
