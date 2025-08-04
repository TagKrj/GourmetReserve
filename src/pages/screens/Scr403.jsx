import React, { useRef, useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepHeader from '../../components/StepHeader';
import ButtonPrimary from '../../components/ButtonPrimary';
import Input from '../../components/Input';
import arrowLeft from '../../assets/icon/arrow-left.svg';
import arrowRight from '../../assets/icon/arrow-right.svg';
import courseData from '../../constants/courseData';

const CourseAvailabilityPage = () => {
    const fileInputRef = useRef(null);
    const courseTableScrollRef = useRef(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [availabilityData, setAvailabilityData] = useState({});

    // Calculate the current month and year
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

    // Function to get days in the current month
    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysCount = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const days = [];
        for (let i = 1; i <= daysCount; i++) {
            const date = new Date(year, month, i);
            // Only include dates from today onward
            if (date >= today) {
                const dateString = date.toISOString().split('T')[0];
                days.push({
                    day: i,
                    date: date,
                    dateString: dateString,
                    isHoliday: courseData.holidays && courseData.holidays[dateString] ? courseData.holidays[dateString] : null
                });
            }
        }
        setDaysInMonth(days);

        // Process availability data for the current month
        const monthData = {};
        courseData.courses.forEach(course => {
            days.forEach(day => {
                const key = `${course.id}-${day.dateString}`;
                monthData[key] = course.availability[day.dateString] || false;
            });
        });
        setAvailabilityData(monthData);
    }, [currentDate]);

    // Toggle course availability for a specific date
    const toggleAvailability = (courseId, dateString) => {
        const key = `${courseId}-${dateString}`;
        setAvailabilityData(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };


    // Check if a course is available on a specific date
    const isAvailable = (courseId, dateString) => {
        const key = `${courseId}-${dateString}`;
        return availabilityData[key] || false;
    }; return (
        <div className="container mx-auto p-6">
            <MainLayout
                leftText="コースの利用可能日"
                leftTextBottom="コース毎に予約可能日の設定・管理が行えます。"
                leftTextBottom2="予約受付ができない日がある場合は、チェックをはずして下さい。"
                mainContent={
                    <div className="px-15 py-10 space-y-10">
                        {/* Month/Year Selector Box */}
                        <div className="flex justify-start">
                            <div className="flex items-center rounded-[24px] px-4 py-2 w-50 bg-[#F9F8F6]">
                                <button
                                    onClick={prevMonth}
                                    className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                                >
                                    <img src={arrowLeft} alt="Previous Month" className="w-4 h-4" />
                                </button>

                                <div className="flex-1 text-center font-bold">
                                    {monthYear}
                                </div>

                                <button
                                    onClick={nextMonth}
                                    className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                                >
                                    <img src={arrowRight} alt="Next Month" className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Course Availability Table */}
                        <div className="flex items-center justify-end space-x-4 mb-5 ">
                            <div
                                className='w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border-2 border-gray-200 bg-white hover:bg-gray-100'
                                onClick={() => {
                                    if (courseTableScrollRef.current) {
                                        courseTableScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                                    }
                                }}
                            >
                                <img src={arrowRight} alt="" style={{
                                    width: '10px', height: '10px', transform: 'rotate(180deg)'
                                }} />
                            </div>
                            <div
                                className='w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border-2 border-gray-200 bg-white hover:bg-gray-100'
                                onClick={() => {
                                    if (courseTableScrollRef.current) {
                                        courseTableScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                                    }
                                }}
                            >
                                <img src={arrowRight} alt="" style={{
                                    width: '10px', height: '10px', color: '#1A1A1A'
                                }} />
                            </div>
                        </div>

                        <div className=" overflow-x-auto flex border border-gray-200 ">
                            <table className="min-w-[300px] border-collapse">
                                <thead>
                                    <tr className="bg-[#F9F8F6]">
                                        <th className="p-4 border border-gray-200 text-center text-gray-400 font-medium w-24 h-20 text-xs">日付</th>
                                        <th className="p-4 border border-gray-200 text-center text-gray-400 font-medium w-40 text-xs">日付／コース名</th>
                                        {/* {courseData.courses.map(course => (
                                            <th key={course.id} className="p-4 border border-gray-200 text-center text-gray-400 font-medium w-32">
                                                <div className="text-xs line-clamp-2">{course.name}</div>
                                            </th>
                                        ))} */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {daysInMonth.map(day => {
                                        const dayOfWeek = day.date.getDay();

                                        return (
                                            <tr key={day.dateString} className={day.isHoliday ? "bg-[rgba(227,90,10,0.1)]" : ""}>
                                                <td className="p-4 border border-gray-200 text-center h-15">
                                                    {day.isHoliday && (
                                                        <div className="inline-block px-2 py-0 border-2 border-orange-400 text-orange-500 rounded-md" title={day.isHoliday}>
                                                            祝日
                                                        </div>
                                                    )}
                                                </td>
                                                <td className={`p-4 border border-gray-200 text-center font-medium text-gray-500 h-15`}>
                                                    {day.date.toLocaleDateString('ja-JP', { month: '2-digit', day: '2-digit' }).replace('/', '/')}
                                                    <span className="ml-1">{['日', '月', '火', '水', '木', '金', '土'][dayOfWeek]}</span>
                                                </td>

                                                {/* {courseData.courses.map(course => (
                                                    <td key={`${course.id}-${day.dateString}`} className="p-4 border border-gray-200 text-center">
                                                        <label className="inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                className="w-5 h-5 text-[#E35A0A] bg-gray-100 border-gray-300 rounded focus:ring-[#E35A0A] cursor-pointer accent-[#E35A0A]"
                                                                checked={isAvailable(course.id, day.dateString)}
                                                                onChange={() => toggleAvailability(course.id, day.dateString)}
                                                            />
                                                            <span className={`ml-2 font-medium text-gray-400`}>
                                                                {isAvailable(course.id, day.dateString) ? 'OK' : 'NG'}
                                                            </span>
                                                        </label>
                                                    </td>
                                                ))} */}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className='w-full overflow-x-auto scroll-hidden' ref={courseTableScrollRef}>
                                <table className="min-w-[400px] border-collapse overflow-x-auto">
                                    <thead>
                                        <tr className="bg-[#F9F8F6]">
                                            {courseData.courses.map(course => (
                                                <th key={course.id} className="p-4 border border-gray-200 text-center text-gray-400 font-medium w-32 h-20">
                                                    <div className="text-xs line-clamp-2" title={course.name}>{course.name}</div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {daysInMonth.map(day => {
                                            return (
                                                <tr key={day.dateString} className={day.isHoliday ? "bg-[rgba(227,90,10,0.1)]" : ""}>
                                                    {courseData.courses.map(course => (
                                                        <td key={`${course.id}-${day.dateString}`} className="p-4 border border-gray-200 text-center min-w-[160px] h-15">
                                                            <label className="inline-flex items-center cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-5 h-5 text-[#E35A0A] bg-gray-100 border-gray-300 rounded focus:ring-[#E35A0A] cursor-pointer accent-[#E35A0A]"
                                                                    checked={isAvailable(course.id, day.dateString)}
                                                                    onChange={() => toggleAvailability(course.id, day.dateString)}
                                                                />
                                                                <span className={`ml-2 font-medium text-gray-400`}>
                                                                    {isAvailable(course.id, day.dateString) ? 'OK' : 'NG'}
                                                                </span>
                                                            </label>
                                                        </td>
                                                    ))}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* Save Button */}
                        <div className="flex justify-center mt-6">
                            <ButtonPrimary >
                                予約可能日を確定する
                            </ButtonPrimary>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default CourseAvailabilityPage;