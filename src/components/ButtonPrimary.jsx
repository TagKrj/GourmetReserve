import React from 'react';

const Button = ({
    children,
    onClick,
    disabled = false,
    variant = 'primary', // 'primary' or 'default'
    icon,
    iconPosition = 'left', // 'left' or 'right'
    className = '',
    ...props
}) => {
    const getButtonStyles = () => {
        if (variant === 'primary') {
            return 'bg-accent hover:bg-[rgb(227,90,10,0.8)] text-white';
        }
        return 'bg-neutral-300 hover:bg-neutral-400 text-neutral-500 hover:text-neutral-600';
    };

    const renderContent = () => {
        if (!icon) {
            // Case 1: Chỉ có text
            return children;
        }

        const iconElement = (
            <span className="w-6 h-6 flex items-center justify-center">
                {icon}
            </span>
        );

        if (iconPosition === 'right') {
            // Case 2: Text + Icon bên phải
            return (
                <>
                    {children}
                    {iconElement}
                </>
            );
        } else {
            // Case 3: Icon bên trái + Text
            return (
                <>
                    {iconElement}
                    {children}
                </>
            );
        }
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                flex items-center justify-center gap-2 h-11
                font-medium rounded-[20px] py-3 px-6 text-[15px] leading-[1.2]
                ${getButtonStyles()}
                hover:shadow-md transition-all duration-200
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
            style={{
                fontFamily: 'Noto Sans JP, sans-serif',
                fontWeight: 500,
                paddingLeft: '20px',
                paddingRight: '24px'
            }}
            {...props}
        >
            {renderContent()}
        </button>
    );
};

export default Button;
