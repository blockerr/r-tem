import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navigation from './pages/navigation/navigation';
// import Test from './pages/test/test';
import Home from './pages/home/home';
import Investor from './pages/investor/investor';
import Maps from './pages/map/map';
import Activity from './pages/activity/activity';
import About from './pages/about/about';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/investor' exact component={Investor} />
          <Route path='/map' exact component={Maps} />
          <Route path='/activity' exact component={Activity} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
