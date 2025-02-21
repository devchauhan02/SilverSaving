// Layout.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import OTPVerificationPage from './OTPVerificationPage';
// Import other components

const Layout = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/verify-otp" component={OTPVerificationPage} />
          {/* Add other routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
