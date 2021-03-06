import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import WorkMenu from './WorkMenu';
import TechStack from './TechStack';
import NavMenu from './NavMenu';

function App() {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => {
    let oldShow = show;
    setShow(!show);
    console.log('show', show);
  };

  return (
    <div className="App">
      <div className="nav-stuff">
        <NavBar showMenu={toggleMenu} show={show} />
        <NavMenu show={show} />
      </div>
      <div id="container">
        <Home />
        <AboutMe />
        <WorkMenu show={show} />
        <TechStack />
        <Contact />
      </div>
    </div>
  );
}

export default App;
