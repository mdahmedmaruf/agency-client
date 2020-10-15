import React from 'react';
import Carousel from 'react-elastic-carousel';
import { workslides } from './SlideData';

import { useState } from 'react';

const Works = () => {
    const [slides] = useState(workslides);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];
    
    return (
        <section className="work-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center my-4">
                        <h2 className="text-light section-title">Here are some of <span className="color-green">our works</span></h2>
                    </div>
                </div>
                <div className="row">
                    <Carousel breakPoints={breakPoints} enableAutoPlay>
                        {slides.map(slide => <div key={slide.id}><img src={slide.pic} alt=""/></div>)}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Works;