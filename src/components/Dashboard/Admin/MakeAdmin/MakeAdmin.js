import React from 'react';
import DashboardNav from '../../DashboardCommon/DashboardNav';
import DashboardSidebar from '../../DashboardCommon/DashboardSidebar';
import MakeAdminForm from './MakeAdminForm';

const MakeAdmin = () => {
    return (
        <>
            <DashboardNav/>
            <div className="row">
                <div className="col-md-3">
                    <DashboardSidebar/>
                </div>
                <div className="col-md-9 dashboard-content">
                    <h4 className="my-5 mx-5">Add Admin</h4>
                    <MakeAdminForm/>
                </div>
            </div>
        </>
    );
};

export default MakeAdmin;