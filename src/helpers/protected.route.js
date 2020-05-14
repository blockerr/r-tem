import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth'

export const ProtectedRoute = ({ component: Component, layout: Layout }) => {
  return (
    <Route
      render={
        (props) => {
          if (auth.isAuthenticated()) {
            return <Layout><Component {...props} /></Layout>
          }
          else {
            return (
              <Redirect to={{
                pathname: '/login',
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