import s from './menu.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const Menu = ({ menuState, handleState }) => {
    return (
        <>
            <div class={cn(s.menuContainer, { [s.active]: menuState, [s.deactive]: !menuState })}>
                <div class={s.overlay} />
                <div class={s.menuItems}>
                    <ul>
                        <li>
                            <Link onClick={handleState} to="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleState} to="/game">
                                GAME
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleState} to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleState} to="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Menu;
