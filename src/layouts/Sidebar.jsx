import React, { useState } from 'react';
import { menuItems, bottomMenuItems } from '../constants/menuItems.jsx';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [expandedMenus, setExpandedMenus] = useState([]);

    const toggleSubmenu = (menuId) => {
        setExpandedMenus(prev =>
            prev.includes(menuId)
                ? prev.filter(id => id !== menuId)
                : [...prev, menuId]
        );
    };

    const handleMenuClick = (item) => {
        setActiveItem(item.id);
        if (item.hasSubmenu) {
            toggleSubmenu(item.id);
        }
    };

    return (
        <div className="nav-sidebar fixed left-0 top-0 h-screen bg-white border-r border-neutral-300 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-neutral-300">
                <div className="w-32 h-7 bg-secondary rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">GourmetReserve</span>
                </div>
            </div>

            {/* Main Menu */}
            <div className="flex-1 py-2 overflow-y-auto">
                {menuItems.map((item) => (
                    <div key={item.id}>
                        <div
                            className={`nav-item cursor-pointer ${activeItem === item.id && !item.hasSubmenu ? 'nav-item-active' : ''
                                }`}
                            onClick={() => handleMenuClick(item)}
                        >
                            <div className="w-6 h-6 text-current">
                                {item.icon}
                            </div>
                            <span className="flex-1">{item.label}</span>
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
                            <div className="nav-dropdown ml-10 border-l-2 border-neutral-300">
                                {item.submenu.map((subItem) => (
                                    <div
                                        key={subItem.id}
                                        className={`nav-item cursor-pointer ${subItem.active ? 'nav-item-active' : ''
                                            }`}
                                        onClick={() => setActiveItem(subItem.id)}
                                    >
                                        <span>{subItem.label}</span>
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
                        className="nav-item cursor-pointer"
                        onClick={() => setActiveItem(item.id)}
                    >
                        <div className="w-6 h-6 text-current">
                            {item.icon}
                        </div>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
