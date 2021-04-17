import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from '../CardForm/CardForm';

const stripePromise = loadStripe('pk_test_51IhAmyJNYRzbh2044oUF1fSTgq4sz1fggutPcyQmsIUF6aOi0vcRdsxpHXnkbfTPs29GbGG2WqyoaitHZiJQrgEs00UurlQHSG');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>

            <CardForm></CardForm>
           
        </Elements>
    );
};

export default PaymentProcess;