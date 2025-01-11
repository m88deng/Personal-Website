import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Headroom from 'react-headroom';
// import Header from './components/Header';
import Hero from './components/Hero';
import HomePage from './pages/HomePage';
import Artworks from './components/illustration/Artworks';
import EeilCitationPage from './pages/projectPages/EeilCitationPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>

      <Hero />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/illustrations" element={<Artworks />} />
        <Route path="/eeilcitation" element={<EeilCitationPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
