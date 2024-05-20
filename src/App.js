import React from 'react';
import './CSS/main.css';
import Header from './components/header';
import Hero from './components/Hero';
import Autoline from './components/Autoline';
import About from './components/About';
import Experts from './components/Experts';
import Ruby from './components/Ruby';
import Awards from './components/Awards';
import Participants from './components/Participants';
import Form from "./components/Form";
import Footer from './components/Footer';

function App() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="App">
      <Header scrollToElement={scrollToElement}/>
      <Hero />
      <Autoline />
      <About />
      <Experts />
      <Ruby />
      <Awards />
      <Participants />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
