import React, { useEffect, useState } from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Review.css'


const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {

        fetch('https://stark-lowlands-05831.herokuapp.com/review')
            .then(res => res.json())
            .then(reviews => setReviews(reviews))

    }, [])

    return (
        <section className="ms-5 mb-4 justify-content-center">
            <div class="card-body mt-3 ms-5">
                <h3 className="text-uppercase mb-2">Review</h3>
                <p class="text-black mb-4">Our Customer's Opinion</p>
                <h5>See! How Our Customer's Rate Us</h5>

            </div>
            <section className="d-flex justify-content-center">
                <div className="w-55 row">
                    {
                        reviews.map(review => <ReviewInfo review={review}></ReviewInfo>)
                    }



                </div>
            </section>
        </section>
    );
};

export default Review;