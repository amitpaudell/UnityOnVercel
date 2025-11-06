import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigations = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Us',
      href: 'aboutus',
    },
    {
      name: 'Services',
      href: 'services',
    },
    {
      name: 'Projects',
      href: 'projects',
    },
    {
      name: 'Contact Us',
      href: 'contact',
    },
  ];
  return (
    <div>
      <nav>
        <div className="flex  text-xl justify-between relative container mx-auto h-[4rem] p-6">
          {/* Logo */}
          <div>
            <a href="/">
              <h1 className="font-bold uppercase text-xl text-dark-grayish-blue">
                Unity Construction
              </h1>
            </a>
          </div>

          {/* Items */}
          <div className="hidden md:flex space-x-6 text-md">
            {navigations.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  className="hover:text-dark-grayish-blue"
                  to={item.href}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center text-dark-grayish-blue"
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Mobile dropdown */}
          {isMobileOpen && (
            <div className="md:hidden absolute right-6 top-[4rem] w-56 rounded-2xl bg-[#f2f4f7] shadow-lg  ">
              <div className="flex flex-col ">
                {navigations.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="px-4 py-3 text-sm hover:bg-white/50 hover:text-dark-grayish-blue"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
