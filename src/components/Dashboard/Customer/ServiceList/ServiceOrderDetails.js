import React from 'react';

const ServiceOrderDetails = ({serviceOrder}) => {
    return (
        <div className="col-md-6">
            <div className="card border-0 rounded-lg my-3 p-4">
                <div className="service-image-status">
                    <div className="customer-service-image">
                        <img src={`data:image/png;base64,${serviceOrder.image.img}`} className="card-img-top" alt="single-service"/>
                    </div>
                    <div className="customer-service-status ml-auto">
                        <p className="bg-warning px-4 py-2 rounded-lg border-0">pending</p>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title"> {serviceOrder.orderCategory} </h4>
                    <p className="card-text"> {serviceOrder.details}  </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceOrderDetails;