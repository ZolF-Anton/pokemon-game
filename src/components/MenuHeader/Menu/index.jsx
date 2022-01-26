import s from './menu.module.css';
import cn from 'classnames';

const Menu = ({ menuState, setMenuState, handleState }) => {
    return (
        <>
            {/* <div class="menuContainer active/deactive"> */}
            <div class={cn(s.menuContainer, { [s.active]: menuState, [s.deactive]: !menuState })}>
                <div class={s.overlay} />
                <div class={s.menuItems}>
                    <ul>
                        <li>
                            <a onClick={handleState} href="#welcome">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a onClick={handleState} href="#game">
                                GAME
                            </a>
                        </li>
                        <li>
                            <a onClick={handleState} href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a onClick={handleState} href="#contact">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Menu;
