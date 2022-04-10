import { useEffect } from 'react';
import Profile from './components/Profile';
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
        <Profile/>
        <Links/>
      </div>
    </div>
  )
}

export default App;
