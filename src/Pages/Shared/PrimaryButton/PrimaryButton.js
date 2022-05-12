import React from 'react';

const PrimaryButton = ({ name }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">{name}</button>
    );
};

export default PrimaryButton;