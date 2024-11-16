// src/App.js
import React from 'react';
import './App.css';
import BasicInfo from './components/Basicinfo';
import Work from './components/Work';
import TechList from './components/Techlist';
import Skills from './components/skills';
import DeveloperSetup from './components/Developersetup';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <BasicInfo />
      <Work />
      <TechList />
      <Skills />
      <DeveloperSetup />
      <footer>
        <p>© 2024 Tyler Wiens</p>
      </footer>
    </div>
  );
}

export default App;
