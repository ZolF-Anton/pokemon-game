//import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import NotFound from './routes/NotFound';
import ContactPage from './routes/Contact';
import AboutPage from './routes/About';
import MenuHeader from './components/MenuHeader';
import { FireBaseContext } from './context/firebaseContext';
import Firebase from './service/firebase';
import 'react-notifications/lib/notifications.css';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    const location = useLocation();
    const isPadding = location.pathname === '/' || location.pathname === '/game/board';

    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Routes>
                <Route path="/" element={<MenuHeader bgActive={!isPadding} />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="game/*"
                        element={
                            <PrivateRoute>
                                <GamePage bgActive={isPadding} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="contact"
                        element={
                            <PrivateRoute>
                                <ContactPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="about"
                        element={
                            <PrivateRoute>
                                <AboutPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <NotificationContainer />
        </FireBaseContext.Provider>
    );
};

export default App;
