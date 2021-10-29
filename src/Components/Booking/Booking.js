import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BookedItem from './BookedItem';
import './Booking.css';
// import { Link } from 'react-router-dom';


const Booking = () => {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        const url = `https://floating-basin-70468.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [])
    return (
        <div >
            <h2>Our Services</h2>
            <div className="service-container">
                {
                    booking.map(booked => <BookedItem
                        key={booked._id
                        }
                        BookedItem={booked}
                    ></BookedItem>
                    )
                    
                }
            </div>
        </div>
    );
};

export default Booking;