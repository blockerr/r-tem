import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './pages/navigation/navigation';
import Admin from './layout/admin/admin';
import Investor from './pages/admin/investors/investor'
import Employee from './pages/admin/employees/employee';
import Maps from './pages/admin/maps/maps';
import Camera from './pages/admin/cameras/camera';
import Login from './pages/login/login';
import LoginLayout from './layout/login/login';

const routers = [
  { name: 'Investor', path: '/admin/investor', component: Investor, layout: Admin },
  { name: 'Employee', path: '/admin/employee', component: Employee, layout: Admin },
  { name: 'Maps', path: '/admin/map', component: Maps, layout: Admin },
  { name: 'Camera', path: '/admin/camera', component: Camera, layout: Admin },
  { name: 'User', path: '/', component: Navigation, layout: Navigation },
  { name: 'Login', path: '/login', component: Login, layout: LoginLayout },
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
