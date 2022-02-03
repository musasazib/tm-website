import React from 'react';
import './ExpertDoctors.css';

const ExpertDoctors = () => {
    return (
        <div>
            <div>
                <h1 className='expert-doctor-title'>Expert & Varified Doctors</h1>
                <p className='expert-doctor-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className='expert-doctor-link left-margin'>
                        <a href="sazib">General Physician</a> <br />
                        <a href="sazib">Pediatrics / Child Care</a> <br />
                        <a href="sazib">Gynaecology</a> <br />
                        <a href="sazib">Neurology / Brain</a> <br />
                        <a href="sazib">Pulmonology / Lungs</a> <br />
                        <a href="sazib">Herbal medicine</a> <br />
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className='expert-doctor-link'>
                        <a href="sazib">Gastroenterology</a> <br />
                        <a href="sazib">Cardiology / Heart</a> <br />
                        <a href="sazib">Ophthalmology / Eye</a> <br />
                        <a href="sazib">Dentistry / Dental Care</a> <br />
                        <a href="sazib">Endocrinology / Diabetes</a> <br />
                        <a href="sazib">Occupational therapy</a> <br />
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className='expert-doctor-link'>
                        <a href="sazib">Occupational therapy</a> <br />
                        <a href="sazib">Obstetrics</a> <br />
                        <a href="sazib">ENT / Ear, Nose and Throat</a> <br />
                        <a href="sazib">Parasitology</a> <br />
                        <a href="sazib">Podiatry</a> <br />
                        <a href="sazib">Oncology</a> <br />
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className='expert-doctor-link'>
                        <a href="sazib">Psychiatry</a> <br />
                        <a href="sazib">Rheumatology</a> <br />
                        <a href="sazib">Urology</a> <br />
                        <a href="sazib">Chiropractic</a> <br />
                        <a href="sazib">Dermatology</a> <br />
                        <a href="sazib">Vascular Surgery</a> <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctors;