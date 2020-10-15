import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Contact from '../Contact/Contact';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Client/>
            <Services/>
            <Works/>
            <FeedBack/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;