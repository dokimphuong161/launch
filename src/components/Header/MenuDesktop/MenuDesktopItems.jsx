import { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    //Hander for close dropdown when click outside
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            //Clean the listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);

    //Toggle menu on the mouse hover
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };
    return (
        <li className="relative" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.children ? (
                <>
                    <button
                        className="border-none cursor-pointer w-full text-left px-4 py-2 flex items-center justify-between"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : false}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {''}
                        {depthLevel > 0 ? (
                            <span>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        ) : (
                            <span className="">
                                <MdOutlineKeyboardArrowDown />
                            </span>
                        )}
                    </button>
                    <Dropdown submenus={items.children} dropdown={dropdown} depthLevel={depthLevel} />
                </>
            ) : (
                <>
                    {
                        <a className="block text-left px-4 py-2 hover:text-primary" href="#">
                            {items.title}
                        </a>
                    }
                </>
            )}
        </li>
    );
};

MenuItems.propTypes = {};

export default MenuItems;
