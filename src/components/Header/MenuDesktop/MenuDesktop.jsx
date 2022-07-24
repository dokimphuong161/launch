import { OutlineButton, PrimaryButton } from '~/components/Buttons';
import { MENU_ITEMS } from '~/constants/menuItems';
import MenuDesktopItems from './MenuDesktopItems';

const MenuDesktop = (props) => {
    return (
        <div className="ml-8 md:flex hidden flex-1 justify-between">
            <nav>
                <ul className="flex text-gray">
                    {MENU_ITEMS.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuDesktopItems items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                </ul>
            </nav>
            {/* Button */}
            <div className="flex">
                <OutlineButton>Sign In</OutlineButton>
                <PrimaryButton>Register</PrimaryButton>
            </div>
        </div>
    );
};

MenuDesktop.propTypes = {};

export default MenuDesktop;
