import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import WorkMenu from './WorkMenu';

function App() {
  const [show, setShow] = React.useState(false);
  const showMenu = () => {
    setShow(true);
    console.log('show', show);
  };
  const hideMenu = () => {
    setShow(false);
  };
  return (
    <div className="App">
      <div className="nav-stuff">
        <NavBar showMenu={showMenu} />
        <WorkMenu show={show} />
      </div>
      <div id="container">
        <Home />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

export default App;
