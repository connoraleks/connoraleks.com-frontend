import { useEffect } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Links from './components/Links';
import './styles/App.css'
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    setTimeout(() => window.scrollTo({
      top: -1,
      behavior: 'smooth'
    }), 0)
  }, []);
  return (
    <div className="container">
      <Navbar/>
      <div className="intro">
        <LandingPage/>
        <Links/>
      </div>
    </div>
  )
}

export default App;
