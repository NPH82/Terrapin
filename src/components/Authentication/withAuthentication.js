import React from 'react';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        authUser: null,
        loginAttempts: 0,
        lastLoginAttempt: 0,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });

      // Check for session timeout
      this.checkSessionTimeout();
    }

    checkSessionTimeout = () => {
      const sessionTimeout = process.env.REACT_APP_SESSION_TIMEOUT || 3600000; // 1 hour default
      const lastActivity = localStorage.getItem('lastActivity');
      
      if (lastActivity && (Date.now() - parseInt(lastActivity)) > sessionTimeout) {
        this.handleLogout();
      }
      
      // Update last activity
      localStorage.setItem('lastActivity', Date.now().toString());
    }

    handleLogout = () => {
      firebase.auth.signOut();
      localStorage.removeItem('lastActivity');
      this.setState({ authUser: null });
    }

    checkRateLimit = () => {
      const maxAttempts = process.env.REACT_APP_MAX_LOGIN_ATTEMPTS || 5;
      const lockoutDuration = 15 * 60 * 1000; // 15 minutes
      
      const now = Date.now();
      const timeSinceLastAttempt = now - this.state.lastLoginAttempt;
      
      // Reset attempts if enough time has passed
      if (timeSinceLastAttempt > lockoutDuration) {
        this.setState({ loginAttempts: 0 });
      }
      
      // Check if user is locked out
      if (this.state.loginAttempts >= maxAttempts) {
        throw new Error('Too many login attempts. Please try again later.');
      }
      
      // Increment attempts
      this.setState(prevState => ({
        loginAttempts: prevState.loginAttempts + 1,
        lastLoginAttempt: now
      }));
    }

    render() {
      const { authUser } = this.state;

      return(
        <AuthUserContext.Provider value={authUser}>
          <Component 
            checkRateLimit={this.checkRateLimit}
            handleLogout={this.handleLogout}
          />
        </AuthUserContext.Provider>
      );
    }
  }

  return withAuthentication;
}

export default withAuthentication;