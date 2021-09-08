import fStyle from './footer.module.css';

const Footer = () => {
    
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
