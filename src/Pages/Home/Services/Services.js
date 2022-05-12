import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import DentalCare from './DentalCare';


const Services = () => {

    const services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            description: "Fluoride is a natural mineral that builds strong teeth and prevents cavities.",
            img: fluoride
        },
        {
            _id: 2,
            title: "Cavity Filling",
            description: "A cavity filling is filling the opening in your tooth with some kind of material.",
            img: cavity
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            description: "Teeth whitening does not make the enamel thinner and is not harmful to your teeth",
            img: whitening
        }
    ]

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h4 className='text-2xl	 text-primary font-bold'>OUR SERVICES</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <DentalCare></DentalCare>
        </div>
    );
};

export default Services;