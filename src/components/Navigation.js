import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.CREATE_ACCOUNT}>Create Account</Link></li>
      <li><Link to={routes.ADMIN_HOME}>Administration</Link></li>
      <li><Link to={routes.NESTING}>Nesting Form</Link></li>
    </ul>
  </div>

export default Navigation;