import React from 'react';
import Navbar from '../Main/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Main/Footer';

const LoginLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayOut;