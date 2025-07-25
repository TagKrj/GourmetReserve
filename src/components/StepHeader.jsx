import React from 'react';

/**
 * StepHeader component for displaying process step headers
 * @param {Object} props
 * @param {string} props.stepNumber - Step number (e.g., "1", "2")
 * @param {string} props.title - Step title
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
const StepHeader = ({ stepNumber, title, className = '' }) => {
    return (
        <div
            className={`
        flex flex-row items-center gap-2.5 p-2
        bg-accent-hover-light border-l-[6px] border-accent rounded-sm
        ${className}
      `}
        >
            <h3 className="text-lg font-medium text-secondary">
                {title}
            </h3>
        </div>
    );
};

export default StepHeader;
