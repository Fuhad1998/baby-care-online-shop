import React, { useEffect, useState } from 'react';
import AllMilk from '../AllMulk/AllMilk';

const AllMilks = () => {

    const [allMilks, setAllMilks] = useState([]);

    useEffect( ()=>{
        const url =`http://localhost:5000/products?category=milks`
        fetch(url)
        .then( res => res.json())
        .then(data => setAllMilks(data))
    }, [])
    return (
        <div className='row'>
            <h1 className='p-3'>All Milks</h1>
            {
                allMilks.map(allMilk => <AllMilk
                key={allMilk?.id}
                allMilk={allMilk}
                ></AllMilk>)
            }
        </div>
    );
};

export default AllMilks;