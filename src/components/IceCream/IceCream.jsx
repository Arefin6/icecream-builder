import React from 'react';
import './IceCream.css';
import Scoop from './Scoop/Scoop';

const IceCream = () => {
    return (
        <div> <div className="iceCream react">
        <p className="cone"></p>
         <Scoop></Scoop>
        <div className="cherry"></div>
      </div>
        </div>
    );
};

export default IceCream;