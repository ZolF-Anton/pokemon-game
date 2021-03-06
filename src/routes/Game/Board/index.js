import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../../context/pokemonContext';
//import { CardsContext } from '../../../context/cardsContext';
import PokemonCard from '../../../components/PokemonCard';
import s from './board.module.css';
import PlayerBoard from './component/PlayerBoard';
import Result from '../../../components/Result/Result';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;
    board.forEach((item) => {
        if (item.card.possession === 'red') {
            player2Count++;
        }
        if (item.card.possession === 'blue') {
            player1Count++;
        }
    });
    return [player1Count, player2Count];
};

const BoardPage = () => {
    const pokemonContext = useContext(PokemonContext);
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemonContext.pokemons).map((item) => ({
            ...item,
            possession: 'blue',
        }));
    });
    const [player2, setPlayer2] = useState([]);
    const [fullPlayer2, setFullPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);
    const [winner, setWinner] = useState(null);

    const navigate = useNavigate();

    const handleClickBoardPlate = async (position) => {
        console.log('###### position', position);
        console.log('###### choiceCard', choiceCard);

        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            };
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            const request = await res.json();
            console.log('#### request:', request);

            if (choiceCard.player === 1) {
                setPlayer1((pervState) => pervState.filter((item) => item.id !== choiceCard.id));
            }

            if (choiceCard.player === 2) {
                setPlayer2((pervState) => pervState.filter((item) => item.id !== choiceCard.id));
            }
            setBoard(request.data);
            setSteps((perv) => {
                const count = perv + 1;
                return count;
            });
        }
    };

    if (!Object.keys(pokemonContext.pokemons)) {
        navigate('/', { replace: true });
    }

    useEffect(() => {
        async function getBoard() {
            const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
            const boardRequest = await boardResponse.json();
            setBoard(boardRequest.data);
        }
        async function getBoard2() {
            const player2Response = await fetch(
                'https://reactmarathon-api.netlify.app/api/create-player'
            );
            const player2Request = await player2Response.json();
            console.log('player2Request:', player2Request);
            setFullPlayer2(player2Request);
            setPlayer2(() => {
                return player2Request.data.map((item) => ({
                    ...item,
                    possession: 'red',
                }));
            });
            setFullPlayer2(player2);
        }
        getBoard();
        getBoard2();
    }, []);

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);
            if (count1 > count2) {
                setWinner('win');
            } else if (count1 < count2) {
                setWinner('lose');
            } else {
                alert('draw');
                setWinner('draw');
                navigate('/game/finish', true);
            }
        }
    }, [steps]);

    const handleStartGame = () => {
        if (winner === 'win') {
            navigate('/game/finish', {
                replace: true,
                state: { player2: fullPlayer2, testMSG: 'fine' },
            });
        } else {
            navigate('/game/start', {
                replace: true,
                state: player1,
            });
            pokemonContext.pokemons && pokemonContext.pokemonsSet({});
        }
    };

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1}
                    onClickCard={(card) => setChoiceCard(card)}
                    turnState={Boolean(steps % 2)}
                />
            </div>
            <div className={s.board}>
                {board.map((item) => (
                    <div
                        key={item.position}
                        className={s.boardPlate}
                        onClick={() => !item.card && handleClickBoardPlate(item.position)}
                    >
                        {item.card && <PokemonCard {...item.card} isActive minimize />}
                    </div>
                ))}
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={(card) => setChoiceCard(card)}
                    turnState={!Boolean(steps % 2)}
                />
            </div>
            {steps === 9 && <Result type={winner} handleStartGame={handleStartGame} />}
        </div>
    );
};
export default BoardPage;
