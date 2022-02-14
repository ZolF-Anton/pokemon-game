import s from './navbar.module.css';
import cn from 'classnames';

const Navbar = ({ menuState, bgActive = false, handleState }) => {
    return (
        <>
            <nav id={s.navbar} className={cn(s.root, { [s.bgActive]: bgActive })}>
                <div className={s.navWrapper}>
                    <p className={s.brand}>LOGO</p>
                    <button
                        onClick={handleState}
                        className={cn(s.menuButton, {
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
