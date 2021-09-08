import lStyle from '../Layout/layout.css';
import background from '../img/bg3.jpg';

const Layout = (props) => {
    //console.log('props.title:', props.title);
    const stylePicker =
        props.desc === 'img'
            ? { backgroundImage: `url(${background})` }
            : { backgroundColor: '#e2e2e2' };
    return (
        <section className="root" style={stylePicker}>
            <div className={lStyle.wrapper}>
                <article>
                    <div className={lStyle.title}>
                        <h3>{props.title}</h3>
                        <span className={lStyle.separator}></span>
                    </div>
                    <div class="desc full">
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;
