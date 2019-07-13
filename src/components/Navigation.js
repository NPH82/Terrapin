import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './Authentication/AuthUserContext';

const Navigation = () =>
  <AuthUserContext.Consumer>
    { authUser => authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

  const NavigationAuth = () =>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.CREATE_ACCOUNT}>Create Account</Link></li>
      <li><Link to={routes.ADMIN_HOME}>Administration</Link></li>
      <li><Link to={routes.NESTING}>Nesting Form</Link></li>
      <li><SignOutButton /></li>
    </ul>
  
  const NavigationNonAuth = () =>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
    </ul>

export default Navigation;