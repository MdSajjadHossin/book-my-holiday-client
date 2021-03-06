import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = `https://floating-basin-70468.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services">
            <h2 style={{overflow:'hidden'}}>Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id
                        }
                        service={service}
                    ></Service>
                    )
                    
                }
            </div>
        </div>
    );
};

export default Services;