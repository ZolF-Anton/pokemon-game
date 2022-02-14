import pStyle from './pokemonCard.module.css';
import cn from 'classnames';
import cardBackSide from './assets/card-back-side.jpg';

const PokemonCard = ({
    className,
    minimize,
    onClickF,
    type,
    values,
    name,
    id,
    img,
    isActive,
    isSelected,
    keyUniq,
}) => {
    const onClickF1 = () => onClickF(keyUniq);

    return (
        <>
            <div
                className={cn(className, pStyle.pokemonCard, {
                    [pStyle.active]: isActive,
                    [pStyle.selected]: isSelected,
                })}
                onClick={onClickF1}
            >
                <div className={pStyle.cardFront}>
                    <div className={cn(pStyle.wrap, pStyle.front)}>
                        <div className={cn(pStyle.pokemon, pStyle[type])}>
                            <div className={pStyle.values}>
                                <div className={cn(pStyle.count, pStyle.top)}>{values.top}</div>
                                <div className={cn(pStyle.count, pStyle.right)}>{values.right}</div>
                                <div className={cn(pStyle.count, pStyle.bottom)}>
                                    {values.bottom}
                                </div>
                                <div className={cn(pStyle.count, pStyle.left)}>{values.left}</div>
                            </div>
                            <div className={pStyle.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            {!minimize && (
                                <div className={pStyle.info}>
                                    <span className={pStyle.number}>#{id}</span>
                                    <h3 className={pStyle.name}>{name}</h3>
                                    <small className={pStyle.type}>
                                        Type: <span>{type}</span>
                                    </small>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={pStyle.cardBack}>
                    <div className={`${pStyle.wrap} ${pStyle.back}`}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PokemonCard;
