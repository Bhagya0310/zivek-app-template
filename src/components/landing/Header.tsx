'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from './constants';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <motion.header className="bg-white border-b border-gray-200" {...fadeIn}>
        <div className="w-full px-4 md:px-6 lg:px-8 py-4 flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="https://cdn.prod.website-files.com/66eac38ea29fd1de7449fa8c/6753d2f13b12e59825fec6e6_zivek.svg"
              alt="Zivek Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Right Section */}
          <div className="ml-auto flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search here"
                className="border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:border-blue-500"
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

            {/* Subscribe Button */}
            <button className="bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 hidden sm:block">
              SUBSCRIBE
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="focus:outline-none rounded-full p-2 border-2 border-gray-600 hover:bg-gray-100"
              title="Menu"
            >
              <span className="sr-only">Open Menu</span>
              <svg
                className="h-4 w-4 text-gray-600"
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

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 hidden md:block">
        <div className="w-full px-4 md:px-6 lg:px-8 py-2 flex space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Sidebar */}
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

            <nav className="flex flex-col items-start space-y-6 text-xl font-medium mt-12">
              {navigationLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600 font-bold"
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
