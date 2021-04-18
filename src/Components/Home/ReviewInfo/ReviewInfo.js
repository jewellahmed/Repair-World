import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = ({ review }) => {


    return (


        <div className="col-md-4">
            <div className={`review-container justify-content-center`}>

                <h3>{review.name}'s <span><h6>opinion about</h6></span></h3>
                <h5>  "{review.company}"</h5>

                <small>{review.description}</small>


            </div>

        </div>


    );
};

export default ReviewInfo;