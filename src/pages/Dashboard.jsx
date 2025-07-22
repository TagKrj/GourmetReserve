import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-primary flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-60">
                <div className="p-8">
                    <div className="mb-8">
                        <h1 className="text-heading-xl mb-4">予約スケジュール</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex bg-neutral-300 rounded-full p-1">
                                <button className="px-7 py-2 bg-white rounded-full text-secondary font-medium">
                                    カレンダー
                                </button>
                                <button className="px-7 py-2 text-neutral-500 font-medium">
                                    予約一覧
                                </button>
                            </div>
                            <button className="btn-primary ml-auto flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                予約追加
                            </button>
                        </div>
                    </div>

                    {/* Calendar Component Placeholder */}
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-heading-md">カレンダー表示</h2>
                        </div>
                        <div className="card-body">
                            <div className="calendar-container">
                                <div className="calendar-header">
                                    <button className="btn-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </button>
                                    <h3 className="text-heading-md">2025年7月12日</h3>
                                    <button className="btn-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-6">
                                    <p className="text-body text-center">Calendar component will be implemented here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
