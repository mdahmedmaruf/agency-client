import React, { useState, useEffect } from 'react';
import customer from '../../../images/customer-1.png';
import FeedBackDetails from './FeedBackDetails';

const FeedBack = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    
    useEffect(() => {
        fetch('https://sheltered-savannah-44283.herokuapp.com/AllReviews')
        .then(res => res.json())
        .then(data => setFeedbacks(data));
    }, []);

    return (
        <section className="feedback-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center my-4">
                        <h2 className="section-title">Clients <span className="color-green">Feedback</span></h2>
                    </div>
                </div>
                <div className="row">  
                {
                    feedbacks.map(feedback => <FeedBackDetails feedback={feedback} key={feedback.name}/>)
                }    
                </div>
            </div>
        </section>
    );
};

export default FeedBack;