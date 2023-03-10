import React, { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

const Accordion = ({ items }) => {

    const [renderedIndex, setRenderedIndex] = useState(-1);

    const handleClick = (index) => {

        setRenderedIndex((prevIndex) => {
            if (prevIndex === index) {
                return -1;
            } else {
                return index;
            }
        })
    }

    const renderedItems = items.map((item, index) => {

        const rendered = index === renderedIndex;

        const icon = (
            <span className='text-2xl'>{rendered ? <GoChevronDown /> : <GoChevronLeft />}</span>
        );

        return (
            <div
                key={index}
            >
                <div
                    onClick={() => handleClick(index)}
                    className='flex justify-between p-3
                    bg-gray-50 border-b cursor-pointer
                        w-full border-slate-500'
                >
                    {item.label}
                    {icon}
                </div>
                {rendered && <p className='border-b p-5'>{item.content}</p>}
            </div>
        );
    })

    return (
        <div className='border-x border-t rounded w-1/4'>
            {renderedItems}
        </div>
    );
};

export default Accordion;