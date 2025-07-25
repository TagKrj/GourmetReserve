import React from 'react';

/**
 * MainLayout component that provides a layout with three top columns and a main content area
 * @param {Object} props
 * @param {React.ReactNode} props.leftContent - Content for the left column (optional)
 * @param {React.ReactNode} props.centerContent - Content for the center column (optional)
 * @param {React.ReactNode} props.rightContent - Content for the right column (optional)
 * @param {React.ReactNode} props.mainContent - Content for the main area (optional)
 * @param {string} props.leftText - Text to display in the left column (optional)
 * @param {string} props.leftTextBottom - Text to display below the left column (optional)
 * @param {string} props.className - Additional CSS classes (optional)
 * @returns {JSX.Element}
 */
const MainLayout = ({
    leftContent,
    centerContent,
    rightContent,
    mainContent,
    leftText,
    leftTextBottom,
    className = '',
}) => {
    return (
        <div className={`flex flex-col gap-4 w-full ${className}`}>
            {/* Top section with three columns */}
            <div className="w-full flex items-end justify-between">
                {/* Left column */}
                <div className="flex items-center">
                    {leftText && (
                        <h1 className="text-2xl font-bold text-secondary mr-2">{leftText}</h1>
                    )}
                    {leftContent}
                </div>

                {/* Center column */}
                <div className="flex items-center justify-center">
                    {centerContent}
                </div>

                {/* Right column */}
                <div className="flex items-center justify-end">
                    {rightContent}
                </div>
            </div>

            {/* Left bottom text */}
            {leftTextBottom && (
                <div className="">
                    <span className="text-neutral-500 text-base">{leftTextBottom}</span>
                </div>
            )}

            {/* Main content area - aligned with left column */}
            <div
                className="w-full bg-white rounded-xl shadow-lg"
                style={{ minHeight: 'calc(100vh - 170px)' }}
            >
                {mainContent}
            </div>
        </div>
    );
};

export default MainLayout;
