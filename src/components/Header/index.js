import hStyle from '../Header/header.css';

const Header = (props) => {
    console.log(hStyle);
    return (
        <header class="root" className={hStyle.root}>
            <div class="forest" className={hStyle.forest}></div>
            <div class="container" className={hStyle.container}>
                {props.title ? <h1>{props.title}</h1> : null}

                <p>{props.descr}</p>
            </div>
        </header>
    );
};

export default Header;
