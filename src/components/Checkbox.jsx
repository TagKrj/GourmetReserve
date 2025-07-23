import React from 'react';

const Checkbox = ({ checked, onChange, label, className = '' }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="w-5 h-5 border border-neutral-400 rounded-sm appearance-none checked:bg-accent checked:border-accent focus:outline-none cursor-pointer hover:border-accent transition-colors"
                />
                {checked && (
                    <svg
                        className="absolute top-0.5 left-0.5 w-4 h-4 text-white pointer-events-none"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
            {label && (
                <label
                    className="text-base text-secondary"
                    onClick={() => onChange({ target: { checked: !checked } })}
                >
                    {label}
                </label>
            )}
        </div>
    );
}; export default Checkbox;
