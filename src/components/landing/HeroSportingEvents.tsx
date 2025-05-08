'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { featuredHeroData } from './constants';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

function getAuthorInitials(name: string) {
  const names = name.trim().split(' ');
  if (names.length === 1) return names[0][0].toUpperCase();
  return names[0][0].toUpperCase() + names[1][0].toUpperCase();
}

function HeroSportingEvents() {
  return (
    <motion.section
      className="relative w-full h-[600px] flex items-center justify-center overflow-hidden"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <Image
        src={featuredHeroData.image}
        alt={featuredHeroData.title}
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />

      <div className="absolute bottom-20 left-6 right-6 max-w-6xl mx-auto px-6 text-white z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center overflow-hidden">
            <span className="text-base font-bold text-gray-900">
              {featuredHeroData.author
                ? getAuthorInitials(featuredHeroData.author)
                : 'AA'}
            </span>
          </div>
          <span className="text-sm md:text-base">By {featuredHeroData.author}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          {featuredHeroData.title}
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          {featuredHeroData.description}
        </p>

        <div className="flex items-center gap-4">
          <span className="bg-white/80 text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-md">
            {featuredHeroData.category}
          </span>
          <span className="text-sm">{featuredHeroData.date}</span>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSportingEvents;
