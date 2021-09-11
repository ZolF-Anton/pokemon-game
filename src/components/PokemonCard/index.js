import pStyle from './pokemonCard.module.css';
import cardBackSide from './assets/card-back-side.jpg';
import { useState } from 'react';

const PokemonCard = (props) => {
    const [isActive, setActive] = useState('false');
    const onClickF = () => {
        console.log('Pokemon name is:' + props.name);
        setActive(!isActive);
    };
    return (
        <div className={pStyle.root} onClick={onClickF}>
            <div
                className={`${pStyle.pokemonCard} ${
                    isActive === false ? pStyle.active : null
                }`}
            >
                <div className={pStyle.cardFront}>
                    <div className={`${pStyle.wrap} ${pStyle.front}`}>
                        <div className={pStyle.pokemon}>
                            <div className={pStyle.values}>
                                <div
                                    className={`${pStyle.count} ${pStyle.top}`}
                                >
                                    {props.values.top}
                                </div>
                                <div
                                    className={`${pStyle.count} ${pStyle.right}`}
                                >
                                    {props.values.right}
                                </div>
                                <div
                                    className={`${pStyle.count} ${pStyle.bottom}`}
                                >
                                    {props.values.bottom}
                                </div>
                                <div
                                    className={`${pStyle.count} ${pStyle.left}`}
                                >
                                    {props.values.left}
                                </div>
                            </div>
                            <div className={pStyle.imgContainer}>
                                <img src={props.img} alt={props.name} />
                            </div>
                            <div className={pStyle.info}>
                                <span className={pStyle.number}>
                                    #{props.id}
                                </span>
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
                        <img src={cardBackSide} alt='Сard Backed' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;