import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center py-4">
            <p>copyright Orange labs {(new Date()).getFullYear()}</p>
        </footer>
    );
};

export default Footer;