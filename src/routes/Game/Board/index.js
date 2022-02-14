import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PokemonCard from '../../../components/PokemonCard';
import { PokemonContext } from '../../../context/pokemonContext';

import s from './board.module.css';
const BoardPage = () => {
    const [board, setBoard] = useState([]);
    const pokemonContext = useContext(PokemonContext);
    const historyNav = useNavigate();
    const handleClickBoardPlate = (position) => {
        console.log('###### position', position);
    };

    // if (!Object.keys(pokemonContext.pokemons)) {
    //     historyNav('/game', { replace: true });
    // }

    useEffect(() => {
        async function getBoard() {
            const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
            const boardRequest = await boardResponse.json();
            setBoard(boardRequest.data);

            return boardRequest;
        }
        getBoard();
    }, []);
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {Object.values(pokemonContext.pokemons).map(
                    ({ id, name, img, type, values }, index) => (
                        <PokemonCard
                            className={s.card}
                            key={index}
                            id={id}
                            img={img}
                            name={name}
                            values={values}
                            type={type}
                            isActive
                            minimize
                        />
                    )
                )}
            </div>
            <div className={s.board}>
                {board.map((item) => (
                    <div
                        key={item.position}
                        className={s.boardPlate}
                        onClick={() => !item.card && handleClickBoardPlate(item.position)}
                    >
                        {item.card && <PokemonCard {...item} minimize />}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BoardPage;
