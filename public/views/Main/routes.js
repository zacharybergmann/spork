import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import AuthService from '../../utils/AuthService';
import Container from './Container';
import Home from './Home/Home';
import Login from './Login/Login';
import Profile from './Profile/Profile';

// TODO: const auth = new AuthService(someidkey, youremail);

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="profile" component={Profile} onEnter={requireAuth} />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeMainRoutes
