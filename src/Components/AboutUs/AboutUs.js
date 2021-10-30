import React from 'react';
import { Button } from 'react-bootstrap';
import aboutus from '../../Images/aboutus.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
        <h3 className="mt-3">About Us</h3>
        <div id="about" className ="about-us">
            <div>
            <img className="about-us-img"  src={aboutus} alt="" />
            </div>
            <div  className="m-5 p-5 text-light bg-danger">
                <h3>Book</h3>
                <h2>My Holiday</h2>
                <p>We are  Book My Holiday Group with over 45,100 employees and over 400 million members, making it one of the leading online travel agencies in the world.With more than 1.4 million hotels in 200 countries and regions, we've built an extensive hotel network to give our customers a fantastic choice of accommodation. Our far-reaching flight network has over 2 million individual flight routes connecting more than 5,000 cities around the globe.</p>
                <div className="mb-2">
                <Button  className="bg-dark rounded-2 border-0 p-2 text-light fw-bold">
                    Learn More
                </Button>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default AboutUs;