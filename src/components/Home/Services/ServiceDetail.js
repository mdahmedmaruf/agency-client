import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="card service-card border-0 my-4">
                <div className="services-single-image">
                <img src={`data:image/png;base64,${service.image.img}`} className="card-img-top" alt="single-service"/>
                </div>
                <div className="card-body">
                    <h4 className="card-title"> {service.name} </h4>
                    <p className="card-text"> {service.description} </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;