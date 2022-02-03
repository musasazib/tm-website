import React from 'react';
import './QualifiedDoctor.css';

const QualifiedDoctor = () => {
    return (
        <div>
            <div>
                <h1 className='qualified-doctor-title'>Are You a Qualified & Expert Doctor?</h1>
                <p className='qualified-doctor-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className='row'>
                <div className="col-12 col-md-6">
                    <h3 className='qualified-doctor-details-title'>Be a Part of TM</h3>
                    <p className='qualified-doctor-details'>
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
                </div>
                <div className="col-12 col-md-6 qualified-doctor-bg">
                    <img src="https://i.ibb.co/CbjB4Rn/Group-27.png" alt="" className="img-fluid rounded"/>
                </div>
            </div>
        </div>
    );
};

export default QualifiedDoctor;