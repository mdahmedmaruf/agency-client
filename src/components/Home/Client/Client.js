import React from 'react';
import slack from '../../../images/slack.png';
import google from '../../../images/google.png';
import uber from '../../../images/uber.png';
import netflix from '../../../images/netflix.png';
import airbnb from '../../../images/airbnb.png';

const Client = () => {
    return (
        <section className="client-section">
            <div className="container">
                <div className="row">
                    <div className="client-images">
                        <div className="client-single-image">
                            <img src={slack} alt="slack"/>
                        </div>
                        <div className="client-single-image">
                            <img src={google} alt="google"/>
                        </div>
                        <div className="client-single-image">
                            <img src={uber} alt="uber"/>
                        </div>
                        <div className="client-single-image">
                            <img src={netflix} alt="netflix"/>
                        </div>
                        <div className="client-single-image">
                            <img src={airbnb} alt="airbnb"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;