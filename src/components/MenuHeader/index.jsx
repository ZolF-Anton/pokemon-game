import Menu from './Menu';
import Navbar from './Navbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import Footer from '../Footer';
import s from './menuheader.module.css';
import cn from 'classnames';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

const loginSingupUser = async ({ password, email, type }) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
        }),
    };

    switch (type) {
        case 'singup':
            return await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3Ojs7UoqFYvKkp_0rHJDWN6E6c9Qh6tU',
                requestOptions
            ).then((res) => res.json());

        case 'login':
            return await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3Ojs7UoqFYvKkp_0rHJDWN6E6c9Qh6tU',
                requestOptions
            ).then((res) => res.json());

        default:
            return "Can't LogIn User!";
    }
};

const MenuHeader = ({ bgActive }) => {
    const [menuState, setMenuState] = useState(false);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleState = () => setMenuState((prev) => !prev);

    const handleClickLogin = () => {
        setOpenModal((prev) => !prev);
        console.log('######isOpenModal######:', isOpenModal);
    };
    const handleSubmitLoginForm = async (props) => {
        const responce = await loginSingupUser(props);
        console.log('responce', responce);
        if (responce.hasOwnProperty('error')) {
            NotificationManager.error(responce.error.message, 'Wrong!');
        } else {
            if (props.type === 'singup') {
                const pokemonsStart = await fetch(
                    'https://reactmarathon-api.herokuapp.com/api/pokemons/starter'
                ).then((res) => res.json());
                console.log('####pokemonsStart###:', pokemonsStart);

                for (const item of pokemonsStart.data) {
                    await fetch(
                        `https://pokenon-game-default-rtdb.europe-west1.firebasedatabase.app/${responce.localId}/pokemons.json?auth=${responce.idToken}`,
                        { method: 'POST', body: JSON.stringify(item) }
                    );
                }
            }
            localStorage.setItem('idToken', responce.idToken);
            NotificationManager.success('Data accepted', 'Success');
            handleClickLogin();
        }
    };

    return (
        <>
            <Menu menuState={menuState} setMenuState={setMenuState} handleState={handleState} />
            <Navbar
                menuState={menuState}
                bgActive={bgActive}
                setMenuState={setMenuState}
                handleState={handleState}
                onClickLogin={handleClickLogin}
            />
            <Modal isOpen={isOpenModal} title="Log In..." onCloseModal={handleClickLogin}>
                <LoginForm onSubmit={handleSubmitLoginForm} isOpen={isOpenModal} />
            </Modal>
            <div className={cn(s.wrap, { [s.isHomePage]: !bgActive })}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
export default MenuHeader;
