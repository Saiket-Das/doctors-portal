import React from 'react';

const PaitentReview = (props) => {
    const { img, paitentName, review, from } = props.review
    return (
        <div>
            <div>
                <div className={`card shadow-xl p-10`}>
                    <p className='mb-5 text-base'>{review}</p>

                    <div className="flex justify-center items-center gap-8">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="paitent" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{paitentName}</h2>
                            <h2 className="text-base">{from}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaitentReview;