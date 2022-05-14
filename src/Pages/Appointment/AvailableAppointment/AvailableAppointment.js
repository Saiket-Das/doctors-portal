import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../Booking Modal/BookingModal';
import Service from '../Service/Service';


const AvailableAppointment = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div className='my-24'>
            <h3 className='text-center font-semibold text-2xl text-secondary'>Available apppointment on {format(date, 'PP')}</h3>

            <p
                className='text-center text-xl'>
                Please select a service: {services.length}
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>

    );
};

export default AvailableAppointment;