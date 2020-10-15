import React from 'react';
import DashboardNav from '../../DashboardCommon/DashboardNav';
import DashoardSidebar from '../../DashboardCommon/DashboardSidebar';
import OrderForm from './OrderForm';

const Order = () => {
    return (
        <>
            <DashboardNav/>
            <div className="row">
                <div className="col-md-3">
                    <DashoardSidebar/>
                </div>
                <div className="col-md-9 dashboard-content">
                    <h4 className="mt-5 mb-4 mx-5">Order</h4>
                    <OrderForm/>
                </div>
            </div>
        </>
    );
};

export default Order;