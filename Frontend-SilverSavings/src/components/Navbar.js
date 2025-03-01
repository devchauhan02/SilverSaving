import React from 'react';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("userID")
  const Logout = ()=>{
    localStorage.removeItem('userID')
    window.location.href = '/'
  }
  return (
    <nav className='official-navbar'>
      <div>
        <h3>Silver Savings</h3>
      </div>
      <div>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/calculate">Calculate</a></li>
          <li><a href="/keyfeatures">Key Features</a></li>
          {isLoggedIn ? <li onClick={Logout} className='cursor'>Logout</li> : <li><a href="/">Login</a></li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
