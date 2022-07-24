import { MENU_ITEMS } from '../Constants/menuItems';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import MenuMobile from './MenuMobile/MenuMobile';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';

const Header = (props) => {
    const [open, setOpen] = useState(false);

    const headerRef = useRef();

    //Add shrink header
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('scrolled');
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    headerRef.current.classList.add('awake');
                } else {
                    headerRef.current.classList.remove('awake');
                }
            } else {
                headerRef.current.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    //Handle to close menu
    const handleOnClose = () => {
        setOpen(!open);
    };

    return (
        <header ref={headerRef} className="w-full py-5 bg-white">
            <div className="container mx-auto flex items-center">
                <div className="z-50 flex justify-between md:w-auto w-full md:px-0 px-4">
                    {/* Logo */}
                    <p className="text-2xl font-bold">
                        Launch<span className="text-primary">.</span>
                    </p>
                    <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                        <BiMenuAltRight />
                    </div>
                </div>

                {/* Menu for Desktop */}
                <MenuDesktop />

                {/* Menu for Mobile */}
                <MenuMobile open={open} onClose={handleOnClose} />
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;
