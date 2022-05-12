import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('${bg}')` }}>
                <div className="hero-content flex-col lg:flex-row-reverse" >
                    <img style={{ width: '594px' }} src={chair} className=" shadow-2xl" alt='' />

                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <PrimaryButton name={'Get Started'}></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;