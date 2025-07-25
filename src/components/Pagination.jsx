import React, { useState, useEffect } from 'react';

/**
 * Pagination component for navigating through pages
 * @param {Object} props
 * @param {number} props.currentPage - Current active page
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Function to call when page changes
 * @param {number} props.visiblePages - Number of page buttons to show (default: 5)
 * @returns {JSX.Element}
 */
const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    visiblePages = 5
}) => {
    const [pageRange, setPageRange] = useState([]);

    useEffect(() => {
        // Calculate the range of pages to display
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        const endPage = Math.min(totalPages, startPage + visiblePages - 1);

        if (endPage - startPage + 1 < visiblePages) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        const range = [];
        for (let i = startPage; i <= endPage; i++) {
            range.push(i);
        }

        setPageRange(range);
    }, [currentPage, totalPages, visiblePages]);

    // Go to first page
    const handleFirst = () => {
        if (currentPage !== 1) onPageChange(1);
    };

    // Go to previous page
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    // Go to next page
    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    // Go to last page
    const handleLast = () => {
        if (currentPage !== totalPages) onPageChange(totalPages);
    };

    return (
        <div className="flex items-center justify-center my-6 select-none">
            {/* First page button */}
            <button
                onClick={handleFirst}
                disabled={currentPage === 1}
                className={`p-1.5 rounded ${currentPage === 1 ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-400 hover:text-secondary cursor-pointer'}`}
                aria-label="First page"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.5L4.5 9L9 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5 4.5L9 9L13.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Previous page button */}
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`p-1.5 rounded ${currentPage === 1 ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-400 hover:text-secondary cursor-pointer'}`}
                aria-label="Previous page"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 4.5L6.75 9L11.25 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Page numbers */}
            {pageRange.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-8 flex items-center justify-center mx-0.5 rounded-full text-center transition cursor-pointer ${currentPage === page
                        ? 'bg-accent text-white font-medium'
                        : 'text-secondary hover:bg-neutral-100'
                        }`}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                >
                    {page}
                </button>
            ))}

            {/* Show ellipsis and last page if needed */}
            {pageRange[pageRange.length - 1] < totalPages - 1 && (
                <>
                    <span className="text-neutral-500 mx-1">•••</span>
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className="px-2 py-0.5 mx-0.5 min-w-[32px] text-center rounded text-secondary hover:bg-neutral-100 cursor-pointer"
                        aria-label={`Page ${totalPages}`}
                    >
                        {totalPages}
                    </button>
                </>
            )}

            {/* Show last page without ellipsis if it's just one away */}
            {pageRange[pageRange.length - 1] === totalPages - 1 && (
                <button
                    onClick={() => onPageChange(totalPages)}
                    className="px-2 py-0.5 mx-0.5 min-w-[32px] text-center rounded text-secondary hover:bg-neutral-100 cursor-pointer"
                    aria-label={`Page ${totalPages}`}
                >
                    {totalPages}
                </button>
            )}

            {/* Next page button */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`p-1.5 rounded ${currentPage === totalPages ? 'text-neutral-300 cursor-not-allowed' : 'text-secondary hover:text-accent cursor-pointer'}`}
                aria-label="Next page"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Last page button */}
            <button
                onClick={handleLast}
                disabled={currentPage === totalPages}
                className={`p-1.5 rounded ${currentPage === totalPages ? 'text-neutral-300 cursor-not-allowed' : 'text-secondary hover:text-accent cursor-pointer'}`}
                aria-label="Last page"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.5L13.5 9L9 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.5 4.5L9 9L4.5 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};


export default Pagination;
