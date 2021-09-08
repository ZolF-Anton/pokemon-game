import s from './style.module.css';
const HeaderBlock = ({ title, hideBackground = false }) => {
    const styleRoot = hideBackground ? { backgroundImage: 'none' } : {};
    return (
        <div className={s.root} style={styleRoot}>
            <div>
                <h1 className={s.header}>{title}</h1>

                <p>Triplr triad Card Game</p>
            </div>
        </div>
    );
};

export default HeaderBlock;
