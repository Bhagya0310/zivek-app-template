'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteLogo, navigationLinks, footerLinks } from './constants';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay: 0.5 },
};

const slideInUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Instagram', href: '#' },
];

function Footer() {
  return (
    <motion.footer
      className="bg-black text-gray-300 py-8 px-6 md:px-12 lg:px-24"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={slideInUp.initial}
        animate={slideInUp.animate}
        transition={slideInUp.transition}
      >
        {/* Site Info & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{siteLogo}</h3>
          <p className="text-sm mb-4">
            Stay updated with the latest news, stories, and insights from around the globe.
          </p>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
              >
                {name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12h-18" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PAGES</h3>
          <ul>
            {['About us', 'News', 'Authors', 'Podcast', 'Newsletter Plans', 'Contact us'].map((item) => (
              <li key={item}>
                <Link href="#" className="block hover:text-gray-100 text-sm py-1">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CATEGORIES</h3>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className="block hover:text-gray-100 text-sm py-1">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
          <ul>
            <li>
              <Link href="#" className="block hover:text-gray-100 text-sm py-1">
                Advertise
              </Link>
            </li>
            {footerLinks.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className="block hover:text-gray-100 text-sm py-1">
                  {link.text}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" className="block hover:text-gray-100 text-sm py-1">
                License
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-gray-100 text-sm py-1">
                Changelog
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {siteLogo}. All rights reserved.</p>
        <p>
          Designed by{' '}
          <Link href="#" className="hover:text-gray-300">
            Your Company/Designer
          </Link>
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
