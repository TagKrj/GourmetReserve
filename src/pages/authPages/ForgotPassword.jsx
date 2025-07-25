import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { goToLogin } from '../../utils/navigateHelpers';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    // Check if email is filled
    const isFormValid = email.trim() !== '';

    const handleSendReset = () => {
        console.log('Reset password email sent to:', email);
        // Add your password reset logic here
        // After successful email send, you might show a confirmation or navigate back
    };

    const handleBackToLogin = () => {
        goToLogin(navigate);
    };


    return (
        <AuthLayout>
            <div className="space-y-6">
                {/* Title */}
                <div className="space-y-1">
                    <h1 className="text-xl font-normal text-secondary leading-tight">
                        パスワードリセット
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
                </div>
            </div>

            {/* Send Button and Back to Login */}
            <div className="space-y-8 text-center">
                <Button
                    onClick={handleSendReset}
                    variant={isFormValid ? 'active' : 'default'}
                >
                    送信する
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

export default ForgotPassword;
