import React from 'react';
import DashboardNav from '../../DashboardCommon/DashboardNav';
import DashboardSidebar from '../../DashboardCommon/DashboardSidebar';
import AddServiceForm from './AddServiceForm';

const AddService = () => {
    return (
        <>
            <DashboardNav/>
            <div className="row">
                <div className="col-md-3">
                    <DashboardSidebar/>
                </div>
                <div className="col-md-9 dashboard-content">
                    <h4 className="my-5 mx-5">Add Services</h4>
                    <AddServiceForm/>
                </div>
            </div>
        </>
    );
};

export default AddService;