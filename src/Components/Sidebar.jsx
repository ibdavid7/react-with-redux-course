import React from 'react';
import Link from './Link';

const Sidebar = () => {

    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Table', path: '/table' },
        { label: 'Counter', path: '/counter' },
        { label: 'Counter-Reducer', path: '/counterreducer' },
        { label: 'Counter-Reducer-Immer', path: '/counterreducerimmer' },
        { label: 'Playlist', path: '/playlist' },
        { label: 'Car', path: '/car' },
    ];

    const renderedItems = links.map((link, index) => {
        return <Link
         key={index} 
         to={link.path} 
         className={'mb-3'}
         activeClassName={'font-bold border-l-4 border-blue-500 pl-2'}
         >
            {link.label}
         </Link>;
    })

    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedItems}
        </div>
    )
}

export default Sidebar
