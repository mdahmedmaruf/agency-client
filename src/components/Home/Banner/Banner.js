import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../images/Frame.png';
import NavBar from '../HomeNav/NavBar';
import { motion } from 'framer-motion';

const Banner = () => {
    const containerVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { delay: 1.2, duration: 1.2 }
        }
      };
    return (
        <section className="banner-section">
            <NavBar/>
            <motion.div className="container pt-5 mt-3"
            variants={ containerVariants }
            initial='hidden'
            animate='visible'
            >
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
            </motion.div>
        </section>
    );
};

export default Banner;