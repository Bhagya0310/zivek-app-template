'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { editorPicks } from './constants';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

function EditorPickSection() {
  return (
    <motion.section
      className="py-10 px-6 bg-gray-100"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">EDITORS PICK</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {editorPicks.map((pick, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="relative w-full h-[200px]">
                <Image src={pick.image} alt={pick.title} layout="fill" objectFit="cover" />
                <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded font-bold uppercase">
                  {pick.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-2">
                  <Link href={pick.href} className="hover:underline">
                    {pick.title}
                  </Link>
                </h3>
                <Link href={pick.href} className="text-blue-500 text-sm font-medium">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default EditorPickSection;
