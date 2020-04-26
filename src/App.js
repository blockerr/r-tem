import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navigation from './pages/navigation/navigation';
import Footer from './pages/footer/footer';
// import Slogan from './pages/slogan/slogan';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* <Route path='/' exact component={Test} /> */}
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
