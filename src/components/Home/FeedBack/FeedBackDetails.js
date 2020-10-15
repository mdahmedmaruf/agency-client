import React from 'react';

const FeedBackDetails = ({feedback}) => {
    return (
        <div className="col-md-4 my-3">
            <div className="card px-3 py-3" style={{maxWidth: '540px'}}>
                <div className="row no-gutters">
                    <div className="col-md-3">
                    <img src={feedback.photo} className="card-img rounded-circle" alt=""/>
                    </div>
                    <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title"> {feedback.name} </h5>
                        <p className="card-text"> {feedback.nameDesignation} </p>
                    </div>
                    </div>
                </div>
                <p className="card-text text-black-50"> {feedback.description} </p>
            </div>
        </div>
    );
};

export default FeedBackDetails;