import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {logo} from '../../access/index';
import { menuItems } from './menuItems';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //code to use the scroll from the navbar either opaque or transparent
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  // code to show submenu dropdown navbar

  const toggleMenu2 = (index) => {
    if (openSubMenuIndex === index) {
      setOpenSubMenuIndex(null);
    } else {
      setOpenSubMenuIndex(index);
    }
  };

  

  return (
    <nav className={`${isScrolled ? 'transparent' : 'opaque'} absolute z-40 sticky top-0 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 py-5 px-10`}>
      {/* Navbar content */} 
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and title */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="h-8 mr-3"
            alt="David Logo"
          />
        </Link>
        {/* Menu toggle button */}
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          className={`${
            isMenuOpen ? ' ' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          {/* Menu items */}
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            {/* Menu items go here */}  

        {/** dropdown menu */}
        <div className=" md:flex">
            {menuItems.map((item, index) => {
              if (item.submenu) {
                return (
                  <div className="relative" key={index}>
                    <button
                      className="flex text-gray-950 hover:text-gray-500 px-3 focus:outline-none"
                      aria-controls="navbar-dropdown"
                      aria-expanded={isMenuOpen}
                      onClick={() => toggleMenu2(index)}
                    >
                      {item.title} <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    {openSubMenuIndex === index && (
                      <div className="md:absolute mt-2 bg-gray-200 rounded-md border-2 border-amber-800 py-2 w-40 min-sm:py-10">
                        {item.submenu.map((submenuItem, subIndex) => (
                          <a
                            href={submenuItem.link}
                            className="block text-gray-80 px-4 py-2 text-sm text-gray-950 hover:text-gray-500"
                            key={subIndex}
                          >
                            {submenuItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <a
                    href={item.link}
                    className="text-gray-800 hover:text-gray-500 px-3" aria-current='page'
                    key={index}
                  >
                    {item.title}
                  </a>
                );
              }
            })}
          </div>
          </ul>
        </div>
      </div> 
    </nav>
  );
};

export default Navbar; 