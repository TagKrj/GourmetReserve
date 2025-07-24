import React, { useState } from 'react';
import avataHeader from '../assets/logo/avataHeader.png';
// Import icons
import arrowDownIcon from '../assets/icon/down.svg';
import notificationIcon from '../assets/icon/noti.svg';

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
                    className="bg-[#F9F8F6] rounded-[2px] w-[148px] px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-neutral-300 transition-colors"
                    onClick={toggleStoreDropdown}
                >
                    <span className="text-[#1A1A1A] text-[15px] font-medium flex-1">東京店舗</span>
                    <img
                        src={arrowDownIcon}
                        alt="Arrow down"
                        width="24"
                        height="24"
                        className={`transform transition-transform ${isStoreDropdownOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-[30px]">
                {/* Notification Button */}
                <div className="relative">
                    <button className="relative p-2 rounded-full border border-[#D0D0D0] hover:bg-neutral-200 transition-colors">
                        {/* Notification Icon */}
                        <img
                            src={notificationIcon}
                            alt="Notifications"
                            width="24"
                            height="24"
                        />
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
                            <img
                                src={arrowDownIcon}
                                alt="Dropdown"
                                width="10"
                                height="10"
                                className={`transform transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </div>
                    </div>

                    {/* Profile Dropdown Menu */}
                    {/*    
             {isProfileDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-white border border-[#D0D0D0] rounded-lg shadow-lg min-w-[180px] z-50">
                            <div className="py-2">
                                <button className="w-full px-4 py-2 text-left text-[#1A1A1A] hover:bg-neutral-200 transition-colors">
                                    プロフィール
                                </button>
                                <button className="w-full px-4 py-2 text-left text-[#1A1A1A] hover:bg-neutral-200 transition-colors">
                                    設定
                                </button>
                                <hr className="my-2 border-[#D0D0D0]" />
                                <button className="w-full px-4 py-2 text-left text-[#1A1A1A] hover:bg-neutral-200 transition-colors">
                                    ログアウト
                                </button>
                            </div>
                        </div>
                    )}
                    */}
                </div>
            </div>
        </header>
    );
};

export default Header;
