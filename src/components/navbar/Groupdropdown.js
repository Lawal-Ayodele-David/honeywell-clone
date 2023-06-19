import React, { useState } from 'react';

const Groupdropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="relative">
              <button
                className="flex text-gray-950 hover:text-gray-500 px-3 focus:outline-none"
                
                onClick={toggleMenu}
              >
                The Group <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              {isOpen && (
                <div className="absolute mt-2 bg-gray-200 rounded-md border-2 border-amber-800 py-2 w-40">
                  <a href="/" className="block px-4 py-2 text-sm text-gray-950 hover:text-gray-500">
                    Our Companies
                  </a>
                </div>
              )}
            </div>
      );
};

export default Groupdropdown;
