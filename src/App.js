import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './pages/navigation/navigation';
import Admin from './layout/admin/admin';
import Investor from './pages/admin/investors/investor'

const routers = [
  { name: 'Admin', path: '/admin', component: Investor, layout: Admin },
  { name: 'User', path: '/', component: Navigation, layout: Navigation }
]

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
        {
            routers.map(({name, path, component: Component, layout: Layout}) => (
              <Route
                key={name}
                exact
                path={path}
                render={(props) => (
                  <Layout>
                    <Component {...props} />
                  </Layout>
                )}
              />
            ))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
