import React, { useState } from 'react';
import eyeIcon from '../assets/icon/Eye.svg';
import eyeClosedIcon from '../assets/icon/Eye-Closed.svg';

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
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Determine if the input has content
    const hasValue = value && value.length > 0;

    // Determine the actual input type (for password toggle)
    const inputType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

    // Get the border and background styling based on state
    const getInputStyling = () => {
        if (isFocused) {
            return 'border-accent bg-accent-hover-light shadow-[0px_0px_0px_2px_rgba(227,90,10,0.25)]';
        } else if (hasValue) {
            // Filled state - black border and light background like in Figma
            return 'border-secondary bg-primary';
        } else {
            return 'border-neutral-400 bg-white focus:border-accent focus:bg-accent-hover-light';
        }
    };

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    // Eye icons for password toggle
    const EyeIcon = () => (
        <img src={eyeIcon} alt="Show password" width="24" height="24" className="w-6 h-6" />
    );

    const EyeClosedIcon = () => (
        <img src={eyeClosedIcon} alt="Hide password" width="24" height="24" className="w-6 h-6" />
    );

    return (
        <div className="relative h-10">
            <input
                type={inputType}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
                    w-full h-10 border rounded px-5 text-base text-secondary placeholder-neutral-500 
                    transition-all duration-200
                    ${getInputStyling()}
                    focus:outline-none
                    ${type === 'password' || rightIcon ? 'pr-12' : ''} 
                    ${className}
                `}
                placeholder={placeholder}
                {...props}
            />
            {/* Password toggle icon */}
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity cursor-pointer"
                >
                    {isPasswordVisible ? <EyeIcon /> : <EyeClosedIcon />}
                </button>
            )}
            {/* Custom right icon (only if not password type) */}
            {rightIcon && type !== 'password' && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {rightIcon}
                </div>
            )}
        </div>
    );
};

export default Input;
