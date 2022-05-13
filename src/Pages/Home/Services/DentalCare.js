import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';



const DentalCare = () => {
    return (
        <div className='grid grid-cols-8 gap-0 my-40'>
            <div className='col-start-2 col-span-6 '>
                <div className="card lg:card-side ">
                    <figure>
                        <img className='rounded-lg	' style={{ width: '450px' }} src={treatment} alt="Treatment" />
                    </figure>

                    <div className="card-body my-auto mx-5">
                        <h2 className="card-title text-5xl	
                            mb-5">Exceptional Dental Care, on Your Terms</h2>
                        <p className='text-base mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <div className="card-actions justify-start">
                            <PrimaryButton name={'Get Started'}></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;