import React from 'react';
import AddService from '../Admin/AddService/AddService';
import OrderServiceLists from '../Admin/AdminService/OrderServiceLists';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Order from '../Customer/Order/Order';
import Reviews from '../Customer/Reviews/Reviews';
import ServiceList from '../Customer/ServiceList/ServiceList';

const Dashboard = () => {
    return (
        <div>
            <Order/>
            <ServiceList/>
            <Reviews/>
            <OrderServiceLists/>
            <AddService/>
            <MakeAdmin/>
        </div>
    );
};

export default Dashboard;