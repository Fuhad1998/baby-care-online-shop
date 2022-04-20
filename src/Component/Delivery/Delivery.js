import React from 'react';
import "./Delivery.css"

const Delivery = () => {
    return (
        <div className='container p-5'>
            <h1>Delivery</h1>
            <h2 className='text-container'>Shipments and returns</h2>
            <h2 className='text-container'>Your pack shipment</h2>
            <h6 className='text-container p-2'>Packages are generally dispatched within 2 days after receipt of payment and are shipped via UPS with tracking and drop-off without signature. If you prefer delivery by UPS Extra with required signature, an additional cost will be applied, so please contact us before choosing this method. Whichever shipment choice you make, we will provide you with a link to track your package online.</h6>
            <h6 className='text-container p-2'>Shipping fees include handling and packing fees as well as postage costs. Handling fees are fixed, whereas transport fees vary according to total weight of the shipment. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects.</h6>
            <h6 className='text-container p-2'>Boxes are amply sized and your items are well-protected.</h6>
        </div>
    );
};

export default Delivery;