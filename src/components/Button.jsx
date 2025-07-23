import React from 'react';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    ...props
}) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-accent hover:bg-accent-light text-white';
            case 'secondary':
                return 'bg-neutral-300 hover:bg-neutral-400 text-neutral-500';
            case 'ghost':
                return 'bg-transparent hover:bg-neutral-200 text-secondary border border-neutral-300';
            default:
                return 'bg-neutral-300 hover:bg-neutral-400 text-neutral-500';
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'py-2 px-4 text-sm';
            case 'medium':
                return 'py-3 px-6 text-base';
            case 'large':
                return 'py-5 px-9 text-lg';
            default:
                return 'py-3 px-6 text-base';
        }
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                w-full font-medium rounded-md transition-colors
                ${getVariantClasses()}
                ${getSizeClasses()}
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
