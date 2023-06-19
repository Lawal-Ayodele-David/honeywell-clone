import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">Logo</a>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a href="/" className="navbar-item">Home</a>
          <a href="/" className="navbar-item">About</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="/" className="navbar-link">Dropdown</a>
            <div className="navbar-dropdown">
              <a href="/" className="navbar-item">Option 1</a>
              <a href="/" className="navbar-item">Option 2</a>
              <a href="/" className="navbar-item">Option 3</a>
            </div>
          </div>
        </div>
      </div>
      <button className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;