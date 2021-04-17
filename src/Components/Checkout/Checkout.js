import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import CheckoutDetail from '../CheckoutDetail/CheckoutDetail';



const Checkout = () => {

    const{id}= useParams();
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [services, setServices] = useState([]);
    const{serviceId} = useParams();
    useEffect(() => {

        fetch(`https://stark-lowlands-05831.herokuapp.com/service/${serviceId}`)
        .then(res => res.json())
        .then(data => {

            
            setServices(data)
            // setOrders(data)
        })
    },[])



    // console.log(data);
   
    
    return (
        <div>

            

           {
               services.map(service => <CheckoutDetail service={service}></CheckoutDetail>)
           }
           
            
        </div>

        
    );
};

export default Checkout;