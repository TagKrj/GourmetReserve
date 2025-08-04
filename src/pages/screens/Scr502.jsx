import React, { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import ButtonPrimary from '../../components/ButtonPrimary';
import iconDown from '../../assets/icon/down.svg';

const CustomerRegistrationPage = () => {
    const [customerData, setCustomerData] = useState({
        lastName: '',
        firstName: '',
        lastNameKana: '',
        firstNameKana: '',
        phone: '',
        email: '',
        zipCode: '',
        prefecture: '',
        address: '',
        emailConsent: '配信可否を選択',
        customerMemo: '',
        gender: '選択してください',
        birthYear: '',
        birthMonth: '',
        birthDay: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);

    // Validate form when customer data changes
    useEffect(() => {
        // Basic validation - at least one of name fields must be filled
        const isNameValid = customerData.lastName.trim() !== '' || customerData.firstName.trim() !== '';
        setIsFormValid(isNameValid);
    }, [customerData]);

    // Handle form submission
    const handleSubmit = () => {
        if (!isFormValid) return;

        // Here you would typically send the data to your backend
        console.log('Form submitted:', customerData);

        // Show success message or redirect
        alert('顧客情報が登録されました');
    };

    // 年月日選択用のドロップダウン
    const dateOptions = {
        year: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
        month: Array.from({ length: 12 }, (_, i) => i + 1),
        day: Array.from({ length: 31 }, (_, i) => i + 1)
    };

    return (
        <div className="container mx-auto p-6">
            <MainLayout
                leftText="顧客登録"
                mainContent={
                    <div className="p-8 space-y-10">
                        {/* Customer details section */}
                        <div className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Left column - Customer info */}
                                <div className="md:col-span-2 space-y-8">
                                    {/* Header section with title and line */}
                                    <div>
                                        <h2 className="text-lg font-bold">基本情報</h2>
                                        <div className="border-t border-gray-200 mt-3"></div>
                                    </div>
                                    {/* Name field */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                            <div className="md:col-span-1">
                                                <div className="flex flex-col h-full justify-center">
                                                    <label className="block text-neutral-800 text-[15px] font-medium">名前</label>
                                                    <div className="mt-1 bg-orange-50/50 rounded px-3 py-1 inline-block">
                                                        <span className="text-xs text-red-600">いずれか必須</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:col-span-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                                    {/* First name field */}
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            className="w-full h-10 px-5 border-2 bg-[#CA3D27]/10 border-[#D32F2F] rounded-md focus:outline-none focus:border-[#E35A0A] text-gray-700"
                                                            placeholder="青空"
                                                            value={customerData.lastName}
                                                            onChange={(e) => setCustomerData({ ...customerData, lastName: e.target.value })}
                                                        />
                                                    </div>
                                                    {/* Last name field */}
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            className="w-full h-10 px-5 border-2 bg-[#CA3D27]/10 border-[#D32F2F] rounded-md focus:outline-none focus:border-[#E35A0A] text-gray-700"
                                                            placeholder="太陽"
                                                            value={customerData.firstName}
                                                            onChange={(e) => setCustomerData({ ...customerData, firstName: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Name kana fields */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-2">
                                                    {/* First name kana field */}
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            className="w-full h-10 px-5 border-2 bg-[#CA3D27]/10 border-[#D32F2F] rounded-md focus:outline-none focus:border-[#E35A0A] text-gray-700"
                                                            placeholder="アオゾラ"
                                                            value={customerData.lastNameKana}
                                                            onChange={(e) => setCustomerData({ ...customerData, lastNameKana: e.target.value })}
                                                        />
                                                    </div>
                                                    {/* Last name kana field */}
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            className="w-full h-10 px-5 border-2 bg-[#CA3D27]/10 border-[#D32F2F] rounded-md focus:outline-none focus:border-[#E35A0A] text-gray-700"
                                                            placeholder="タロウ"
                                                            value={customerData.firstNameKana}
                                                            onChange={(e) => setCustomerData({ ...customerData, firstNameKana: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Birthday fields */}
                                    <div className="space-y-2">
                                        <label className="block text-neutral-800 text-[15px] font-medium">生年月日</label>
                                        <div className="flex gap-4">
                                            <div className="relative w-32">
                                                <select
                                                    className="appearance-none border border-gray-200 rounded-md w-full h-10 px-4 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                                                    value={customerData.birthYear}
                                                    onChange={(e) => setCustomerData({ ...customerData, birthYear: e.target.value })}
                                                >
                                                    <option value="">年</option>
                                                    {dateOptions.year.map(year => (
                                                        <option key={year} value={year}>{year}</option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <img src={iconDown} alt="down" className="h-4 w-4" />
                                                </div>
                                            </div>
                                            <div className="relative w-32">
                                                <select
                                                    className="appearance-none border border-gray-200 rounded-md w-full h-10 px-4 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                                                    value={customerData.birthMonth}
                                                    onChange={(e) => setCustomerData({ ...customerData, birthMonth: e.target.value })}
                                                >
                                                    <option value="">月</option>
                                                    {dateOptions.month.map(month => (
                                                        <option key={month} value={month}>{month}</option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <img src={iconDown} alt="down" className="h-4 w-4" />
                                                </div>
                                            </div>
                                            <div className="relative w-32">
                                                <select
                                                    className="appearance-none border border-gray-200 rounded-md w-full h-10 px-4 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                                                    value={customerData.birthDay}
                                                    onChange={(e) => setCustomerData({ ...customerData, birthDay: e.target.value })}
                                                >
                                                    <option value="">日</option>
                                                    {dateOptions.day.map(day => (
                                                        <option key={day} value={day}>{day}</option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <img src={iconDown} alt="down" className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gender field */}
                                    <div className="space-y-2">
                                        <label className="block text-neutral-800 text-[15px] font-medium">性別</label>
                                        <div className="relative w-[230px]">
                                            <select
                                                className="appearance-none border border-gray-200 rounded-md w-full h-10 px-5 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                                                value={customerData.gender}
                                                onChange={(e) => setCustomerData({ ...customerData, gender: e.target.value })}
                                            >
                                                <option>選択してください</option>
                                                <option>男性</option>
                                                <option>女性</option>
                                                <option>その他</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                                <img src={iconDown} alt="down" className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone field */}
                                    <div className="space-y-2">
                                        <label className="block text-neutral-800 text-[15px] font-medium">電話番号</label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                className="w-full max-w-[300px] h-10 px-5 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-gray-700"
                                                placeholder="031234XXXX"
                                                value={customerData.phone}
                                                onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Email & consent field */}
                                    <div className="space-y-2">
                                        <label className="block text-neutral-800 text-[15px] font-medium">メールアドレス</label>
                                        <div className="flex gap-4 flex-col md:flex-row">
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    className="w-full max-w-[300px] h-10 px-5 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-gray-700"
                                                    placeholder="taro1@restaurant-board.com"
                                                    value={customerData.email}
                                                    onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="relative w-[240px]">
                                                <select
                                                    className="appearance-none border border-gray-200 rounded-md w-full h-10 px-5 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                                                    value={customerData.emailConsent}
                                                    onChange={(e) => setCustomerData({ ...customerData, emailConsent: e.target.value })}
                                                >
                                                    <option>配信可否を選択</option>
                                                    <option>配信可</option>
                                                    <option>配信不可</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                                    <img src={iconDown} alt="down" className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Address fields */}
                                    <div className="space-y-2">
                                        <label className="block text-neutral-800 text-[15px] font-medium">住所</label>
                                        <div className="flex gap-4 mb-2 flex-col md:flex-row">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="w-full md:w-[260px] h-10 px-5 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-gray-700"
                                                    placeholder="1006640"
                                                    value={customerData.zipCode}
                                                    onChange={(e) => setCustomerData({ ...customerData, zipCode: e.target.value })}
                                                />
                                            </div>
                                            <div className="relative w-full md:w-[180px]">
                                                <select
                                                    className="appearance-none border border-gray-200 rounded-md w-full h-10 px-5 text-gray-500 leading-tight focus:outline-none focus:border-blue-500"
                                                    value={customerData.prefecture}
                                                    onChange={(e) => setCustomerData({ ...customerData, prefecture: e.target.value })}
                                                >
                                                    <option value="sdssds">sdssds</option>
                                                    <option value="東京都">東京都</option>
                                                    <option value="大阪府">大阪府</option>
                                                    <option value="神奈川県">神奈川県</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                                    <img src={iconDown} alt="down" className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full h-10 px-5 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 text-gray-700"
                                                placeholder="千代田区丸の内1-9-2 グラントウキョウサウスタワー"
                                                value={customerData.address}
                                                onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right column - Customer memo */}
                                <div className="bg-[#FBD0B2]/50 p-4 rounded-lg">
                                    <h3 className="text-lg font-light text-neutral-800 mb-3">お客様メモ</h3>
                                    <textarea
                                        className="w-full h-[250px] p-4 border border-gray-200 rounded-lg bg-gray-50 resize-none focus:outline-none focus:border-blue-500"
                                        value={customerData.customerMemo}
                                        onChange={(e) => setCustomerData({ ...customerData, customerMemo: e.target.value })}
                                        maxLength={1000}
                                    ></textarea>
                                    <div className="flex justify-end mt-2 text-gray-500 text-sm">
                                        <span>{customerData.customerMemo.length} / 1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex justify-center gap-4 mt-10">
                            <ButtonPrimary variant="outline">
                                キャンセル
                            </ButtonPrimary>
                            <ButtonPrimary
                                variant="primary"
                                className={!isFormValid ? "bg-gray-300 text-gray-500 cursor-not-allowed" : ""}
                                onClick={handleSubmit}
                                disabled={!isFormValid}
                            >
                                この内容で登録する
                            </ButtonPrimary>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default CustomerRegistrationPage;