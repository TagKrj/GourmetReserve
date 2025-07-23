import React, { useState } from 'react';

const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    className = '',
    rightIcon,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative h-12">
            <input
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
                    w-full h-12 border rounded px-5 text-lg text-secondary placeholder-neutral-500 
                    transition-all duration-200
                    ${isFocused
                        ? 'border-accent bg-accent-hover shadow-[0px_0px_0px_2px_rgba(0,102,204,0.25)]'
                        : 'border-neutral-400 bg-white focus:border-accent focus:bg-accent-hover'
                    }
                    focus:outline-none
                    ${rightIcon ? 'pr-12' : ''} 
                    ${className}
                `}
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
