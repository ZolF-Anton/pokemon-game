//import { useState } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import ContactPage from './routes/Contact';
import AboutPage from './routes/About';
import MenuHeader from './components/MenuHeader';

const App = () => {
    const match = useMatch('/');

    console.log('####: match2 : useMatch', match);

    return (
        <Routes>
            <>
                <Route path="/" element={<HomePage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/about" element={<ContactPage />} />
                <Route path="/contact" element={<AboutPage />} />
                <Route path="*" element={<GamePage />} />
            </>
        </Routes>
    );
};

export default App;
