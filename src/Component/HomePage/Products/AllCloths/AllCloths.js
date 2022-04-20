import React, { useEffect, useState } from 'react';
import AllCloth from '../AllCloth/AllCloth';

const AllCloths = () => {

    const [allCloths, setAllCloths] = useState([])

    useEffect(()=>{
        fetch("/cloth.json")
        .then(res => res.json())
        .then(data => setAllCloths(data))
    }, [])
    return (
        <div className='row p-5 bg-white shadow'>
            <h1 className=''>All Cloths</h1>
            {
                allCloths.map(allCloth => <AllCloth
                key={allCloth.id}
                allCloth={allCloth}
                ></AllCloth>)
            }
            
        </div>
    );
};

export default AllCloths;