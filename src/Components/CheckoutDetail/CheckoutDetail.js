import React, { useContext } from 'react';
import { UserContext } from '../../App';
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
                <input type="text" defaultValue={name}></input>
                <br/>
                <input type="text" defaultValue={loggedInUser.name}></input>
                
            </form>
            </div>
            <div>
                <PaymentProcess></PaymentProcess>
            </div>



        </div>
    );
};

export default CheckoutDetail;