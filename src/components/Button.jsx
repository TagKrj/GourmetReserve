import React from 'react';

const Button = ({
    children,
    onClick,
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                w-full font-medium rounded-md py-5 px-9 text-lg
                bg-neutral-300 hover:bg-neutral-400 text-neutral-500 hover:text-neutral-600 
                hover:shadow-md transition-all duration-200
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
