import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Milk from '../Milk/Milk';

const Milks = () => {
    const [milks, setMilks] = useState([])

   useEffect(() =>{
       fetch('/data.json')
       .then(res => res.json())
       .then(data => setMilks(data?.slice(0, 6)))
   }, [])
    return (
        <div className='container my-3'>
            <h1 className='p-3'>Baby Milk</h1>
            <div className='row '>
                    {
                        milks.map(milk => <Milk
                        key={milk.id}
                        milk={milk}
                        ></Milk>)
                    }
            </div>
        </div>
    );
};

export default Milks;