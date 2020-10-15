import React from 'react';
import DashboardNav from '../../DashboardCommon/DashboardNav';
import DashboardSidebar from '../../DashboardCommon/DashboardSidebar';
import ReviewsForm from './ReviewsForm';

const Reviews = () => {
    return (
        <>
            <DashboardNav/>
            <div className="row">
                <div className="col-md-3">
                    <DashboardSidebar/>
                </div>
                <div className="col-md-9 dashboard-content">
                    <h4 className="mt-5 mb-4 mx-5">Add a Review</h4>
                    <ReviewsForm/>
                </div>
            </div>
        </>
    );
};

export default Reviews;