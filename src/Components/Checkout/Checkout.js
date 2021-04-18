import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import CheckoutDetail from '../CheckoutDetail/CheckoutDetail';
import './Checkout.css'



const Checkout = () => {

    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    // const history =useHistory()
    //  const handleCheckout = () =>{

    //      history.push(`/checkout/from/${serviceId}`)
    //  }
    useEffect(() => {

        fetch(`https://stark-lowlands-05831.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {


                setServices(data)
                
            })
    }, [])



    


    return (

        <div>
            <div className="button-fixed">

                <button type="submit" ><Link to="/addReview" style={{ textDecoration: 'none' }}>Review</Link></button>
                <br/>
                <button type="submit" ><Link to= {`/checkout/from/${serviceId}`} style={{ textDecoration: 'none' }}>Book</Link></button>
                

                 

            </div>



            {
                services.map(service => <CheckoutDetail service={service}></CheckoutDetail>)
            }


        </div>


    );
};

export default Checkout;