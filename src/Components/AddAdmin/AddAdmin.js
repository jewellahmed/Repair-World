import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
   


    const onSubmit = data =>{

        const adminData ={

            
               email: data.email
            

        };
        const url = `https://stark-lowlands-05831.herokuapp.com/addAdmin`;


        console.log(adminData)
        fetch(url,{

            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({adminData})
        })
    }

    
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="email" placeholder="Add Email" ref={register}/>

                
                  <br/>

                

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddAdmin;