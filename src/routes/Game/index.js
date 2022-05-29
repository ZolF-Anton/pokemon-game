//import { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import s from './game.module.css';
import cn from 'classnames';

import StartPage from './Start/index';
import BoardPage from './Board/index';
import FinishPage from './Finish/index';
import NotFound from '../NotFound';
import { PokemonContext } from '../../context/pokemonContext';
import { CardsContext } from '../../context/cardsContext';
import { useEffect, useState } from 'react';

const GamePage = ({ bgActive }) => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [bgActiveSwitcher, setBgActiveSwitcher] = useState(bgActive);
    const location = useLocation();

    const slice = {
        name: 'user',
        initialState: {
            isLoading: false,
            data: {},
        },
        reducers: {
            fetchUser: () => ({
                isLoading: true,
            }),
            updateUser: (state, action) => ({
                isLoading: false,
                data: action.payload,
            }),
            removeUser: () => ({
                isLoading: true,
                data: {},
            }),
        },
    };

    const handleSelectedPokemons = (keyUniq, pokemon) => {
        setSelectedPokemons((pervState) => {
            if (pervState[keyUniq]) {
                const copyState = { ...pervState };
                delete copyState[keyUniq];
                return copyState;
            }
            return {
                ...pervState,
                [keyUniq]: pokemon,
            };
        });
    };

    useEffect(() => {
        console.log('###UEffect ###', location.pathname);
        if (location.pathname === '/game/finish' || location.pathname === '/game/start') {
            console.log('Before bgActiveSwitcher', bgActiveSwitcher, location.pathname);
            setBgActiveSwitcher((bgActive) => !bgActive);
            console.log('AFTER bgActiveSwitcher', bgActiveSwitcher, location.pathname);
        }
    }, [bgActive, location.pathname]);

    return (
        <>
            <PokemonContext.Provider
                value={{
                    pokemons: selectedPokemons,
                    onSelectedPokemons: handleSelectedPokemons,
                    pokemonsSet: setSelectedPokemons,
                    slice: slice,
                }}
            >
                <div className={cn({ [s.hidden]: bgActiveSwitcher })}>
                    <ul>
                        <li>
                            <button>
                                <Link to="start">Start Game</Link>
                            </button>
                        </li>
                        <li>
                            <button>
                                <Link to="board">Board Page</Link>
                            </button>
                        </li>
                        <li>
                            <button>
                                <Link to="finish">FINISH</Link>
                            </button>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route index />
                    <Route path={'start'} element={<StartPage />} />
                    <Route path={`board`} element={<BoardPage />} />
                    <Route path={`finish`} element={<FinishPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PokemonContext.Provider>
        </>
    );
};

export default GamePage;
