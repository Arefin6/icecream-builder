import React from 'react';
import { countBy } from 'lodash';
import './Items.css';

const Items = ({name,add,remove,scoops={}}) => {
    const scoopsByCount = countBy(scoops);
    return (
        <>
            <li className="react item" id="item">
                <span>{name}</span>

                {scoopsByCount[name] >= 0 ? (
                <span className="quantity">{scoopsByCount[name]}</span>
            ) : null}
                <div className="right">
                    <button type="button" onClick={()=>add(name)} className="plus rounded">+</button>
                    <button type="button" onClick={()=>remove(name)} className="minus rounded">-</button>
                </div>
            </li>
        </>
    );
};

export default Items;