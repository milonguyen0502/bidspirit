import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import UpcomingPage from './components/UpcomingPage';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About'; // Import the About component
import './App.css';

function App() {
  const [language, setLanguage] = useState('EN');
  const [showInput, setShowInput] = useState(false);
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('UpcomingAuction.json');
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error('Error fetching auctions data:', error);
      }
    };

    fetchAuctions();
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'EN' ? 'VN' : 'EN'));
  };

  const toggleSearchInput = () => {
    setShowInput(!showInput);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowInput(true);
      } else {
        setShowInput(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <nav>
        <Link to="/">
          <img src="logo.png" alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li className="dropdown">
            <Link to="/">THE AUCTION</Link>
            <div className="dropdown-content">
              <Link to="/upcoming">Upcoming Page</Link>
            </div>
          </li>
          <li><Link to="/buy-now">BUY NOW</Link></li>
          <li><Link to="/helps">SELL</Link></li>
        </ul>
        <div className="search-container">
          <i className="fa fa-search search-icon" onClick={toggleSearchInput}></i>
          <div className={`input-wrapper ${showInput ? 'show' : ''}`}>
            <input className={`nav-input ${showInput ? 'show' : ''}`} placeholder="Search" />
            {showInput && (
              <button className="close-icon" onClick={toggleSearchInput}>&times;</button>
            )}
          </div>
        </div>
        <div className="btn-nav">
          <button onClick={toggleLanguage}>{language}</button>
          <button><i className="fa fa-user-circle-o" aria-hidden="true"></i></button>
          <button><i className="fa fa-heart-o" aria-hidden="true"></i></button>
        </div>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upcoming" element={<UpcomingPage auctions={auctions} />} />
          <Route path="/product/:id" element={<ProductDetail auctions={auctions} />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
