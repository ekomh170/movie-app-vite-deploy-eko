import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                <Container>{children}</Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
