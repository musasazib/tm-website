import React from 'react';
import './SearchForService.css';

const SearchForService = () => {
    return (
        <div>
            <div className="search-service">
                <div className="row">
                    <div className="col-12 col-md-6 container-content bg-img-1">
                        <h1 className='container-title'>Protect and Take <br />
                            Care of Your Health</h1>
                        <p className='container-description'>Download Our App and feel free to take <br />
                            your Health Advice from a Specialist.</p>
                        <button className="btn-style">Search for a Service</button>
                        <br />
                        <img className='app-store' src="https://i.ibb.co/CnDpvRf/play-store-1.png" alt="" />
                        <img className='app-store app-store-margin' src="https://i.ibb.co/VgnzSc1/apple-1.png" alt="" />
                    </div>
                    <div className="col-12 col-md-6 bg-img-2">
                        <img src="https://i.ibb.co/hm9RJq8/Frame.png" alt="" className="img-fluid rounded image-style" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchForService;