import React, { useState } from 'react';

const TabButton = ({
    options,
    defaultActive = 0,
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

    return (
        <div
            className={`relative inline-flex p-[1px] bg-neutral-300 rounded-[20px] ${className}`}
            {...props}
        >
            {/* Animated background slider */}
            <div
                className="absolute top-[1px] left-[1px] bg-white rounded-[20px] shadow-sm transition-all duration-300 ease-in-out"
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
                        relative z-10 px-7 py-2 text-[18px] font-normal leading-[1.2] rounded-[20px] transition-all duration-200 cursor-pointer
                        ${activeIndex === index
                            ? 'text-secondary'
                            : 'text-neutral-500 hover:text-neutral-600'
                        }
                    `}
                    style={{
                        fontFamily: 'Noto Sans JP, sans-serif',
                        height: '42px',
                        minWidth: 'auto',
                        flex: 1
                    }}
                >
                    {typeof option === 'string' ? option : option.label}
                </button>
            ))}
        </div>
    );
};

export default TabButton;
