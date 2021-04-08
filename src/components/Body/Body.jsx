import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';
import './Body.css';

const Body = () => {
    return (
        <div className="mainBody">
            <IceCreamBuilder></IceCreamBuilder>
        </div>
    );
};

export default Body;