import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bgImg from './components/img/bg3.jpg';

const App = () => {
    return (
        <>
            <Header title="No m00n here" descr="An adventure of Pooh" />
            <Layout
                title="Chapter ONE"
                descr=" ...in which we are introduced to
                        Winnie-the-Pooh and some bees, and the stories begin"
                urlBg={bgImg}
            />
            <Layout
                title="Chapter TWO"
                descr=" ...in which Pooh goes visiting and gets
                        into a tight place"
                colorBg="#e2e2e2"
            />
            <Layout
                title="Chapter THREE"
                descr="...in which Pooh and piglet go hunting
                        and nearly catch a woozle"
                urlBg={bgImg}
            />
            <Footer />
        </>
    );
};

export default App;
