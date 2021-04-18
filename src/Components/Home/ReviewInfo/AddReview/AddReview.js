import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data =>{

        const reviewData ={

            name: data.name,
            description: data.description,
            company: data.company,
            

        };
        const url = `https://stark-lowlands-05831.herokuapp.com/addReview`;


        console.log(reviewData)
        fetch(url,{

            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
    }

    
    return (
        <div className="form-design">

            <form onSubmit={handleSubmit(onSubmit)}>

                <h5>Your Name</h5>

                <input name="name" placeholder="Your Name" ref={register}/>

                <br />
                <h5>Company Name</h5>
                <input name="company" placeholder="Companies Name Designation" ref={register}/> 

                <br/>

                <h5>Your Opinion</h5>

                <input name="description" placeholder="Description" ref={register}/>

                <br/>
                 

                

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddReview;