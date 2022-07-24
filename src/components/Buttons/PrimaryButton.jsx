import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="bg-primary text-white px-6 py-1 rounded-full mx-1">
            {children}
        </button>
    );
};

PrimaryButton.propTypes = {};

export default PrimaryButton;
