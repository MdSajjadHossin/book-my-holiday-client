import React from 'react';
import { Link } from 'react-router-dom';
import './BookItem.css';

const BookedItem = ({BookedItem}) => {
    const { serviceImg, name, cost, description } = BookedItem;
    return (
        <div className="service">
            <img src={serviceImg} alt="" />
            <h3>{name}</h3>
            <h5>Cost: {cost}</h5>
            <h5>Description: <p>{description}</p></h5>
            <Link><button className="btn btn-warning">Book This Service</button></Link>
        </div>
    );
};

export default BookedItem;