import { useState } from 'react';
import PokemonCard from '../../../../../components/PokemonCard';
import cn from 'classnames';
import s from './playerBoard.module.css';

const PlayerBoard = ({ player, cards, onClickCard, turnState }) => {
    const [isSelected, setSelected] = useState(null);
    console.log('###  player ###:', player);
    console.log('###  cards ###:', cards);

    return (
        <>
            {cards.map((item) => (
                <div
                    className={cn(s.cardBoard, { [s.selected]: isSelected === item.id })}
                    onClick={() => {
                        setSelected(item.id);
                        onClickCard && onClickCard({ player, ...item });
                    }}
                >
                    <PokemonCard
                        key={item.id}
                        name={item.name}
                        img={item.img}
                        id={item.id}
                        type={item.type}
                        values={item.values}
                        minimize
                        isActive
                    />
                </div>
            ))}
            <div className={cn({ [s.turnState]: turnState })}></div>
        </>
    );
};

export default PlayerBoard;
