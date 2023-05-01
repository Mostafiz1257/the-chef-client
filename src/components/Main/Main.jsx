import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import HeaderProfile from '../pages/HeaderProfile';

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <HeaderProfile></HeaderProfile>
           
            <Footer></Footer>
        </div>
    );
};

export default Main;