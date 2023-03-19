import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../Booking Modal/BookingModal';
import Service from '../Service/Service';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';


const AvailableAppointment = ({ date }) => {

    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const formatDate = format(date, 'PP');

    // use React Query to fetch api 
    // Refetch use to update data in UI realtime after booking (don't need reload) 
    const { data: services, isLoading, refetch } = useQuery(['available', formatDate], () =>
        fetch(`https://nameless-headland-38045.herokuapp.com/available?date=${formatDate}`)
            .then(res => res.json())
    )

    // useEffect(() => {
    //     fetch(`https://nameless-headland-38045.herokuapp.com/available?date=${formatDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatDate])

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className='my-24'>
            <h3 className='text-center font-semibold text-2xl text-secondary'>Available apppointment on {format(date, 'PP')}</h3>

            <p
                className='text-center text-xl'>
                Please select a service: {services.length}
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services?.map(service =>
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
                refetch={refetch}
            ></BookingModal>}
        </div>

    );
};

export default AvailableAppointment;