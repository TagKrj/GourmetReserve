import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar';
import Header from '../layouts/Header';
import Scr503 from '../pages/screens/Scr503';
import Scr502 from '../pages/screens/Scr502';
import Scr403 from '../pages/screens/Scr403';


const ScreenRouter = () => (
    <div className="min-h-screen bg-primary flex">
        <Sidebar />
        <div className="flex-1 ml-[240px]">
            <Header />
            <div className="pt-[70px]">
                <Routes>
                    <Route path="/Scr503" element={<Scr503 />} />
                    <Route path="/Scr502" element={<Scr502 />} />
                    <Route path="/Scr403" element={<Scr403 />} />

                    {/* Thêm các màn hình khác nếu cần */}
                </Routes>
            </div>
        </div>
    </div>
);

export default ScreenRouter;