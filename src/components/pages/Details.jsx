import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Navbar from '../Main/Navbar';
import Footer from '../Main/Footer';

const Details = () => {
    // const {id}=useParams();
    return (
        <div>
           <Navbar></Navbar>
           <div className='min-h[cal(100vh-50px)]'>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Details;