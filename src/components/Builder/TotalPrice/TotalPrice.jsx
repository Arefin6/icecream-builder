import React from 'react';
import  './TotalPrice.css';

const TotalPrice = ({price}) => {
    return (
        <>
            <div className="total react">
                <div>Total Price</div>
                <div>{price} Tk</div>
            </div>
        </>
    );
};

export default TotalPrice;