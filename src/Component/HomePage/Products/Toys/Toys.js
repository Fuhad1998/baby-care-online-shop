import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(()=>{
        const url =`https://secure-falls-76091.herokuapp.com/products?category=toys`
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data.slice(0, 4)))
    }, [])
    return (
        <div className='shadow bg-white my-5'>
        <h1 className='p-3'>Baby Toys</h1>
        <div className='row'>
            {
                toys.map(toy => <Toy
                key={toy.id}
                toy={toy}
                ></Toy>)
            }
        </div>
        </div>
    );
};

export default Toys;