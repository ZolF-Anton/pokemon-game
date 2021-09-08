import lStyle from './layout.module.css';


const Layout = (props) => {
    console.log('props.colorBg:', props.colorBg);
    const stylePicker =
        props.descr === "color"
            ? { backgroundColor: '#e2e2e2' }
            : { backgroundImage: `url(${props.urlBg})`};
    //console.log('stylePicker:', stylePicker);
    //console.log('props.descr:', props.descr);
    return (
        <section className={lStyle.root} style={stylePicker}>
            <div className={lStyle.wrapper}>
                <article>
                    <div className={lStyle.title}>
                        <h3>{props.title}</h3>
                        <span className={lStyle.separator}></span>
                    </div>
                    <div className= {`${lStyle.desc} ${lStyle.full}`}>
                        <p>{props.descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;
//: { backgroundImage: `url(${background})`};