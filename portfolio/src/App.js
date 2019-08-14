import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
