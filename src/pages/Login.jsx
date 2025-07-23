import React, { useState } from 'react';
import logoText from '../assets/icon/logo_text.png';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="min-h-screen bg-primary flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-lg p-11 w-full max-w-md">
                <div className="space-y-8">
                    {/* Logo */}
                    <div className="flex justify-start">
                        <img src={logoText} alt="GourmetReserve" className="h-14 object-contain" />
                    </div>

                    {/* Login Form */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            {/* Welcome Text */}
                            <div className="space-y-1">
                                <h1 className="text-4xl font-extrabold text-secondary leading-tight">
                                    おかえりなさい
                                </h1>
                                <p className="text-xl text-secondary leading-relaxed">
                                    ログイン情報を入力してください
                                </p>
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

                                {/* Password Field */}
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="パスワード"
                                    rightIcon={
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="w-6 h-6"
                                        >
                                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                                                <path
                                                    d="M11 1C6 1 1.73 4.11 0 8.5c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C20.27 4.11 16 1 11 1zM11 13a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                                                    stroke="#1A1A1A"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                        </button>
                                    }
                                />

                                {/* Remember Me */}
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    label="ログイン状態を記憶する"
                                />
                            </div>
                        </div>

                        {/* Login Button and Forgot Password */}
                        <div className="space-y-8 text-center">
                            <Button
                                variant="secondary"
                                size="large"
                                onClick={() => console.log('Login clicked')}
                            >
                                ログイン
                            </Button>

                            <p className="text-base text-neutral-500">
                                パスワードを忘れた方はこちら
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
