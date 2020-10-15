import React, { useEffect, useState } from 'react';
import service from '../../../../images/services/service1.png';

const ServiceOrders = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    
    useEffect(() => {
        fetch('https://sheltered-savannah-44283.herokuapp.com/AllOrderLists')
        .then(res => res.json())
        .then(data => setCustomerOrders(data));
    }, []);

    return (
        <div className="service-orders">
            <div className="container">
                <div className="row mx-3">

                    {
                        customerOrders.map(customerOrder => (
                            <div className="col-md-6" key={customerOrder.name}>
                                <div className="card border-0 rounded-lg my-3 p-4">
                                    <div className="service-image-status">
                                        <div className="customer-service-image">
                                            <img src={service} className="card-img-top" alt="single-service"/>
                                        </div>
                                        <div className="customer-service-status ml-auto">
                                            <p className="bg-warning px-4 py-2 rounded-lg border-0">pending</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title"> {customerOrder.name} </h4>
                                        <p className="card-text"> {customerOrder.details} </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default ServiceOrders;