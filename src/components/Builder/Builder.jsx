import React from 'react';
import './Builder.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({items,price,add,remove,scoops}) => {
    const flavors = Object.keys(items)
    return (
        <div>
           <div className="builder">
              <h3>Build your own Ice Cream Sundae</h3>
               <ul>
                 {
                   flavors.map(flavor =>(
                    <Items key={flavor} name={flavor} add={add} remove={remove} scoops={scoops}></Items>
                   ))
                 }
                
               </ul>
               <TotalPrice price={price}></TotalPrice>
              <button type="button"  className="order rounded">
                Add to Cart
              </button>
              <Modal>Hello Modal</Modal>
            </div>
        </div>
    );
};

export default Builder;