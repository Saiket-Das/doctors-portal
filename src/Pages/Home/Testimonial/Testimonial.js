import React from 'react';
import PaitentReview from './PaitentReview';
import qoutes from '../../../assets/icons/quote.svg'
import paitent1 from '../../../assets/images/people1.png';
import paitent2 from '../../../assets/images/people2.png';
import paitent3 from '../../../assets/images/people3.png';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            paitentName: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: paitent1,
            from: 'New York'
        },
        {
            _id: 2,
            paitentName: "Ameila Ava",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: paitent2,
            from: 'Los Angels'
        },
        {
            _id: 3,
            paitentName: "Zara Lucy",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: paitent3,
            from: 'California'
        }
    ]

    return (
        <section >

            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-primary font-semibold'>Testimonial</h3>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={qoutes} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14'>

                {
                    reviews.map(review =>
                        <PaitentReview
                            key={review._id}
                            review={review}
                        ></PaitentReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;