import React from 'react';

export default function Checkbox({ id, className, children, ...rest }) {
    return (
        <label htmlFor={id} className={className}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input type="checkbox" id={id} {...rest} /> <span>{children}</span>
        </label>
    );
}
