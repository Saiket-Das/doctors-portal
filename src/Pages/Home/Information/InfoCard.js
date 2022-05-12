import React from 'react';


const InfoCard = ({ img, title, description, bgColor }) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl ${bgColor} p-6`}>
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-white'>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;