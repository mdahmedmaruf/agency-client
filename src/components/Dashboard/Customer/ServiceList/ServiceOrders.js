import React, { useEffect, useState } from 'react';
import ServiceOrderDetails from './ServiceOrderDetails';

const ServiceOrders = () => {
    const [serviceOrders, setServiceOrders] = useState([]);
    
    useEffect(() => {
        fetch('https://sheltered-savannah-44283.herokuapp.com/AllOrderLists')
        .then(res => res.json())
        .then(data => setServiceOrders(data));
    }, []);

    return (
        <div className="service-orders">
            <div className="container">
                <div className="row mx-3">
                    {
                        serviceOrders.map(serviceOrder => <ServiceOrderDetails serviceOrder={serviceOrder} key={serviceOrder.name} />)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ServiceOrders;