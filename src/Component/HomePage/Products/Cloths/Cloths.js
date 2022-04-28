import React, { useEffect, useState } from 'react';
import Cloth from '../Cloth/Cloth';

const Cloths = () => {

    const [cloths, serCloths] = useState([])

    useEffect( () =>{
        const url =`https://secure-falls-76091.herokuapp.com/products?category=cloths`
        fetch(url)
        .then(res => res.json())
        .then(data => serCloths(data.slice(0, 4)))
    }, [])
    return (
        <div className='shadow bg-white'>
            <h1 className='p-3'>Baby Cloths</h1>
            <div className='row'>
                {
                    cloths.map(cloth => <Cloth
                    key={cloth.id}
                    cloth={cloth}
                    ></Cloth>)
                }
            </div>
            </div>
        
    );
};

export default Cloths;