import React from 'react';
import { Advertisements } from '../Advertisements/Advertisements';
import { Banner } from '../Banner/Banner';
import { Categories } from '../Categories/Categories';
import { Newsletter } from '../Newsletter/Newsletter';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertisements/>
            <Categories/>
            {/* <Newsletter/> */}
            <Reviews/>
        </div>
    );
};

export default Home;