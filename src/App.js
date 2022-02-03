//import { useState } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import NotFound from './routes/NotFound';
import ContactPage from './routes/Contact';
import AboutPage from './routes/About';
import MenuHeader from './components/MenuHeader';
import { FireBaseContext } from './context/firebaseContext';
import Firebase from './service/firebase';

const App = () => {
    const match = useMatch('/');

    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Routes>
                <Route path="/" element={<MenuHeader bgActive={match ? false : true} />}>
                    <Route index element={<HomePage />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </FireBaseContext.Provider>
    );
};

export default App;
