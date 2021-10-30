import React from 'react';
import './FamousPlaces.css';
import { Carousel } from 'react-bootstrap';
import dubai from '../../Images/slide2-2.jpg';
import italy from '../../Images/slide2-3.jpg';
import landon from '../../Images/slide2-4.jpg';
import maldivs from '../../Images/slide2-5.jpg';
import singapur from '../../Images/slide2-6.jpg';
import falls from '../../Images/slide2-7.jpg';

const FamousPlaces = () => {
    return (
        <>
        <div id="famousPlaces" className="w-auto m-3 ">
        <h2 className=" mt-3 bg-primary ">Famous Palces You Can Explore</h2>
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={landon}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="text-warning">London Bridge</h3>
                <p>London Bridge is a bridge in Lake Havasu City, Arizona. It was originally built in the 1830s and formerly spanned the River Thames in London, England.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={maldivs}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-warning">Vist Maldives</h3>
                <p>Unbeatable beaches, unmatched luxury and a very happening underwater world makes Maldives worth it all! With 1200 islands and 26 atolls, this island country holds a great allure for tourists across the globe for its exotic islands.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={dubai}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-warning">Dubai</h3>
                <p>Dubai is famous for sightseeing attractions such as the Burj Khalifa (the world's tallest building) and shopping malls that come complete with mammoth aquariums and indoor ski slopes.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={italy}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-warning">Italy</h3>
                <p>As the birthplace of the Roman Empire and the Renaissance, it's not surprising that Italy should be so rich in masterpieces of art and architecture, or that it should have more UNESCO World Heritage cultural sites than any other country in the world.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={falls}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-warning">Niagara Falls</h3>
                <p>Open 365 days a year, Niagara Falls State Park has awe-inspiring scenery! It also features thrilling attractions, interactive exhibits, miles of hiking trails, and delectable dining options in a family-friendly environment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 rounded-3"
                src={singapur}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-warning">Singapore</h3>
                <p>Singapore has been described as a playground for the rich, and it's true that the small city-state does have a certain sheen of wealth. But Singapore offers more than just high-end shopping malls, luxury hotels, and fine dining. There is also a vibrant history and diverse ethnic quarters to discover, along with many family-friendly attractions and lovely public spaces that make exploring this slightly futuristic city worthwhile.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </>
    );
};

export default FamousPlaces;