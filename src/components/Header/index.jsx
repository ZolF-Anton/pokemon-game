import hStyle from './header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ title, descr, children, onClickButton }) => {
    const stylePic = title ? title : null;

    return (
        <header className={hStyle.root}>
            <div className={hStyle.forest}></div>
            <div className={hStyle.container}>
                <h1>{stylePic}</h1>

                <p>{children}</p>
                <Link to="/game">
                    <button>Start GAME!</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
