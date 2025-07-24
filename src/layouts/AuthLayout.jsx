import React from 'react';
import logoText from '../assets/logo/logo_text2.png';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-lg px-11 py-8 w-full max-w-md min-h-[600px] flex flex-col justify-center">
                <div className="flex-1 flex flex-col justify-between">
                    {/* Logo */}
                    <div className="flex justify-start">
                        <img src={logoText} alt="GourmetReserve" className="h-12 object-contain" />
                    </div>

                    {/* Dynamic Content */}
                    <div className="space-y-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
