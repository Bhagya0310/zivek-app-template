'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { siteLogo, navigationLinks } from './constants';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="bg-white shadow-md py-4 px-6 md:px-12 lg:px-24"
        {...fadeIn}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-gray-800">
            {siteLogo}
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-gray-600 hover:text-gray-800"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button className="bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 focus:outline-none">
              SUBSCRIBE
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="focus:outline-none"
              title="Menu"
            >
              <span className="sr-only">Open Menu</span>
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Side Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="fixed top-0 right-0 z-50 w-64 bg-white p-6 h-full shadow-lg"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-4xl text-gray-600"
              aria-label="Close Menu"
            >
              &times;
            </button>

            <nav className="flex flex-col items-start space-y-6 text-xl font-medium">
              {navigationLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600"
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
