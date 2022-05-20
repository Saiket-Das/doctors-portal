import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;

    return (
        <div className="card lg:card-side shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary text-2xl">{name}</h2>

                <p className='text-xl'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-600'>Try another date</span>
                }</p>

                <p className='text-base'>
                    {slots.length} {slots.length > 1 ? 'slots' : 'slot'} available
                </p>

                <p>Fee: ${price}</p>

                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase"
                    >Book Appointment</label>

                </div>

            </div>
        </div>
    );
};

export default Service;