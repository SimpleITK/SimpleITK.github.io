import React from 'react';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Featurettes from './components/Featurette';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Featurettes />
      <Footer />
    </div>
  );
};

export default App;
