import './App.css';
import {useState} from 'react'
import { Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ?   setTheme('dark') : setTheme('light')
  }
  
  return (
  <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/about" element={<AboutUs/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
