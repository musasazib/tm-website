import React from 'react';
import './EasySteps.css';

const EasySteps = () => {
    return (
        <div>
            <div>
                <h1 className='easy-step-title'>Only Three Easy Steps to Follow</h1>
                <p className='easy-step-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 easy-step-bg">
                    <img src="https://i.ibb.co/KhBXpD5/pngtree-new-transparent-mobile-mockup-png-image-and-vector-png-image-2632149-1.png" alt="" className="img-fluid rounded easy-step-img" />
                </div>
                <div className="col-12 col-md-6">
                    <div className='easy-steps-details'>
                        <div className='step-number'>
                            <h4>1</h4>
                        </div>
                        <div>
                            <h4 className='easy-step-item-title'>Search the Doctor for Appointment</h4>
                            <p className='easy-step-item-description'>Search your doctor by specialty or doctor name. Choose <br />
                                the right doctor for you by viewing their profile, rating & <br />
                                experience.</p>
                        </div>
                        <div className='step-number'>
                            <h4>2</h4>
                        </div>
                        <div>
                            <h4 className='easy-step-item-title'>Get Doctor Consultation through Video Calling</h4>
                            <p className='easy-step-item-description'>Once you pay the required doctor fee, you will be joined <br />
                                to the queue. Doctor will make a secured video call to do <br />
                                the consultation.</p>
                        </div>
                        <div className='step-number'>
                            <h4>3</h4>
                        </div>
                        <div>
                            <h4 className='easy-step-item-title'>Get Your Prescription</h4>
                            <p className='easy-step-item-description'>Once the video consultation is complete, the doctor will <br />
                                upload the prescription. You can download the <br />
                                prescription immediately or later.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasySteps;