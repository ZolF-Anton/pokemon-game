import { useEffect, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../../context/pokemonContext';
import { FireBaseContext } from '../../../context/firebaseContext';
import PlayerBoard from '../Board/component/PlayerBoard';
import s from '../Finish/finish.module.css';
import cn from 'classnames';

const FinishPage = ({ bgActive }, ...props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pokemons, onSelectedPokemons } = useContext(PokemonContext);
    const { addPokemon } = useContext(FireBaseContext);
    const [selectedCard, setSelectedCard] = useState(null);

    console.log('#####location.state#####:', location);
    // if (!location.state) {
    //     console.log('#####useEffWorking######');
    //     return navigate('/game', { replace: true });
    // }

    useEffect(() => {
        console.log('#####111111useEffWorking######');
        if (location.state === null) {
            console.log('#####useEffWorking######');
            navigate('/game/start', { replace: true });
        }
    }, [location.state, navigate]); /// замена - было props

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

        navigate('/game/start', { replace: true });
    };

    return (
        <div className={s.root}>
            <div className={cn(s.playerOne, s.selected)}>
                <PlayerBoard
                    player={1}
                    //cards={[...Object.values(player1Cards)]}
                    cards={[...Object.values(pokemons)]}
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
                    player={1}
                    cards={[]}
                    //cards={location.state.player2}
                    onClickCard={handleClickCard}
                />
            </div>
        </div>
    );
};

export default FinishPage;
