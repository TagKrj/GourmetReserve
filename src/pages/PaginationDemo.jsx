import React, { useState } from 'react';
import Pagination from '../components/Pagination';

const PaginationDemo = () => {
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 65;

    const handlePageChange = (page) => {
        setCurrentPage(page);
        console.log(`Page changed to: ${page}`);
    };

    return (
        <div className="max-w-xl mx-auto p-8">
            <h2 className="text-xl font-medium mb-2">Current Page: {currentPage}</h2>
            <div className="mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="p-3 bg-neutral-50 border rounded mb-2">
                        Item {(currentPage - 1) * 5 + i + 1}
                    </div>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                visiblePages={5}
            />
        </div>
    );
};

export default PaginationDemo;