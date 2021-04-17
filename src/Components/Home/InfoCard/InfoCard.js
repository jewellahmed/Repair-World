import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'


const InfoCard = ({info}) => {
    
    return (

        
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex info-container justify-content-center info-${info.background}`}>
            <div className="ms-3">

              <FontAwesomeIcon icon={info.icon} className="font-icon"></FontAwesomeIcon>

            </div>
            <div>
                <h6>{info.title}</h6>
                <h6>{info.description}</h6>

            </div>
            </div>
            
        </div>
    );
};

export default InfoCard;