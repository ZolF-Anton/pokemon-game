import s from './navbar.module.css';
import cn from 'classnames';

const Navbar = ({ menuState, setMenuState, handleState }) => {
    return (
        <>
            <nav class={s.root}>
                <div class={s.navWrapper}>
                    <p class={s.brand}>LOGO</p>
                    <button
                        onClick={handleState}
                        class={cn(s.menuButton, {
                            [s.active]: menuState,
                            [s.deactive]: !menuState,
                        })}
                    >
                        <span />
                    </button>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
