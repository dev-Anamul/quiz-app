import React from 'react';
import classes from '../styles/Button.module.css';

export default function Button({ className, children, ...rest }) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button type="button" className={`${classes.button} ${className}`} {...rest}>
            {children}
        </button>
    );
}
