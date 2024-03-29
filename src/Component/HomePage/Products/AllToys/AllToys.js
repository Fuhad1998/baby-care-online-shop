import React, { useEffect, useState } from 'react';
import AllToy from '../AllToy/AllToy';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])

    useEffect(()=>{
        const url =`https://secure-falls-76091.herokuapp.com/products?category=toys`
        fetch(url)
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, [])
    return (
        <div className='shadow bg-white my-5'>
        <h1 className='p-3'>Baby Toys</h1>
        <div className='row'>
            {
                allToys.map(allToy => <AllToy
                key={allToy.id}
                allToy={allToy}
                ></AllToy>)
            }
        </div>
        </div>
    );
};

export default AllToys;