import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth'

export const AdminRoute = ({ component: Component, layout: Layout }) => {
  return (
    <Route
      render={
        (props) => {
          if (auth.isAuthenticated() && auth.isAdmin === true) {
            return <Layout><Component {...props} /></Layout>
          }
          else {
            return (
              <Redirect to={{
                pathname: '/admin/home',
                state: {
                  from: props.location
                }
              }}
              />
            );
          }
        }}
    />
  )
}