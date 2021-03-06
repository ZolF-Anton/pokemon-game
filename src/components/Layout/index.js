import lStyle from './layout.module.css';

const Layout = (props) => {
    const stylePicker = props.colorBg
        ? { backgroundColor: '#e2e2e2' }
        : { backgroundImage: `url(${props.urlBg})` };
    return (
        <section className={lStyle.root} style={stylePicker}>
            <div className={lStyle.wrapper}>
                <article>
                    <div className={lStyle.title}>
                        <h3>{props.title}</h3>
                        <span className={lStyle.separator}></span>
                    </div>
                    <div className={`${lStyle.desc} ${lStyle.full}`}>{props.children}</div>
                </article>
            </div>
        </section>
    );
};

export default Layout;
