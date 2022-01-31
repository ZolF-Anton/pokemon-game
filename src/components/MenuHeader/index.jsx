import Menu from './Menu';
import Navbar from './Navbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import s from './menuheader.module.css';
import cn from 'classnames';

const MenuHeader = ({ bgActive, match }) => {
    const [menuState, setMenuState] = useState(false);

    const handleState = () => setMenuState((prev) => !prev);

    return (
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} handleState={handleState} />
            <Navbar
                menuState={menuState}
                bgActive={bgActive}
                setMenuState={setMenuState}
                handleState={handleState}
            />
            <div className={cn(s.wrap, { [s.isHomePage]: !bgActive })}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
export default MenuHeader;
