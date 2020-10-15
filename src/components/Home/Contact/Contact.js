import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="section-title">Let us handle your <br/> project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Your message" ></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark px-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;