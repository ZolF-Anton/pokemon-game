import fStyle from '../Footer/footer.css';

const Footer = (props) => {
    console.log('fStyle:', fStyle);
    return (
        <footer>
            <div className={fStyle.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    );
};

export default Footer;
