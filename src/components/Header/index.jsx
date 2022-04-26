import hStyle from './header.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ title, descr, children, onClickButton }) => {
    const stylePic = title ? title : null;
    const history = useNavigate();

    const handleNavigate = () => {
        history('/game/start');
    };

    return (
        <header className={hStyle.root}>
            <div className={hStyle.forest}></div>
            <div className={hStyle.silhouette}></div>
            <div className={hStyle.moon}></div>
            <div className={hStyle.container}>
                <h1>{stylePic}</h1>
                <p>{children}</p>
                <Link to="/game/start">
                    <button>Start GAME!</button>
                </Link>
                <button onClick={handleNavigate}>Start History GAME!</button>
            </div>
        </header>
    );
};

export default Header;
