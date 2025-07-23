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
                                            className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                                onClick={() => console.log('Login clicked')}
                            >
                                ログイン
                            </Button>

                            <p className="text-base text-neutral-500 cursor-pointer hover:text-accent hover:underline transition-colors">
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
