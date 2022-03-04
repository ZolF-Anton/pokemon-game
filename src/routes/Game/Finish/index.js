import { useEffect, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../../context/pokemonContext';
import { FireBaseContext } from '../../../context/firebaseContext';
//import { CardsContext } from '../../../context/cardsContext';
import PlayerBoard from '../Board/component/PlayerBoard';
import s from '../Finish/finish.module.css';
import cn from 'classnames';

const FinishPage = ({ bgActive }, ...props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { player1Cards, player2Cards, setSelectedPokemons } = useContext(PokemonContext);
    //const [twoArraysOfPokemons, setTwoArraysOfPokemons] = useContext(CardsContext);
    const { addPokemon } = useContext(FireBaseContext);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        if (!location.state) {
            navigate('/game', { replace: true });
        }
    }, [props]);

    const handleClickCard = (card) => {
        setSelectedCard(card);
    };

    const handleClickButton = (id) => {
        addPokemon({
            ...selectedCard,
            isActive: false,
            isSelected: false,
            possession: '',
        });

        navigate('/game', { replace: true });
    };

    return (
        <div className={s.root}>
            <div className={cn(s.playerOne, s.selected)}>
                <PlayerBoard
                    player={1}
                    cards={[...Object.values(player1Cards)]}
                    onClickCard={handleClickCard}
                />
            </div>
            <div className={s.buttonWrap}>
                <button
                    onClick={handleClickButton}
                    // disabled={selectedCard.id}
                >
                    Add selected pokemon
                </button>
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    className={s.playerTwo}
                    player={1}
                    cards={player2Cards}
                    onClickCard={handleClickCard}
                />
            </div>
        </div>
    );
};

export default FinishPage;
