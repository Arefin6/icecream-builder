import React from 'react';
import './Modal.css';

const Modal = ({ children }) => {

    return (
        <>

            <div className="backdrop"></div>
            <div className="modalBody">
                {children}
            </div>

        </>
    );
};

export default Modal;