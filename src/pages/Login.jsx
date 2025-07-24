import React, { useState } from 'react';
import logoText from '../assets/icon/logo_text.png';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Check if both inputs are filled
    const isFormValid = email.trim() !== '' && password.trim() !== '';

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
                                <p className="text-base text-secondary leading-relaxed">
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
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="パスワード"
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
                                variant={isFormValid ? 'active' : 'default'}
                            >
                                ログイン
                            </Button>

                            <p className="text-sm text-neutral-500 cursor-pointer hover:text-accent transition-colors underline underline-offset-2">
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
