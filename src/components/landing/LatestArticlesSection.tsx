'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { latestArticles } from './constants';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

function LatestArticlesSection() {
  return (
    <motion.section
      className="py-10 px-6 bg-gray-100"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={{ delay: 0.4 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">LATEST NEWS</h2>
          <Link href="/news" className="text-blue-500 font-medium text-sm flex items-center gap-1">
            VIEW ALL
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 5.29a.75.75 0 011.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          {latestArticles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden h-[400px]"
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" />
              </div>
              <div className="flex flex-col justify-between p-4 flex-grow">
                <p className="text-xs text-gray-500 mb-2">
                  {article.category} - {article.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-3">
                  <Link href={article.href} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
                <Link href={article.href} className="text-blue-500 text-sm font-medium mt-auto">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default LatestArticlesSection;
