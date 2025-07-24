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
            className={`inline-flex p-[1px] bg-neutral-300 rounded-[20px] ${className}`}
            {...props}
        >
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`
                        px-7 py-2 text-[18px] font-normal leading-[1.2] rounded-[20px] transition-all duration-200 cursor-pointer
                        ${activeIndex === index
                            ? 'bg-white text-secondary shadow-sm'
                            : 'bg-transparent text-neutral-500 hover:text-neutral-600'
                        }
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
