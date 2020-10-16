import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceDetail = ({service}) => {
    const history = useHistory();
    const handleOrder = (_id) => {
        history.push(`/order/${_id}`);
    };
    return (
        <div className="col-md-4">
            <motion.div onClick={() => handleOrder(service._id)} className="card service-card border-0 my-4 py-3 px-2" role="button"
                whileHover = {{scale: 1.2, backgroundColor: '#f7f7f7', zIndex: 1}}
                transition = {{type: 'spring', stiffness: 400}}
            >
                {/* <Link className="text-dark text-decoration-none" to="/order"> */}
                    <div className="services-single-image">
                    <img src={`data:image/png;base64,${service.image.img}`} className="card-img-top" alt="single-service"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title"> {service.name} </h4>
                        <p className="card-text"> {service.description} </p>
                    </div>
                {/* </Link> */}
            </motion.div>
        </div>
    );
};

export default ServiceDetail;