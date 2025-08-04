import React, { useRef, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepHeader from '../../components/StepHeader';
import ButtonPrimary from '../../components/ButtonPrimary';
import Input from '../../components/Input';
import arrowLeft from '../../assets/icon/arrow-left.svg';
import arrowRight from '../../assets/icon/arrow-right.svg';

const CustomerRegistrationPage = () => {
    const fileInputRef = useRef(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    // Format the current month and year
    const monthYear = currentDate.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit'
    }).replace('/', '年') + '月';

    // Navigate to previous month
    const prevMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() - 1);
        setCurrentDate(newDate);
    };

    // Navigate to next month
    const nextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + 1);
        setCurrentDate(newDate);
    };

    return (
        <div className="container mx-auto p-6">
            <MainLayout
                leftText="コースの利用可能日"
                leftTextBottom="コース毎に予約可能日の設定・管理が行えます。"
                leftTextBottom2="予約受付ができない日がある場合は、チェックをはずして下さい。"
                mainContent={
                    <div className="p-8 space-y-10">
                        {/* Month/Year Selector Box */}
                        <div className="flex justify-start">
                            <div className="flex items-center rounded-[24px] px-4 py-2 w-50 bg-[#F9F8F6]">
                                <button
                                    onClick={prevMonth}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <img src={arrowLeft} alt="Previous Month" className="w-4 h-4" />
                                </button>

                                <div className="flex-1 text-center font-bold">
                                    {monthYear}
                                </div>

                                <button
                                    onClick={nextMonth}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <img src={arrowRight} alt="Next Month" className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default CustomerRegistrationPage;