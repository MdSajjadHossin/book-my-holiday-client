import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import FamousPlaces from '../FamousPlaces/FamousPlaces';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{overflow:'hidden'}}>
            <Banner></Banner>
            <Services></Services>
            <FamousPlaces></FamousPlaces>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;