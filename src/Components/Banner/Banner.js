import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../Images/slide-1.jpg';
import slide2 from '../../Images/slide-2.jpg';
import slide3 from '../../Images/slide-3.jpg';


const Banner = () => {
    return (
        <>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Take A Deep Breath</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Rebond With Your Loved One</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Feel The Nature</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>

    );
};

export default Banner;