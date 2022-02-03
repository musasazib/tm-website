import React from 'react';
import './OurService.css';

const OurService = () => {
    return (
        <div>
            <div>
                <h1 className='our-service-title'>Our Services</h1>
                <p className='our-service-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div>
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <img className='our-service-img' src="https://i.ibb.co/wNGGCcN/shape.png" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p className='our-service-details'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                            <br />
                            <button className="our-service-btn-style">Read More</button>
                        </p>
                        <div className='service-link'>
                            <a href="sazib">General Healthcare</a> <br />
                            <a href="sazib">Maternal Healthcare</a> <br />
                            <a href="sazib">Child Healthcare</a> <br />
                            <a href="sazib">Elder Healthcare</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;