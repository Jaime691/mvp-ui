import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
  <nav>
    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        listStyle: 'none'
      }}
    >
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>
);
export default Header;
