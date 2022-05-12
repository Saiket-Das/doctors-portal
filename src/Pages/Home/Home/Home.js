import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Appointment from '../Appointment/Appointment';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Appointment></Appointment>

        </div>
    );
};

export default Home;