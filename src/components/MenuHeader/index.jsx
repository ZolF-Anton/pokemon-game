import Menu from './Menu';
import Navbar from './Navbar';
import { useState } from 'react';

const MenuHeader = () => {
    const [menuState, setMenuState] = useState(false);

    const handleState = () => setMenuState((prev) => !prev);

    return (
        <>
            <h1>MenuHeader</h1>
            <Menu menuState={menuState} setMenuState={setMenuState} handleState={handleState} />
            <Navbar menuState={menuState} setMenuState={setMenuState} handleState={handleState} />
        </>
    );
};
export default MenuHeader;
