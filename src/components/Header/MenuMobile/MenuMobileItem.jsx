import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MenuMobileItem = ({ items }) => {
    const [openItem, setOpenItem] = useState(false);
    return (
        <div className="py-1 ">
            {items.children ? (
                <>
                    <div
                        className="sidebar-title flex items-center cursor-pointer hover:text-primary"
                        onClick={() => setOpenItem((prev) => !prev)}
                    >
                        <span className="mr-2">{items.title}</span>
                        <MdOutlineKeyboardArrowDown
                            className={`transition duration-300 ${openItem ? 'rotate-180' : ''}`}
                        />
                    </div>
                    <div className={`sidebar-content px-6 h-0 overflow-hidden ${openItem ? 'h-auto pt-1' : ''}`}>
                        {items.children.map((submenu, i) => (
                            <MenuMobileItem items={submenu} key={i} />
                        ))}
                    </div>
                </>
            ) : (
                <a href="#" className="block hover:text-primary">
                    {items.title}
                </a>
            )}
        </div>
    );
};

MenuMobileItem.propTypes = {};

export default MenuMobileItem;
