import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
    return (
        <div>
            <h1 className='choose-title'>Why Choose TM?</h1>
            <p className='choose-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum has been the industry's standard</p>
            <div className="row">
                <div className="col-6 col-md-3 fist-item">
                    <img src="https://i.ibb.co/7CD7bmD/Vector.png" alt="" />
                    <h3 className='item-title'>Easy to Use</h3>
                    <p className='item-description'>Lorem Ipsum is simply dummy <br />
                        text of the printing and <br />
                        typesetting industry. Lorem Ipsum <br />
                        has been the industry's standard</p>
                </div>
                <div className="col-6 col-md-3">
                    <img src="https://i.ibb.co/b6MfCRj/carbon-time.png" alt="" />
                    <h3 className='item-title'>24 / 7 Service</h3>
                    <p className='item-description'>Lorem Ipsum is simply dummy <br />
                        text of the printing and <br />
                        typesetting industry. Lorem Ipsum <br />
                        has been the industry's standard</p>
                </div>
                <div className="col-6 col-md-3">
                    <img src="https://i.ibb.co/bzbwcfD/healthicons-doctor-outline.png" alt="" />
                    <h3 className='item-title'>Expert Doctors</h3>
                    <p className='item-description'>Lorem Ipsum is simply dummy <br />
                        text of the printing and <br />
                        typesetting industry. Lorem Ipsum <br />
                        has been the industry's standard</p>
                </div>
                <div className="col-6 col-md-3">
                    <img src="https://i.ibb.co/8gZckhD/codicon-workspace-trusted.png" alt="" />
                    <h3 className='item-title'>Trusted</h3>
                    <p className='item-description'>Lorem Ipsum is simply dummy <br />
                        text of the printing and <br />
                        typesetting industry. Lorem Ipsum <br />
                        has been the industry's standard</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;