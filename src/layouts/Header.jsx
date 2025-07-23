import React, { useState } from 'react';
import avataHeader from '../assets/logo/avataHeader.png';

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
                    className="bg-[#F9F8F6] rounded-[2px] px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-neutral-300 transition-colors"
                    onClick={toggleStoreDropdown}
                >
                    <span className="text-[#1A1A1A] text-[15px] font-medium">東京店舗</span>
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
                    <div className="absolute top-full left-0 mt-2 bg-white border border-[#D0D0D0] rounded-lg shadow-lg min-w-[160px] z-50">
                        <div className="py-2">
                            <button className="w-full px-4 py-2 text-left text-[#1A1A1A] hover:bg-neutral-200 transition-colors">
                                東京店舗
                            </button>
                            <button className="w-full px-4 py-2 text-left text-[#1A1A1A] hover:bg-neutral-200 transition-colors">
                                大阪店舗
                            </button>
                            <button className="w-full px-4 py-2 text-left text-[#1A1A1A] hover:bg-neutral-200 transition-colors">
                                名古屋店舗
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-[30px]">
                {/* Notification Button */}
                <div className="relative">
                    <button className="relative p-2 rounded-full border border-[#D0D0D0] hover:bg-neutral-200 transition-colors">
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
                    </button>

                    {/* Notification Badge */}
                    <div className="absolute top-0 right-0 w-[10px] h-[10px] bg-[#CA3D27] rounded-full shadow-sm"></div>
                </div>

                {/* Profile Section */}
                <div className="relative">
                    <div
                        className="flex items-center gap-[15px] cursor-pointer"
                        onClick={toggleProfileDropdown}
                    >
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full border border-[#D0D0D0] overflow-hidden">
                            <img
                                src={avataHeader}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* User Info */}
                        <div className="flex flex-col gap-1">
                            <span className="text-[#1A1A1A] text-[15px] font-bold leading-tight">小林 モモ</span>
                            <span className="text-[#8C8C8C] text-[13px] leading-tight">アドミン</span>
                        </div>

                        {/* Dropdown Icon */}
                        <div className="w-[18px] h-[18px] p-1 rounded-full border border-[#D0D0D0] flex items-center justify-center">
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

                </div>
            </div>
        </header>
    );
};

export default Header;
