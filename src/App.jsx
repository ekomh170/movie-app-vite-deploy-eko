// Import komponen dan library utama
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Import halaman utama aplikasi
import Home from "./pages/Home";
import CreateMovie from "./pages/Create";
import PopularMovie from "./pages/Popular";
import NowPlayingMovie from "./pages/NowPlaying";
import TopRatedMovie from "./pages/TopRated";
import DetailMovie from "./pages/Detail"; // Import halaman Detail (bukan komponen detail movie)

// Import layout dan style global
import Layout from "./Layout";
import theme from "./utils/constants/theme";
import GlobalStyle from "./GlobalStyle";

/**
 * Komponen utama App
 * Mengatur ThemeProvider, GlobalStyle, Layout, dan Routing aplikasi
 */
function App() {
    return (
        // ThemeProvider untuk styled-components agar theme bisa diakses di seluruh komponen
        <ThemeProvider theme={theme}>
            {/* GlobalStyle untuk reset dan style global */}
            <GlobalStyle />
            {/* Layout utama aplikasi (Navbar, Footer, dsb) */}
            <Layout>
                {/* Routing aplikasi menggunakan react-router-dom */}
                <Routes>
                    {/* Halaman utama */}
                    <Route path="/" element={<Home />} />
                    {/* Halaman tambah movie */}
                    <Route path="/add-movie" element={<CreateMovie />} />
                    {/* Halaman popular, now playing, top rated */}
                    <Route path="/popular" element={<PopularMovie />} />
                    <Route path="/now-playing" element={<NowPlayingMovie />} />
                    <Route path="/top-rated" element={<TopRatedMovie />} />
                    {/* Routing dinamis untuk halaman detail, menerima param id TMDB */}
                    <Route path="/detail/:id" element={<DetailMovie />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
