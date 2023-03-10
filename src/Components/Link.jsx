import React from 'react';
import { useNavigationContext } from '../Hooks';
import classNames from 'classnames';


const Link = ({ to, children, className, activeClassName }) => {

    const { navigateTo, currentPath } = useNavigationContext();

    const classes = classNames(
        'text-blue-500',
        className,
        to === currentPath && activeClassName
    );

    const handleClick = (event) => {
        // check whether user using Ctrl to open new window
        console.log(event);
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigateTo(to);
    }

    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    )
}

export default Link;