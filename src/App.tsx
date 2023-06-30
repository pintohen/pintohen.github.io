import './App.css';

import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';


import EndFooter from './components/EndFooter';

function App() {
  let homeTitle = 'Henrique Pinto | Home';
  let aboutMeTitle = 'Henrique Pinto | About Me';

  return (
    <>
      <Router>
        <nav className="navbar fixed-top">
          <a className="navbarLinks closingTag">
            &lt;&#47;&gt; 
          </a>
          <Link to="/" className="navbarLinks">Home</Link>
          <Link to="/about-me" className="navbarLinks">About Me</Link>
          <Link to="https://github.com/pintohen" target="_blank" className="navbarLinks">My GitHub</Link>
          <Link to="https://www.linkedin.com/in/henrique-pinto-66b714240" target="_blank" className="navbarLinks">My LinkedIn</Link>
        </nav>

        <Switch>
          <Route path="/about-me" element={<AboutMe title={aboutMeTitle}/>} />
          <Route path="/" element={<Home title={homeTitle} />} />
        </Switch>

        <EndFooter />

        <a onClick={goToTop} id="back-to-start"><img src="src/images/go-up-arrow.png"/></a>
      </Router>
    </>
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