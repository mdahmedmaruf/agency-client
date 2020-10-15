import React, { useEffect, useState } from 'react';
import DashboardNav from '../../DashboardCommon/DashboardNav';
import DashboardSidebar from '../../DashboardCommon/DashboardSidebar';
import CustomerOrderList from './CustomerOrderList';

const OrderServiceLists = () => {
    const [orderLists, setOrderLists] = useState([]);
    
    useEffect(() => {
        fetch('https://sheltered-savannah-44283.herokuapp.com/AllOrderLists')
        .then(res => res.json())
        .then(data => setOrderLists(data));
    }, []);


    return (
        <>
        <DashboardNav/>
        <div className="row">
            <div className="col-md-3">
                <DashboardSidebar/>
            </div>
            <div className="col-md-9 dashboard-content">
                <h4 className="mt-5 mb-4 mx-5">All Service Order Lists</h4>
                <table className="service-order-list">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          orderLists.map(orderList => <CustomerOrderList orderList={orderList} key={orderList.name} />) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default OrderServiceLists;