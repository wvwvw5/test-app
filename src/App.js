import React from 'react';
import './styles/main-page.css';
import Header from './components/Header';
import MainText from './components/MainText';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="main-page-QF5">
      <Header />
      <MainText />
      <Projects />
      <Contact />
      <Background />
    </div>
  );
}

export default App;
