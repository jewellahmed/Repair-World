import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = ({ review }) => {


    return (


        <div className="col-md-4">
            <div className={`review-container justify-content-center`}>
               
                    <h5>{review.title}</h5>
                    <small>{review.description}</small>
                   
                
            </div>

        </div>


    );
};

export default ReviewInfo;