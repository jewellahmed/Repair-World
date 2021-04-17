import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {

    console.log(service)

    const btnStyle={

        marginLeft:'40px',
        
    }
    return (


        <div className="col-md-4">
            <div className={`service-container justify-content-center`}>
                <div className="ms-3">

                    <img src={service.imageURL} style={{width:150,height:120,}} alt=""/>

                   

                </div>
                <div>
                    <h5>{service.title}</h5>
                    <small>{service.description}</small>
                    <Link to={`/checkout/from/${service._id}`} style={btnStyle}><button type="button" class=" btn btn-success text-uppercase btn-sm">Repair Now</button></Link>

                </div>
            </div>

        </div>

    );
};

export default ServiceDetail;