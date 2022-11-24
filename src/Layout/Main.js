import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Pages/Shared/Footer/Footer';

import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <div className='md:px-20 px-10'>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;