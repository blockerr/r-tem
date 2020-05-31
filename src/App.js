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
import HomeAdmin from './pages/admin/home/home';
import auth from './helpers/auth'

import {ProtectedRoute} from './helpers/protected.route';
import { AdminRoute } from './helpers/admin.route';
import NotFound from './pages/notfound/notfound';
import Layout from './pages/admin/layout/layout';

function App() {
  console.log(auth)
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Switch>
        <Route exact path='/' component={Navigation} layout={Navigation}/>
        <Route exact path='/login' component={Login} layout={LoginLayout}/>
        <ProtectedRoute exact path='/admin/home' component={HomeAdmin} layout={Admin} />
        <ProtectedRoute exact path='/admin/investor' component={Investor} layout={Admin} />
        {/* <ProtectedRoute exact path='/admin/employee' component={Employee} layout={Admin} /> */}
        <AdminRoute exact path='/admin/employee' component={Employee} layout={Admin} />
        <ProtectedRoute exact path='/admin/map' component={Maps} layout={Admin} />
        <ProtectedRoute exact path='/admin/layout' component={Layout} layout={Admin} />
        <ProtectedRoute exact path='/admin/camera' component={Camera} layout={Admin} />
        <Route exact path='*' component={NotFound}/>

          {/* {
            routers.map(({ name, path, component: Component, layout: Layout }) => (
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
          } */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
