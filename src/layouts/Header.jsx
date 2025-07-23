import React, { useState } from 'react';

const Header = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const toggleStoreDropdown = () => {
        setIsStoreDropdownOpen(!isStoreDropdownOpen);
    };

    return (
        <header className="bg-white border-b border-neutral-300 h-[70px] px-8 flex items-center justify-between">
            {/* Left Menu - Store Selector */}
            <div className="relative">
                <div
                    className="bg-neutral-200 rounded-sm px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-neutral-300 transition-colors"
                    onClick={toggleStoreDropdown}
                >
                    <span className="text-secondary text-[15px] font-medium">東京店舗</span>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`transform transition-transform ${isStoreDropdownOpen ? 'rotate-180' : ''}`}
                    >
                        <path
                            d="M6 9l6 6 6-6"
                            stroke="#1A1A1A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Store Dropdown Menu */}
                {isStoreDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-neutral-300 rounded-lg shadow-lg min-w-[160px] z-50">
                        <div className="py-2">
                            <button className="w-full px-4 py-2 text-left text-secondary hover:bg-neutral-200 transition-colors">
                                東京店舗
                            </button>
                            <button className="w-full px-4 py-2 text-left text-secondary hover:bg-neutral-200 transition-colors">
                                大阪店舗
                            </button>
                            <button className="w-full px-4 py-2 text-left text-secondary hover:bg-neutral-200 transition-colors">
                                名古屋店舗
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-8">
                {/* Notification Button */}
                <div className="relative">
                    <button className="relative p-2 rounded-full border border-neutral-400 hover:bg-neutral-200 transition-colors">
                        {/* Notification Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5 18V13C5 7.477 9.477 3 15 3C20.523 3 25 7.477 25 13V18"
                                stroke="#1A1A1A"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M14 21H16"
                                stroke="#1A1A1A"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="15"
                                cy="18"
                                r="2"
                                fill="#1A1A1A"
                            />
                        </svg>

                        {/* Notification Badge */}
                        <div className="absolute -top-1 -right-1 w-[10px] h-[10px] bg-error rounded-full shadow-sm"></div>
                    </button>
                </div>

                {/* Profile Section */}
                <div className="relative">
                    <div
                        className="flex items-center gap-4 cursor-pointer"
                        onClick={toggleProfileDropdown}
                    >
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full border border-neutral-400 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* User Info */}
                        <div className="flex flex-col gap-1">
                            <span className="text-secondary text-[15px] font-bold leading-tight">小林 モモ</span>
                            <span className="text-neutral-500 text-[13px] leading-tight">アドミン</span>
                        </div>

                        {/* Dropdown Icon */}
                        <div className="p-1 rounded border border-neutral-400">
                            <svg
                                width="6"
                                height="4"
                                viewBox="0 0 6 4"
                                fill="none"
                                className={`transform transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`}
                            >
                                <path
                                    d="M1 1L3 3L5 1"
                                    stroke="#565656"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Profile Dropdown Menu */}
                    {isProfileDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-white border border-neutral-300 rounded-lg shadow-lg min-w-[180px] z-50">
                            <div className="py-2">
                                <button className="w-full px-4 py-2 text-left text-secondary hover:bg-neutral-200 transition-colors">
                                    プロフィール
                                </button>
                                <button className="w-full px-4 py-2 text-left text-secondary hover:bg-neutral-200 transition-colors">
                                    設定
                                </button>
                                <hr className="my-2 border-neutral-300" />
                                <button className="w-full px-4 py-2 text-left text-secondary hover:bg-neutral-200 transition-colors">
                                    ログアウト
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
