// Layout component for the application
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Pages
import Home from './pages/Home';
import CreateMovie from './pages/Create';
import PopularMovie from './pages/Popular';
import NowPlayingMovie from './pages/NowPlaying';
import TopRatedMovie from './pages/TopRated';

// Layout
import Layout from './Layout';

// Theme
import theme from './utils/constants/theme';
import GlobalStyle from './GlobalStyle';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-movie" element={<CreateMovie />} />
                    <Route path="/popular" element={<PopularMovie />} />
                    <Route path="/now-playing" element={<NowPlayingMovie />} />
                    <Route path="/top-rated" element={<TopRatedMovie />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
