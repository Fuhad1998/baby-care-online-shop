import React, { useEffect, useState } from "react";
import Milk from "../Milk/Milk";

const Milks = () => {
  const [milks, setMilks] = useState([]);

  useEffect(() => {
    const url =`https://secure-falls-76091.herokuapp.com/products?category=milks`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMilks(data?.slice(0, 4)));
  }, []);
  return (
    <div>
      <h1 className="p-4">Baby Milk</h1>
      
      <div className="row ">
        {milks.map((milk) => (
          <Milk key={milk.id} milk={milk}></Milk>
        ))}
      </div>
    </div>
  );
};

export default Milks;