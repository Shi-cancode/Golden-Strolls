// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/animated-stories" className="hover:text-gray-300">Animated Stories</Link></li>
        <li><Link to="/ancient-history" className="hover:text-gray-300">Ancient History</Link></li>
        <li><Link to="/modern-teachings" className="hover:text-gray-300">Modern Teachings</Link></li>
        <li><Link to="/new-releases" className="hover:text-gray-300">New Releases</Link></li>
        <li><Link to="/newsletter-signup" className="hover:text-gray-300">Newsletter Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
