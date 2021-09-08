import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header title="No m00n here" descr="try to find" />

            <Layout title="Chapter ONE" decsr="img" urlBg="./img/bg3.jpg" colorBg="" />
            <Layout title="Chapter TWO" decsr="color" urlBg="" colorBg="#e2e2e2" />
            <Layout title="Chapter THREE" decsr="img" urlBg="" colorBg="" />

            <Footer />
        </>
    );
};

export default App;
