import React from 'react';
import { Advertisements } from '../Advertisements/Advertisements';
import { Banner } from '../Banner/Banner';
import { Categories } from '../Categories/Categories';
import { Newsletter } from '../Newsletter/Newsletter';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertisements/>
            <Categories/>
            <Newsletter/>
            
        </div>
    );
};

export default Home;