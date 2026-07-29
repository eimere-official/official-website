import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import Footer from './components/Footer';

// Component to handle scrolling to hash links when routing
function ScrollToHashElement() {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToHashElement />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<PlaceholderPage />} />
            <Route path="/services/:id" element={<PlaceholderPage />} />
            <Route path="/industries" element={<PlaceholderPage />} />
            <Route path="/industries/:id" element={<PlaceholderPage />} />
            <Route path="/case-studies" element={<PlaceholderPage />} />
            <Route path="/case-studies/:id" element={<PlaceholderPage />} />
            <Route path="/about" element={<PlaceholderPage />} />
            <Route path="/contact" element={<PlaceholderPage />} />
            <Route path="*" element={<PlaceholderPage />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
