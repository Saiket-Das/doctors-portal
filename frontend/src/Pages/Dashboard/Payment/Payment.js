import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, } from '@stripe/react-stripe-js';
import CheckOutForm from '../CheckOutForm/CheckOutForm';


const stripePromise = loadStripe('pk_test_51L12h7FFRkXzSfTm4BbhvSh2a8xAedX62QCXlwx8NRcJwdUk8SVzF8josy9Vdg1SNXAgHU2PE3JnIh6EXLGTGZ1Y00o92XbEAH');

const Payment = () => {
    const { appointmentId } = useParams();
    const url = `https://nameless-headland-38045.herokuapp.com/booking/${appointmentId}`

    const { data: appointment, isLoading } = useQuery(['booking', appointmentId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success text-2xl font-bold">Hello, {appointment.patientName}</p>
                    <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            appointment={appointment}>
                        </CheckOutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;