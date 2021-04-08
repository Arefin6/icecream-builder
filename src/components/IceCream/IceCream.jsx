import React from 'react';
import './IceCream.css';
import Scoop from './Scoop/Scoop';


const IceCream = ({ scoops }) => {
  

  return (
    <div>
      <div className="iceCream">
        <p className="cone"></p>
        {scoops.map((scoop) => (
                    <Scoop key={`${scoop}${Math.random()}`} scoop={scoop} />
        ))}

        <div className="cherry"></div>
      </div>
    </div>
  );
};

export default IceCream;