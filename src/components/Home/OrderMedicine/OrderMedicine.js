import React from 'react';
import './OrderMedicine.css';

const OrderMedicine = () => {
    return (
        <div>
            <div>
                <h1 className='order-medicine-title'>Order Medicine Online from Popular Pharmacy Nearby</h1>
                <p className='order-medicine-description'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className=' medicine-corner left-margin'>
                        <h4 className='medicine-corner-title'>Shahbag Medicine Corner</h4>
                        <div>
                            <img className='medicine-corner-icon' src="https://i.ibb.co/wJ45nfY/Group-13.png" alt="" />
                            <p className='medicine-corner-description'>Bangabandhu Sheikh Mojib Medical <br />
                                University Gate No-03, Shahbag, <br />
                                Dhaka- 1000, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className=' medicine-corner'>
                        <h4 className='medicine-corner-title'>Shahbag Medicine Corner</h4>
                        <div>
                            <img className='medicine-corner-icon' src="https://i.ibb.co/wJ45nfY/Group-13.png" alt="" />
                            <p className='medicine-corner-description'>Bangabandhu Sheikh Mojib Medical <br />
                                University Gate No-03, Shahbag, <br />
                                Dhaka- 1000, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className='medicine-corner right-margin'>
                        <h4 className='medicine-corner-title'>Shahbag Medicine Corner</h4>
                        <div>
                            <img className='medicine-corner-icon' src="https://i.ibb.co/wJ45nfY/Group-13.png" alt="" />
                            <p className='medicine-corner-description'>Bangabandhu Sheikh Mojib Medical <br />
                                University Gate No-03, Shahbag, <br />
                                Dhaka- 1000, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderMedicine;