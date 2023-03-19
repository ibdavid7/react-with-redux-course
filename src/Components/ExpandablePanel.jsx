import React, {useState} from 'react';
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';

const ExpandableComponent = ({header, children}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const handleOnClick = () => {
        setIsExpanded((prev) => !prev);
    }

    return (
        <div className={'mb-2 border rounded'}>
            <div className={'flex p-2 justify-between items-center'}>
                <div className={'flex flex-row justify-between items-center'}>
                    {header}
                </div>
                <div onClick={handleOnClick} className={'cursor-pointer'}>
                    {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
                </div>
            </div>
            {isExpanded && <div className={'p-2 border-t'}>{children}</div>}

        </div>
    );
};

export default ExpandableComponent;
