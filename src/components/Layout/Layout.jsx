import Footer from '../Footer';
import Header from '../Header';

const Layout = (props) => {
    return (
        <section>
            <Header />
            {props.children}
            <Footer />
        </section>
    );
};

Layout.propTypes = {};

export default Layout;
