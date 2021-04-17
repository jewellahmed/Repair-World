import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('https://stark-lowlands-05831.herokuapp.com/service')
            .then(res => res.json())
            .then(services => setServices(services))

    }, [])
    

    return (
        <section className="heading-container mt-3 justify-content-center">
            <div class="card-body mt-3 ms-5">
                <h3 className="text-uppercase mb-2">Services</h3>
                <p class="text-black mb-4">Any kinds of digital device problem you need fixed. We can help! Check out our digital device repair services to find more information of what exactly we provide and if it suites your needs.</p>

            </div>
            <section className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }



                </div>
            </section>
        </section>
    );
};

export default Services;