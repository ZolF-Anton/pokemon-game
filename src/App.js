import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bgImg from  './components/img/bg3.jpg';

const App = () => {
    return (
        <>
            <Header title="No m00n here" descr="try to find" />

            <Layout title="Chapter ONE" descr="img" urlBg={bgImg} colorBg="" />
            <Layout title="Chapter TWO" descr="color" urlBg="" colorBg="#e2e2e2" />
            <Layout title="Chapter THREE" descr="img" urlBg={bgImg} colorBg="" />

            <Footer />
        </>
    );
};

export default App;
