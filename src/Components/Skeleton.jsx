import React from 'react';
import classNames from 'classnames';

const Skeleton = ({ times, className }) => {
    // const boxes = [];
    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i}></div>)
    // }

    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className,
    );
    const innerClassNames = classnames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-radient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200',
        className,
    );

    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} className={outerClassNames}>
            <div className={innerClassNames} />
        </div>
    });

    return (boxes);
}

export default Skeleton
