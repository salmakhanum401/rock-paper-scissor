import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import close from '../images/icon-close.svg';
import rule from '../images/image-rules.svg';

const Modal = ({toggle}) => {
    return (
        reactDom.createPortal(
            <div className="modal-container">
                <div className="modal-box">
                    <div className="modal__header">
                        <h1>Rules</h1>
                        <button onClick={toggle}>
                            <img src={close} alt=""/>
                        </button>
                    </div>
                <img src={rule} alt=""/>
                </div>
            </div>,
            document.getElementById('modal')
        )
    )
}

export default Modal
