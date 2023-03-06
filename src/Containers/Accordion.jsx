import React from 'react';

const Accordion = ({items}) => {

    const renderedItems = items.map((item, index) => {
        return (
            <div key={index}>
                <h1>{item.label}</h1>
                <p>{item.content}</p>
            </div>
        );
    })

    return (renderedItems);
};

export default Accordion;