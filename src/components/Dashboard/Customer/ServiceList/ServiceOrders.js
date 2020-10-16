import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ServiceOrderDetails from './ServiceOrderDetails';

const ServiceOrders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceOrders, setServiceOrders] = useState([]);
    
    

    useEffect(() => {
        fetch('https://sheltered-savannah-44283.herokuapp.com/userOrder?email='+loggedInUser.email, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => setServiceOrders(data));
    }, [])

    return (
        <div className="service-orders">
            <div className="container">
                <div className="row mx-3">
                {
                        serviceOrders.length > 0 ?
                        <p className="text-center">You have Placed {serviceOrders.length} Order! </p>
                        :
                        <p className="text-center">You haven't Placed any Order Yet!</p>
                    }
                    {
                        serviceOrders.map(serviceOrder => <ServiceOrderDetails serviceOrder={serviceOrder} key={serviceOrder.name} />)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ServiceOrders;