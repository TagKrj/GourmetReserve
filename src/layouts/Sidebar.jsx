import React, { useState } from 'react';
import { menuItems, bottomMenuItems } from '../constants/menuItems.jsx';
import logoText from '../assets/icon/logo_text.png';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [expandedMenus, setExpandedMenus] = useState([]);

    const toggleSubmenu = (menuId) => {
        setExpandedMenus(prev =>
            prev.includes(menuId)
                ? [] // Close the current menu if it's already open
                : [menuId] // Close all other menus and open only this one
        );
    };

    const handleMenuClick = (item) => {
        setActiveItem(item.id);
        if (item.hasSubmenu) {
            toggleSubmenu(item.id);
        }
    };

    const isMenuActive = (item) => {
        // Only active if this exact item is selected and it has no submenu
        return activeItem === item.id && !item.hasSubmenu;
    };

    const hasActiveSubmenu = (item) => {
        // Check if any submenu item is active
        return item.hasSubmenu && item.submenu?.some(subItem => activeItem === subItem.id);
    };

    return (
        <div className="nav-sidebar fixed left-0 top-0 h-screen bg-white border-r border-neutral-300 flex flex-col px-2">
            {/* Logo */}
            <div className="p-6 border-b border-neutral-300 flex justify-center">
                <div className="w-40 h-8 flex items-center justify-center " >
                    <img src={logoText} alt="GourmetReserve" className="h-full object-contain" />
                </div>
            </div>

            {/* Main Menu */}
            <div className="flex-1 py-2 overflow-y-auto">
                {menuItems.map((item) => (
                    <div key={item.id}>
                        <div
                            className={`nav-item cursor-pointer ${isMenuActive(item) ? 'nav-item-active' : ''} ${hasActiveSubmenu(item) ? 'nav-item-parent-active' : ''}`}
                            onClick={() => handleMenuClick(item)}
                        >
                            <div className="w-6 h-6 text-current">
                                {item.icon}
                            </div>
                            <span className={`flex-1 ${isMenuActive(item) ? 'font-semibold' : ''}`}>{item.label}</span>
                            {item.hasSubmenu && (
                                <div className="w-6 h-6">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={`transform transition-transform ${expandedMenus.includes(item.id) ? 'rotate-180' : ''
                                            }`}
                                    >
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Submenu */}
                        {item.hasSubmenu && expandedMenus.includes(item.id) && item.submenu && (
                            <div className="pl-4">
                                {item.submenu.map((subItem) => (
                                    <div
                                        key={subItem.id}
                                        className={`nav-item cursor-pointer ${activeItem === subItem.id ? 'nav-item-active' : ''
                                            }`}
                                        onClick={() => setActiveItem(subItem.id)}
                                    >
                                        {subItem.icon && (
                                            <div className="w-5 h-5 text-current">
                                                {subItem.icon}
                                            </div>
                                        )}
                                        <span className={`${activeItem === subItem.id ? 'font-semibold' : ''}`}>{subItem.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-300"></div>

            {/* Bottom Menu */}
            <div className="py-2">
                {bottomMenuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`nav-item cursor-pointer ${activeItem === item.id ? 'nav-item-active' : ''}`}
                        onClick={() => setActiveItem(item.id)}
                    >
                        <div className="w-6 h-6 text-current">
                            {item.icon}
                        </div>
                        <span className={`${activeItem === item.id ? 'font-semibold' : ''}`}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
