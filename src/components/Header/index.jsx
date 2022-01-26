import hStyle from './header.module.css';

const Header = ({ title, descr, children, onClickButton }) => {
    const stylePic = title ? title : null;
    const handleClick = () => {
        console.log('#####: <Header />');
        onClickButton && onClickButton('game');
    };

    return (
        <header className={hStyle.root}>
            <div className={hStyle.forest}></div>
            <div className={hStyle.container}>
                <h1>{stylePic}</h1>

                <p>{children}</p>
                <button onClick={handleClick}>Start GAME!</button>
            </div>
        </header>
    );
};

export default Header;
