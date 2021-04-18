import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Review from '../Home/Review/Review';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import './CheckoutDetail.css'

const CheckoutDetail = (props) => {

    
    const { name, imageURL } = props.service;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div className="check-style">

            
            <div>

            <img src={imageURL} alt="" />

            <form>
                <h5>User Selection</h5>
                <input type="text" defaultValue={name}></input>
                <br/>
                <h5>User Email</h5>
                <input type="text" defaultValue={loggedInUser.email}></input>
                
                

                
            </form>
            </div>
            <br/>
            <div>
                <PaymentProcess></PaymentProcess>
            </div>



        </div>
    );
};

export default CheckoutDetail;