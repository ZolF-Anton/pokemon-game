//import React from 'react';
import s from './navbar.module.css';
import cn from 'classnames';

import { ReactComponent as LoginSVG } from '../Navbar/assets/login.svg';

const Navbar = ({ menuState, bgActive = false, handleState, onClickLogin }) => {
    return (
        <>
            <nav id={s.navbar} className={cn(s.root, { [s.bgActive]: bgActive })}>
                <div className={s.navWrapper}>
                    <p className={s.brand}>LOGO</p>
                    <div className={s.loginAndMenu}>
                        <div className={s.loginWrap} onClick={onClickLogin}>
                            <LoginSVG />
                        </div>
                        <div>
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
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
