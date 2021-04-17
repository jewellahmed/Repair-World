import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const[imageURL,setImageURL] = useState(null)
    const onSubmit = data =>{

        const serviceData ={

            name: data.name,
            description: data.description,
            imageURL:imageURL

        };
        const url = `https://stark-lowlands-05831.herokuapp.com/addService`;


        console.log(serviceData)
        fetch(url,{

            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
    }

    const handleImageUpload = event => {

        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'db4bee58890f5c90f2408edbe5b35507')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" placeholder="title" ref={register}/>

                <br />
                <input name="description" placeholder="description" ref={register}/> 

                <br/>

                <input  type="file" onChange={handleImageUpload} /> 

                 {/* {errors.exampleRequired && <span>This field is required</span>} */}
                 <br/>

                

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;