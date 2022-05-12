import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import call from '../../../assets/icons/phone.svg';


const Information = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
            <InfoCard img={clock}
                title={'Opening Hours'}
                description={'Monday | 9AM - 10PM'}
                bgColor={'bg-gradient-to-r from-secondary to-primary'}
            ></InfoCard>

            <InfoCard img={location}
                title={'Visit our location'}
                description={'Brooklyn, NY 10036, United States'}
                bgColor={'bg-accent'}
            ></InfoCard>

            <InfoCard img={call}
                title={'Contact us now'}
                description={'+601156262784'}
                bgColor={'bg-gradient-to-r from-secondary to-primary'}
            ></InfoCard>
        </div>
    );
};

export default Information;
