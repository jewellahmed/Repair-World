import React from 'react';
import Image from '../../../images/mechanic.jpg'

const Experience = () => {
    return (
        <main class="heading-container mt-4 d-flex justify-content-center">
            <div class="container row g-3">
                <div class="col-md-6">
                    <img className="img-fluid" src={Image} alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="card-body mt-3">
                        <h1 class="text-uppercase mb-3"><span style={{ color: 'green' }}>10 YEARS OF EXPERIENCE </span> </h1>
                        {/* <h5 class="text-black mb-4">We provide high solution for your electronics device. <br />Come to us for Best Mechanic & Best Service</h5> */}
                        <p>We’re not only here to fix your device but also make sure you are informed and comfortable with the whole process. We’ll keep you updated and you feel comfortable with our services.</p>

                        <a href="https://www.mobicarebd.com/">

                        <button  type="button" class="mt-2 btn btn-outline-success text-uppercase" style={{ textDecoration: 'none' }}>More About Us
                        
                        </button>
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Experience;