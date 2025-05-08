'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import { motion } from 'framer-motion'
import { culturePageArticles } from '@/components/landing/constants'

const CulturePage: React.FC = () => {
  const cultureArticles = culturePageArticles.filter((a) => a.category === 'Culture')

  return (
    <div className="bg-white">
      <Head>
        <title>Culture News</title>
        <meta
          name="description"
          content="Explore the latest in cultural news and stories across generations."
        />
      </Head>

      <Header />

      <main className="w-full px-2 sm:px-4 lg:px-6 py-10 lg:py-14">
      <h1 className="text-5xl font-bold text-black mb-12">
          CULTURE
        </h1>

        <div className="grid grid-cols-1 gap-y-10 lg:gap-y-14">
          {cultureArticles.map((article, index) => (
            <motion.article
              key={article.href}
              className="flex flex-col lg:flex-row border border-gray-300 rounded overflow-hidden group h-[320px]" // fixed height for whole card
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full lg:w-[35%] h-[320px]" 
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw"
                  priority={index < 2}
                />
              </motion.div>

              {/* Text Content Section */}
              <div className="w-full lg:w-[58%] flex flex-col justify-between px-6 py-6 lg:px-8 lg:py-8 bg-white h-[320px]">
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.category}</span>
                    <span className="mx-2 w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-black leading-snug mb-4">
                    {article.title}
                  </h2>
                  {article.text && (
                    <p className="text-gray-600 text-base leading-relaxed mb-6 lg:mb-8 line-clamp-3">
                      {article.text}
                    </p>
                  )}
                </div>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:underline mt-4"
                >
                  <span>READ MORE</span>
                  <Image
                    src="https://cdn.prod.website-files.com/66eac38ea29fd1de7449fa8c/6753fbb4eb733f845b9e0be3_ic-arrow.svg"
                    alt="Arrow"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CulturePage
