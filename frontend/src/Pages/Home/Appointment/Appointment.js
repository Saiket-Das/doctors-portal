import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointmentBG from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <section className='flex justify-center items-center my-40 mb-24'
            style={{
                backgroundImage: `url('${appointmentBG}')`
            }}>
            <div className='flex-1 mt-[-130px] hidden lg:block' >
                <img src={doctor} alt="" />
            </div>


            <div className='flex-1 text-white p-10'>
                <h3 className="card-title text-xl mb-2 text-primary ">APPOINTMENT</h3>

                <h3 className="card-title text-4xl mb-5">Make an appointment Today</h3>

                <p className='text-base mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <div className="card-actions justify-start">
                    <PrimaryButton name={'Make Appointment'}></PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Appointment;


