//import { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import s from './game.module.css';
import cn from 'classnames';

import StartPage from './Start/index';
import BoardPage from './Board/index';
import FinishPage from './Finish/index';
import NotFound from '../NotFound';
import { PokemonContext } from '../../context/pokemonContext';
import { useState } from 'react';

const GamePage = ({ bgActive }) => {
    const [selectedPokemons, setSelectedPokemons] = useState({});

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
    console.log('####### game Page bgActive', bgActive);
    return (
        <>
            <PokemonContext.Provider
                value={{
                    pokemons: selectedPokemons,
                    onSelectedPokemons: handleSelectedPokemons,
                }}
            >
                <div className={cn({ [s.hidden]: bgActive })}>
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
