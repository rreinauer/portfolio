import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="container">
        <Home />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

export default App;
