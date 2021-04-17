import React from 'react';
import Image from '../../../images/gallery_electronics_repair.jpg'

const HeaderMain = () => {
    return (

        <main class="heading-container mt-4 d-flex justify-content-center">
        <div class="container row g-3">
            <div class="col-md-6">
                <div class="card-body mt-3">
                    <h1 class="text-uppercase mb-3">Repair your <br/><span style={{color: '#15f702'}}>Electronics Device</span> </h1>
                    <h5 class="text-black mb-4">We provide high solution for your electronics device. <br/>Come to us for Best Mechanic & Best Service</h5>

                    <button type="button" class="mt-2 btn btn-outline-success text-uppercase" style={{textDecoration: 'none'}}>Get Appointment</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img className="img-fluid" src={Image}  alt="..." />
                </div>
            </div>
        </main>

    );
};

export default HeaderMain;