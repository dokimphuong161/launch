import React from 'react';
import PropTypes from 'prop-types';

const OutlineButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="border border-gray100 text-gray px-6 py-1 rounded-full ease-in-out hover:border-primary hover:text-primary transition duration-300"
        >
            {children}
        </button>
    );
};

OutlineButton.propTypes = {};

export default OutlineButton;
