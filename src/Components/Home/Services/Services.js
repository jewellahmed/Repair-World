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
            <div class="card-style mt-3 ms-5">
                <h3 className="text-uppercase mb-2">Services</h3>
                <h5 class="text-black mb-4">Find's Your Need</h5>

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