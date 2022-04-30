import React from 'react';
import ClintSays from '../../ClintSays/ClintSays';
import Banner from '../Banner/Banner';
import Cloths from '../Products/Cloths/Cloths';
import Milks from '../Products/Milks/Milks';
import Toys from '../Products/Toys/Toys';

const Homes = () => {
    return (
        <div>
            <Banner></Banner>
            <Cloths></Cloths>
            <Milks></Milks>
            <Toys></Toys>
            <ClintSays></ClintSays>
            

            
        </div>
    );
};

export default Homes;