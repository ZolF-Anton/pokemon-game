import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PokemonCard from '../../../components/PokemonCard';
import Layout from '../../../components/Layout';

import s from './start.module.css';
import { FireBaseContext } from '../../../context/firebaseContext';
import { PokemonContext } from '../../../context/pokemonContext';

const DATA = {
    abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
    base_experience: 122,
    height: 11,
    weight: 300,
    id: 17,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
    name: 'pidgeotto',
    stats: {
        hp: 63,
        attack: 60,
        defense: 55,
        'special-attack': 50,
        'special-defense': 50,
        speed: 71,
    },
    type: 'normal',
    values: {
        top: 7,
        right: 5,
        bottom: 1,
        left: 2,
    },
};

const StartPage = () => {
    const firebase = useContext(FireBaseContext);
    const pokemonsContext = useContext(PokemonContext);
    const historyNav = useNavigate();
    const [pokemons, setPokemons] = useState({});
    const goBack = () => {
        historyNav('/game/board');
    };

    console.log('####: pokemonsContext:', pokemonsContext);

    // const getPokemons = async () => {
    //     const responce = await firebase.getPokemonsOnce();
    //     setPokemons(responce);
    // };

    useEffect(() => {
        firebase.getPokemonSoket((pokemon) => {
            setPokemons(pokemon);
        });
        return () => firebase.offPokemonSoket();
    }, []);

    const handleChangeSelected = (keyUniq) => {
        const pokemon = { ...pokemons[keyUniq] };
        pokemonsContext.onSelectedPokemons(keyUniq, pokemon);

        setPokemons((prevState) => ({
            ...prevState,
            [keyUniq]: {
                ...prevState[keyUniq],
                selected: !prevState[keyUniq].selected,
            },
        }));
    };
    // const handleChangeActive = (keyUniq) => {
    //     setPokemons((prevState) => {
    //         return Object.entries(prevState).reduce((acc, item) => {
    //             const pokemon = { ...item[1] };

    //             if (item[0] === keyUniq) {
    //                 if (!pokemon.active) {
    //                     pokemon.active = true;
    //                 } else {
    //                     pokemon.active = false;
    //                 }
    //             }

    //             acc[item[0]] = pokemon;
    //             firebase.postPokemon(item[0], pokemon);

    //             return acc;
    //         }, {});
    //     });
    // };

    // const handleAddPokemon = () => {
    //     const data = DATA;
    //     firebase.addPokemon(data);
    // };
    const handleStartGameClick = () => {
        historyNav('/game/board');
    };

    return (
        <div>
            <div className={s.buttonWrap}>
                <button
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonsContext.pokemons).length < 5}
                >
                    Start Game!
                </button>
            </div>
            <Layout id="cards" title="Cards" colorTittle="#FEFEFE" colorBg="#202736">
                <div className={s.flex}>
                    {Object.entries(pokemons).map(
                        ([keyUniq, { name, img, id, type, values, selected }]) => (
                            <PokemonCard
                                className={s.card}
                                isActive={true}
                                isSelected={selected}
                                keyUniq={keyUniq}
                                key={keyUniq}
                                id={id}
                                img={img}
                                name={name}
                                values={values}
                                type={type}
                                onClickF={() => {
                                    if (
                                        Object.keys(pokemonsContext.pokemons).length < 5 ||
                                        selected
                                    ) {
                                        handleChangeSelected(keyUniq);
                                    }
                                }}
                            />
                        )
                    )}
                </div>
            </Layout>

            <Link to="/">
                <button>Back to HOME! </button>
            </Link>
        </div>
    );
};

export default StartPage;
