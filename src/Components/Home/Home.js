import React from 'react';
import Banner from '../Banner/Banner';
import FamousPlaces from '../FamousPlaces/FamousPlaces';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <Banner></Banner>
            <Services></Services>
            <FamousPlaces></FamousPlaces>
        </div>
    );
};

export default Home;