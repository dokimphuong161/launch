import { GrClose } from 'react-icons/gr';
import { OutlineButton, PrimaryButton } from '~/components/Buttons';
import MenuMobileItem from './MenuMobileItem';
import { MENU_ITEMS } from '~/constants/menuItems';
const MenuMobile = ({ open, onClose }) => {
    return (
        <>
            <div className={`overlay ${open ? 'block' : 'hidden'}`}></div>
            <div
                className={`z-50 md:hidden bg-white fixed w-3/4 h-full top-0 py-20 pl-5 duration-500 ${
                    open ? 'right-0' : 'right-[-100%]'
                }`}
            >
                <GrClose onClick={onClose} className="text-2xl absolute top-5 right-5" />
                <nav>
                    <ul>
                        {MENU_ITEMS.map((menu, index) => (
                            <MenuMobileItem items={menu} key={index} />
                        ))}
                    </ul>
                </nav>

                <div className="flex mt-4">
                    <PrimaryButton>Sign In</PrimaryButton>
                    <OutlineButton>Register</OutlineButton>
                </div>
            </div>
        </>
    );
};

MenuMobile.propTypes = {};

export default MenuMobile;
