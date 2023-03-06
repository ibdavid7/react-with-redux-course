import React from 'react';
import classnames from 'classnames';

const Button = ({
                    children,
                    primary,
                    secondary,
                    success,
                    warning,
                    danger,
                    outline,
                    rounded,
                    ...rest
                }) => {
    // getting any additional className from props and appending to className
    const classes = classnames(rest.className, 'px-3', 'py-1.5', 'border', 'flex', 'items-center', {
        "border-blue-500 bg-blue-500": primary,
        "border-gray-900 bg-gray-900": secondary,
        "border-green-500 bg-green-500": success,
        "border-yellow-400 bg-yellow-400": warning,
        "border-red-500 bg-red-500": danger,
        "rounded-full": rounded,
        "text-white":
            !outline && (primary || secondary || success || warning || danger),
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-500": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
    });

    // console.log(rest);
    let {className, ...remainder} = rest;

    return (
        <button
            className={classes}
            {...remainder}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    checkButtonParamValues: ({
                                 primary,
                                 secondary,
                                 success,
                                 warning,
                                 danger
                             }) => {
        const arr = [primary, secondary, success, warning, danger];
        const count = arr.reduce(
            (accumulator, currentValue) => accumulator + Number(!!currentValue),
            0);

        // console.log(count);
        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    }

};
export default Button;