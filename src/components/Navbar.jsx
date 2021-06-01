import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const MyLinks = [
    { to: '/', text: 'Home' },
    { to: '/stared', text: 'Stared' },
  ];
  return (
    <div>
      <ul>
        {MyLinks.map((item) => (
          <li ket={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
