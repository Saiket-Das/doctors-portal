import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const CheckOutForm = ({ appointment }) => {

    const { _id, patientEmail, patientName, price } = appointment;

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);


    // Send / Post data
    useEffect(() => {
        fetch('https://nameless-headland-38045.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        // Get the Credit card info 
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // Credit card error and Payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });


        setCardError(error?.message || '');
        setCardSuccess('');
        setProcessing(true);



        // Confirm card payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail,
                    },
                },
            },
        );
        if (intentError) {
            setProcessing(false);
            setCardError(intentError?.message);
            setCardSuccess('');
        }
        else {
            setCardError('');
            setTransactionID(paymentIntent.id)
            setCardSuccess('Congrats! Your payment is completed.')

            // Store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            // Update data (payment is paid) after payment successful
            fetch(`https://nameless-headland-38045.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data)
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-outline btn-success btn-sm mt-4'
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>


            {/* If Error */}
            {
                cardError && <p
                    className='text-red-500 text-center'>
                    {cardError}
                </p>
            }

            {/* If Success  */}
            {
                cardSuccess && <div
                    className='text-green-500 text-center'>
                    <p>{cardSuccess}</p>

                    <p>Your transaction Id:
                        <span className='text-orange-500'>
                            {transactionID}
                        </span>
                    </p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;