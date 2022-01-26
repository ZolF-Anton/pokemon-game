import pStyle from './pokemonCard.module.css';
import cn from 'classnames';
import cardBackSide from './assets/card-back-side.jpg';
import { useState } from 'react';

const PokemonCard = (props) => {
    const [isActive, setActive] = useState(false);
    const onClickF = () => setActive(!isActive);
    console.log(props.type);

    return (
        <div className={pStyle.root} onClick={onClickF}>
            <div className={cn(pStyle.pokemonCard, { [pStyle.active]: isActive })}>
                <div className={pStyle.cardFront}>
                    <div className={cn(pStyle.wrap, pStyle.front)}>
                        <div className={cn(pStyle.pokemon, pStyle[props.type])}>
                            <div className={pStyle.values}>
                                <div className={cn(pStyle.count, pStyle.top)}>
                                    {props.values.top}
                                </div>
                                <div className={cn(pStyle.count, pStyle.right)}>
                                    {props.values.right}
                                </div>
                                <div className={cn(pStyle.count, pStyle.bottom)}>
                                    {props.values.bottom}
                                </div>
                                <div className={cn(pStyle.count, pStyle.left)}>
                                    {props.values.left}
                                </div>
                            </div>
                            <div className={pStyle.imgContainer}>
                                <img src={props.img} alt={props.name} />
                            </div>
                            <div className={pStyle.info}>
                                <span className={pStyle.number}>#{props.id}</span>
                                <h3 className={pStyle.name}>{props.name}</h3>
                                <small className={pStyle.type}>
                                    Type: <span>{props.type}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={pStyle.cardBack}>
                    <div className={`${pStyle.wrap} ${pStyle.back}`}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
