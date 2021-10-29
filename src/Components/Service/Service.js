import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {  serviceId ,serviceImg, name,} = service;
    return (
        <div className="service">
            <img src={serviceImg} alt="" />
            <h3>{name}</h3>
            <Link to={`/booking/${serviceId}`}><button className="btn btn-warning">Book This Service</button></Link>
        </div>
    );
};

export default Service;