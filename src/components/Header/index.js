import hStyle from '../Header/header.css';

const Header = (props) => {
    console.log(hStyle);
    return (
        <header className="root">
            <div className={hStyle.forest}></div>
            <div className={hStyle.container}>
                {props.title ? <h1>{props.title}</h1> : null}

                <p>{props.descr}</p>
            </div>
        </header>
    );
};

export default Header;
