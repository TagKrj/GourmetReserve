import React, { useState } from 'react';

const TabButton = ({
    options,
    defaultActive = 0,
    variant = 'default', // 'default' or 'inverse'
    onChange,
    className = '',
    ...props
}) => {
    const [activeIndex, setActiveIndex] = useState(defaultActive);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (onChange) {
            onChange(index, options[index]);
        }
    };

    const getContainerStyles = () => {
        if (variant === 'inverse') {
            return 'bg-accent';
        }
        return 'bg-neutral-300';
    };

    const getSliderStyles = () => {
        if (variant === 'inverse') {
            return 'bg-white';
        }
        return 'bg-white';
    };

    const getButtonStyles = (index) => {
        if (variant === 'inverse') {
            return activeIndex === index
                ? 'text-secondary'
                : 'text-white hover:text-neutral-200';
        }
        return activeIndex === index
            ? 'text-secondary'
            : 'text-neutral-500 hover:text-neutral-600';
    };

    return (
        <div
            className={`relative inline-flex p-[1px] rounded-[20px] ${getContainerStyles()} ${className}`}
            {...props}
        >
            {/* Animated background slider */}
            <div
                className={`absolute top-[1px] left-[1px] rounded-[20px] shadow-sm transition-all duration-300 ease-in-out ${getSliderStyles()}`}
                style={{
                    width: `calc(${100 / options.length}% - 1px)`,
                    height: 'calc(100% - 2px)',
                    transform: `translateX(${activeIndex * 100}%)`
                }}
            />

            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`
                        relative z-10 px-7 py-2 text-[18px] font-normal leading-[1.2] rounded-[20px] transition-all duration-200 cursor-pointer whitespace-nowrap
                        ${getButtonStyles(index)}
                    `}
                    style={{
                        fontFamily: 'Noto Sans JP, sans-serif',
                        height: '42px',
                        minWidth: 'auto'
                    }}
                >
                    {typeof option === 'string' ? option : option.label}
                </button>
            ))}
        </div>
    );
};

export default TabButton;
