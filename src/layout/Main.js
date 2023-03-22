import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Main = () => {
    return (
        <div className="text-[#111827]">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;