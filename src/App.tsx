import './App.css';

import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';


import EndFooter from './components/EndFooter';
import EarthMoon from "./pages/EarthMoon.tsx";
import Navbar from "./components/Navbar.tsx";
import ThreeJSDemos from "./pages/ThreeJSDemos.tsx";

function App() {

  return (
    <div className='app-container'>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
          <Route path="/three-js-demos" element={<ThreeJSDemos />} />
          <Route path="/earth-moon-three" element={<EarthMoon />} />
        </Switch>

        <EndFooter />

        <a onClick={goToTop} id="back-to-start"><img src="src/images/go-up-arrow.png"/></a>
      </Router>
    </div>
  )
}

function goToTop() {
  window.scrollTo(
    {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  );
}


export default App;