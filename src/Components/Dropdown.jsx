import React, { useState } from 'react'

const Dropdown = ({ items }) => {

    const [selected, setSelected] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsOpen((prevIsOpen) => {
            return !prevIsOpen;
        });
    }

    const handleSelect = (index) => {
        setSelected(index);
        handleItemOnClick();
    }

    console.log(items)
    return (
        <div className='flex flex-col cursor-pointer'>
            <h1>Dropdown</h1>
            <div 
            
            onClick={handleMenuOpen}>
                {items[selected].label}
            </div>
            {isOpen && <div>
                {items.map((item) => {
                    return (<p>{item.label}</p>);
                })}
            </div>}
        </div>
    )
}

export default Dropdown
