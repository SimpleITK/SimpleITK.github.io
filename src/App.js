import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Hero from './components/Hero';
import Featurettes from './components/Featurette';
import Footer from './components/Footer';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
        <Featurettes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
