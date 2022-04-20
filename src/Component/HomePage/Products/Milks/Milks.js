import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Milk from "../Milk/Milk";

const Milks = () => {
  const [milks, setMilks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setMilks(data?.slice(0, 8)));
  }, []);
  return (
    <div>
      <h1 className="p-4">Baby Milk</h1>
      <Button className="see-btn py-2 fw-bold fs-5" variant="info">
        <Link className="link-btn text-white " to="/allMilks">See All</Link>
      </Button>
      <div className="row ">
        {milks.map((milk) => (
          <Milk key={milk.id} milk={milk}></Milk>
        ))}
      </div>
    </div>
  );
};

export default Milks;