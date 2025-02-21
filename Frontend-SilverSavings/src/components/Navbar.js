import React from 'react';

const Navbar = () => {
  return (
    <navbar>
      <div>
        <h3>Silver Savings</h3>
      </div>
      <div>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/calculate">Calculate</a></li>
          <li><a href="/keyfeatures">Key Features</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
