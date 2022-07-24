import React from 'react';
import PropTypes from 'prop-types';
import MenuDesktopItems from './MenuDesktopItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? 'block' : ''}`}>
            {submenus.map((submenu, index) => (
                <MenuDesktopItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};

Dropdown.propTypes = {};

export default Dropdown;
