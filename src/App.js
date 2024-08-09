import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logements from './pages/Logements';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'; // Vérifiez l'importation correcte de Footer

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements" element={<Logements />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
