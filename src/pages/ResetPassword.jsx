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
                    <Input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="新しいパスワード"
                    />

                    {/* Confirm Password Field */}
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="新しいパスワード（確認用）"
                    />

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
