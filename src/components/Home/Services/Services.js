import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://sheltered-savannah-44283.herokuapp.com/AllServices')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <section className="services-section my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center my-5">
                        <h2 className="section-title">Provide awesome <span className="color-green">services</span></h2>
                    </div>
                </div>
                <div className="row">
                {
                    services.map(service => <ServiceDetail service={service} key={service.name}/>)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;