// Import Navbar, Hero, Movies, Footer Component
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import Footer from '../components/Footer/Footer';

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Movies />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
