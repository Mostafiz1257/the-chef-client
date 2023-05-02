import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import HeaderProfile from '../pages/HeaderProfile';
import CardSection from '../pages/CardSection';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <HeaderProfile></HeaderProfile>
            <CardSection></CardSection>
            <Footer></Footer>
        </div>
    );
};

export default Main;