import fStyle from './footer.module.css';

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer>
            <div className={fStyle.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 - {date} #ReactMarathon.</p>
            </div>
        </footer>
    );
};

export default Footer;
