import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Check if all fields are filled and passwords match
    const isFormValid = email.trim() !== '' &&
        newPassword.trim() !== '' &&
        confirmPassword.trim() !== '' &&
        newPassword === confirmPassword;

    const handleSavePassword = () => {
        console.log('Password reset:', { email, newPassword });
        // Add your password reset logic here
        // After successful reset, you might navigate to login
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };

    return (
        <AuthLayout>
            <div className="space-y-6">
                {/* Title */}
                <div className="space-y-1">
                    <h1 className="text-xl font-normal text-secondary leading-tight">
                        パスワード再設定
                    </h1>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                    {/* Email Field */}
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="メールアドレス"
                    />

                    {/* New Password Field */}
                    <div className="relative">
                        <Input
                            type={showNewPassword ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="新しいパスワード"
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            {showNewPassword ? (
                                // Mắt mở (khi đang hiển thị password)
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                // Mắt gạch chéo (khi đang ẩn password)
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.68936 6.70456C2.52619 6.32384 2.08528 6.14747 1.70456 6.31064C1.32384 6.47381 1.14747 6.91472 1.31064 7.29544L2.68936 6.70456ZM15.5872 13.3287L15.3125 12.6308L15.3125 12.6308L15.5872 13.3287ZM9.04145 13.7377C9.26736 13.3906 9.16904 12.926 8.82185 12.7001C8.47466 12.4742 8.01008 12.5725 7.78417 12.9197L9.04145 13.7377ZM6.37136 15.091C6.14545 15.4381 6.24377 15.9027 6.59096 16.1286C6.93815 16.3545 7.40273 16.2562 7.62864 15.909L6.37136 15.091ZM22.6894 7.29544C22.8525 6.91472 22.6762 6.47381 22.2954 6.31064C21.9147 6.14747 21.4738 6.32384 21.3106 6.70456L22.6894 7.29544ZM19 11.1288L18.4867 10.582L18.4867 10.582L19 11.1288ZM19.9697 13.1592C20.2626 13.4521 20.7374 13.4521 21.0303 13.1592C21.3232 12.8663 21.3232 12.3914 21.0303 12.0985L19.9697 13.1592ZM11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5H11.25ZM16.3714 15.909C16.5973 16.2562 17.0619 16.3545 17.409 16.1286C17.7562 15.9027 17.8545 15.4381 17.6286 15.091L16.3714 15.909ZM5.53033 11.6592C5.82322 11.3663 5.82322 10.8914 5.53033 10.5985C5.23744 10.3056 4.76256 10.3056 4.46967 10.5985L5.53033 11.6592ZM2.96967 12.0985C2.67678 12.3914 2.67678 12.8663 2.96967 13.1592C3.26256 13.4521 3.73744 13.4521 4.03033 13.1592L2.96967 12.0985Z" fill="#1C274C" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <Input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="新しいパスワード（確認用）"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            {showConfirmPassword ? (
                                // Mắt mở (khi đang hiển thị password)
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                // Mắt gạch chéo (khi đang ẩn password)
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.68936 6.70456C2.52619 6.32384 2.08528 6.14747 1.70456 6.31064C1.32384 6.47381 1.14747 6.91472 1.31064 7.29544L2.68936 6.70456ZM15.5872 13.3287L15.3125 12.6308L15.3125 12.6308L15.5872 13.3287ZM9.04145 13.7377C9.26736 13.3906 9.16904 12.926 8.82185 12.7001C8.47466 12.4742 8.01008 12.5725 7.78417 12.9197L9.04145 13.7377ZM6.37136 15.091C6.14545 15.4381 6.24377 15.9027 6.59096 16.1286C6.93815 16.3545 7.40273 16.2562 7.62864 15.909L6.37136 15.091ZM22.6894 7.29544C22.8525 6.91472 22.6762 6.47381 22.2954 6.31064C21.9147 6.14747 21.4738 6.32384 21.3106 6.70456L22.6894 7.29544ZM19 11.1288L18.4867 10.582L18.4867 10.582L19 11.1288ZM19.9697 13.1592C20.2626 13.4521 20.7374 13.4521 21.0303 13.1592C21.3232 12.8663 21.3232 12.3914 21.0303 12.0985L19.9697 13.1592ZM11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5H11.25ZM16.3714 15.909C16.5973 16.2562 17.0619 16.3545 17.409 16.1286C17.7562 15.9027 17.8545 15.4381 17.6286 15.091L16.3714 15.909ZM5.53033 11.6592C5.82322 11.3663 5.82322 10.8914 5.53033 10.5985C5.23744 10.3056 4.76256 10.3056 4.46967 10.5985L5.53033 11.6592ZM2.96967 12.0985C2.67678 12.3914 2.67678 12.8663 2.96967 13.1592C3.26256 13.4521 3.73744 13.4521 4.03033 13.1592L2.96967 12.0985Z" fill="#1C274C" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Password match validation */}
                    {confirmPassword && newPassword !== confirmPassword && (
                        <p className="text-sm text-red-500">パスワードが一致しません</p>
                    )}
                </div>
            </div>

            {/* Save Button and Back to Login */}
            <div className="space-y-8 text-center">
                <Button
                    onClick={handleSavePassword}
                    variant={isFormValid ? 'active' : 'default'}
                >
                    保存
                </Button>

                <p
                    className="text-sm text-neutral-500 cursor-pointer hover:text-accent transition-colors underline underline-offset-2"
                    onClick={handleBackToLogin}
                >
                    ログインはこちら
                </p>
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;
