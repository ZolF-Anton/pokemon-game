import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import Layout from '../../components/Layout';
import database from '../../service/firebase';
import s from './game.module.css';

const GamePage = () => {
    //const [isActive, setActive] = useState(false);
    const [pokemons, setPokemons] = useState({});
    //const onClickF = () => setActive(!isActive);

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    }, []);

    const handleChangeActive = (id) => {
        setPokemons((prevState) => {
            console.log('#### setPokemons :', prevState);
            return Array.from(prevState, (item) => {
                if (item.id === id) {
                    item.active = true;
                }
                return item;
            });
        });
    };

    return (
        <div>
            <Layout id="cards" title="Cards" colorTittle="#FEFEFE" colorBg="#202736">
                <div className={s.flex}>
                    {Object.entries(pokemons).map(
                        ([key, { name, img, id, type, values, active }]) => (
                            <PokemonCard
                                isActive={active}
                                // setActive={setActive}
                                onClickF={handleChangeActive}
                                key={key}
                                id={id}
                                img={img}
                                name={name}
                                values={values}
                                type={type}
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

export default GamePage;
