//import { useState } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import NotFound from './routes/NotFound';
import ContactPage from './routes/Contact';
import AboutPage from './routes/About';
import MenuHeader from './components/MenuHeader';

const App = () => {
    const match = useMatch('/');

    console.log('####: match : useMatch', match ? true : false);

    return (
        <Routes>
            <Route path="/" element={<MenuHeader bgActive={match ? false : true} />}>
                <Route index element={<HomePage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/about" element={<ContactPage />} />
                <Route path="/contact" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
