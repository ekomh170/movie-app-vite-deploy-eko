// Layout component for the application
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import CreateMovie from './pages/Create';
import PopularMovie from './pages/Popular';
import NowPlayingMovie from './pages/NowPlaying';
import TopRatedMovie from './pages/TopRated';

// Layout
import Layout from './Layout';

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-movie" element={<CreateMovie />} />
                    <Route path="/popular" element={<PopularMovie />} />
                    <Route path="/now-playing" element={<NowPlayingMovie />} />
                    <Route path="/top-rated" element={<TopRatedMovie />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
