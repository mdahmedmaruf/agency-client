import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../images/Frame.png';
import NavBar from '../HomeNav/NavBar';

const Banner = () => {
    return (
        <section className="banner-section">
            <NavBar/>
            <div className="container pt-5 mt-3">
                <div className="row">
                    <div className="col-md-6 content p-3">
                        <div className="card bg-transparent border-0">
                            <div className="card-body banner-car">
                                <h1 className="card-title banner-card-title">Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/order" className="btn btn-dark px-5">Hire Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 banner-frame">
                        <img className="" src={frame} alt="frame"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;