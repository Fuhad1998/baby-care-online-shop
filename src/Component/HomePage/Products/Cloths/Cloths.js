import React, { useEffect, useState } from 'react';
import Cloth from '../Cloth/Cloth';

const Cloths = () => {

    const [cloths, serCloths] = useState([])

    useEffect( () =>{
        fetch("/cloth.json")
        .then(res => res.json())
        .then(data => serCloths(data))
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