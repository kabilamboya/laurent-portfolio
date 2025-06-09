// src/App.js
import React from 'react';
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import OngoingProjects from './components/OngoingProjects';
import CompletedProjects from './components/CompletedProjects';
import TechTip from './components/TechTip';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Introduction />
      <Hero />
      <OngoingProjects />
      <CompletedProjects />
      <TechTip />
      <Footer />
    </div>
  );
}

export default App;
