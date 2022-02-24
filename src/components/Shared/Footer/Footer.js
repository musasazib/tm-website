import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <hr className='horizontal-line' />
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <div>
                        <img src="https://i.ibb.co/kBLy8T6/Logo-4.png" alt="" className='footer-logo' />
                        <p className='footer-description'>Lorem ipsum is dolor sit amet, <br />
                            csectetur adipiscing elit, dolore smod <br />
                            tempor incididunt ut labore et.</p>
                    </div>
                    <div>
                        <h4 className='footer-contact'>Contact Us</h4>
                        <p className='footer-description'>House-20, Road-27, Block-A, Banani, Dhaka.</p>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='expert-doctor-link left-margin'>
                        <a href="sazib">Doctor</a> <br />
                        <a href="sazib">Services</a> <br />
                        <a href="sazib">Pharmacy Owner</a> <br />
                        <br />
                        <br />
                        <p>Social Links</p>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='expert-doctor-link left-margin'>
                        <a href="sazib">About Us</a> <br />
                        <a href="sazib">Blog</a> <br />
                        <a href="sazib">Contact Us</a> <br />
                    </div>
                    <br />
                    {/* ------------- */}
                    <br />
                    <h5>Download Our App</h5>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='expert-doctor-link left-margin'>
                        <a href="sazib">Terms & Conditions</a> <br />
                        <a href="sazib">Privacy Policy</a> <br />
                        <a href="sazib">FAQ</a> <br />
                    </div>
                    <br />
                    <br />
                    <img src="https://i.ibb.co/CnDpvRf/play-store-1.png" alt="" />
                    <img src="https://i.ibb.co/VgnzSc1/apple-1.png" alt="" />
                </div>
            </div>
            <h6 className='copyright'>Copyright TM 2021. All rights reserved. Created by Golden Infotech.
            </h6>
        </div>
    );
};

export default Footer;