import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import ConatctUs from '../ContactUs/ConatctUs';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ConatctUs></ConatctUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;