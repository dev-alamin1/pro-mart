import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Pages/Shared/Footer/Footer';

import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <div className='md:px-20 px-10'>
                <Navbar/>
                <div className='flex'>
                    <div className='w-1/2 bg-slate-400'>
                        <Outlet/>
                    </div>

                    <div className='bg-red-400'>
                        category
                    </div>
                </div>

               <Footer/>
            </div>
        </div>
    );
};

export default Main;