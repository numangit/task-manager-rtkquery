import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Main = () => {
    return (
        <body class="text-[#111827]">
            <Navbar />
            <Outlet />
        </body>
    );
};

export default Main;