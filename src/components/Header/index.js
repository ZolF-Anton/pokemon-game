import hStyle from './header.module.css';

const Header = (props) => {
    const stylePic = props.title ? props.title : null;
    return (
        <header className={hStyle.root}>
            <div className={hStyle.forest}></div>
            <div className={hStyle.container}>
                <h1>{stylePic}</h1>

                <p>{props.children}</p>
            </div>
        </header>
    );
};

export default Header;
