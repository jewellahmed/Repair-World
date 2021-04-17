import React from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Review.css'


const Review = () => {
    const reviewData = [

        {
            title: 'Mr Amit',
            description: 'We can fix all types of laptops issues within shortest time and ensure your repair goes smoothly',
            background:'primary'


        },
        {
            title: 'Mrs Sajeda',
            description: 'You can get highest quality repair services on any brand tablet. Bring it for a free diagnostic',
            background:'dark'


        },
        {
            title: 'Abdul Karim',
            description: 'We repair all brands of mobile phone with 100% customer satisfaction and we offer 90 day warranty',
            background:'primary'


        }
    ];

    return (
        <section className="mb-4 justify-content-center">
            <div class="card-body mt-3 ms-5">
                <h3 className="text-uppercase mb-2">Review</h3>
                <p class="text-black mb-4">Our Customer's Opinion</p>

            </div>
            <section className="d-flex justify-content-center">
                <div className="w-55 row">
                     {
                        reviewData.map(review =><ReviewInfo review={review}></ReviewInfo>)
                    }
                      


                </div>
            </section>
        </section>
    );
};

export default Review;