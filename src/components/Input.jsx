import React from 'react';

const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    className = '',
    rightIcon,
    ...props
}) => {
    return (
        <div className="relative h-12">
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-full h-12 border border-neutral-400 rounded px-5 text-lg text-secondary placeholder-neutral-500 focus:outline-none focus:border-accent ${rightIcon ? 'pr-12' : ''} ${className}`}
                placeholder={placeholder}
                {...props}
            />
            {rightIcon && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {rightIcon}
                </div>
            )}
        </div>
    );
};

export default Input;
