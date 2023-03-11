import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import ReactDom from 'react-dom';

const Modal = ({ onClose, children, actionBar }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (event) => {
        setShowModal(true)
    }

    useEffect(() => {

        document.body.classList.add('overflow-hidden');

        return (() => {
            document.body.classList.remove('overflow-hidden');
        });

    }, []);

    return ReactDom.createPortal(
        <div>
            <div
                onClick={onClose}
                className='fixed inset-0 bg-gray-300 opacity-80'
            ></div>
            <div className='fixed inset-40 p-10 bg-white'>
                <div className='flex flex-col justify-between'>
                    {children}
                    <div className='flex justify-end'>
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )

}

export default Modal;
