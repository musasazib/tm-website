import React from 'react';
import './AboutAndVideoConsultation.css';

const AboutAndVideoConsultation = () => {
    return (
        <div>
            <div>
                <div className="row">
                    <div>
                        <h1 className='about-title'>About Us</h1>
                        <p className='about-video-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                            industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="https://i.ibb.co/CKV3QKm/Group-3.png" alt="" className="img-fluid rounded img-style" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p className='about-video-details'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                            industry. Lorem Ipsum has been the industry's standard dummy text <br />
                            ever since the 1500s, when an unknown printer took a galley of type <br />
                            and scrambled it to make a type specimen book. It has survived not <br />
                            only five centuries, but also the leap into electronic typesetting, <br />
                            remaining essentially unchanged. It was popularised in the 1960s with <br />
                            the release of Letraset sheets containing Lorem Ipsum passages, and <br />
                            more recently with desktop publishing software like Aldus PageMaker <br />
                            including versions of Lorem Ipsum
                            <br />
                            <button className="about-video-btn-style">Read More</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <h1 className='video-title'>Video Consultation from the Best doctors</h1>
                <p className='about-video-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard</p>
                <div className="col-12 col-md-6">
                    <p className='about-video-details video-details-style'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                        industry. Lorem Ipsum has been the industry's standard dummy text ever <br />
                        since the 1500s, when an unknown printer took a galley of type and <br />
                        scrambled it to make a type specimen book. It has survived not only five <br />
                        centuries, but also the leap into electronic typesetting, remaining <br />
                        essentially unchanged. It was popularised in the 1960s with the release of <br />
                        Letraset sheets containing Lorem Ipsum passages, and more recently with <br />
                        desktop publishing software like Aldus PageMaker including versions of <br />
                        Lorem Ipsum.
                        <br />
                        <button className="about-video-btn-style">Read More</button>
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src="https://i.ibb.co/LrVf192/video-call-image.png" alt="" className="img-fluid rounded video-style" />
                </div>
            </div>
        </div>
    );
};

export default AboutAndVideoConsultation;