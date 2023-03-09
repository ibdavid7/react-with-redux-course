import React, { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { Panel } from './';

const Dropdown = ({ options, value, onChange }) => {

    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {

            // check ref element actually shown rather than null
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        const cleanup = () => {
            document.removeEventListener('click', handler, true);
        }

        return cleanup;
    }, []);

    const handleIsOpen = () => {
        setIsOpen((prevIsOpen) => {
            return !prevIsOpen;
        });

    }

    const handleOnClick = (option) => {
        onChange(option);
        handleIsOpen();
    }

    const renderedOptions = options.map((option, index) => {
        return (
            <div
                className='hover:bg-sky-100 rounder cursor-pointer p-1'
                key={index}
                onClick={() => handleOnClick(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className='w-48 relative' ref={divEl}>
            <Panel
                onClick={handleIsOpen}
                className='flex justify-between items-center cursor-pointer '
            >
                {value?.label || 'Select:'}
                <GoChevronDown className='text-lg' />
            </Panel>
            {isOpen && <Panel className='absolute top-full '> {renderedOptions} </Panel>}
        </div>
    )
}

export default Dropdown;