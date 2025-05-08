'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { businessPageArticles } from '@/components/landing/constants';

const BusinessPage: React.FC = () => {
  const filteredArticles = businessPageArticles.filter((a) => a.category === 'Business');

  return (
    <div className="bg-white">
      <Head>
        <title>Business News</title>
      </Head>

      <Header />

      <main className="w-full px-2 sm:px-4 lg:px-6 py-10 lg:py-14">
        <h1 className="text-5xl font-bold text-black mb-12">BUSINESS</h1>

        <div className="space-y-16">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.href}
              className="flex flex-col lg:flex-row border border-gray-200 rounded-md overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-full lg:w-[35%] h-[320px]" 
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              <div className="w-full lg:w-[52%] p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="text-sm uppercase tracking-wide text-gray-500 mb-3">
                    {article.category}
                    <span className="mx-2 text-gray-400">—</span>
                    {article.date}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-black leading-snug mb-4">
                    {article.title}
                  </h2>
                  {article.text && (
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                      {article.text}
                    </p>
                  )}
                </div>
                <Link
                  href={article.href}
                  className="text-sm font-semibold text-black hover:underline inline-flex items-center"
                >
                  READ MORE
                  <Image
                    src="https://cdn.prod.website-files.com/66eac38ea29fd1de7449fa8c/6753fbb4eb733f845b9e0be3_ic-arrow.svg"
                    alt="arrow"
                    width={18}
                    height={18}
                    className="ml-2"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPage;
