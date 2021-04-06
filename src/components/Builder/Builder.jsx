import React from 'react';
import './Builder.css';

const Builder = () => {
    return (
        <div>
           <div className="builder">
              <h3>Build your own Ice Cream Sundae</h3>
              {/* items comeing */}
              {/* total price */}
              <button type="button"  className="order rounded">
                Add to Cart
              </button>
            </div>
        </div>
    );
};

export default Builder;