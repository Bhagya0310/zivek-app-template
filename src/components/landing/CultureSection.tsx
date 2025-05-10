"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cultureArticles } from  './constants';

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

export default function CultureSection() {
  const featured = cultureArticles.find((a) => a.featured);
  const others = cultureArticles.filter((a) => !a.featured);

  return (
    <section className="px-4 py-10 lg:px-20">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.4 }}
      >
        Culture
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-2 flex flex-col lg:flex-row gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src={featured?.image || ""}
            alt={featured?.title || ""}
            width={600}
            height={400}
            className="rounded-md object-cover w-full lg:w-1/2"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">{featured?.date}</p>
              <h3 className="text-2xl font-bold mb-3">{featured?.title}</h3>
              <p className="text-gray-700 mb-4">{featured?.excerpt}</p>
            </div>
            <p className="text-sm font-medium">by. {featured?.author}</p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-2">
            <Image
              src={others[0].image}
              alt={others[0].title}
              width={400}
              height={200}
              className="rounded-md object-cover w-full"
            />
            <p className="text-sm text-gray-500">{others[0].date}</p>
            <h3 className="font-semibold text-lg">{others[0].title}</h3>
            <p className="text-sm text-gray-600">{others[0].author}</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {others.slice(1).map((article, idx) => (
          <motion.div
            key={article.id}
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
          >
            <Image
              src={article.image}
              alt={article.title}
              width={120}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <p className="text-sm text-gray-500">{article.date}</p>
              <h4 className="font-semibold">{article.title}</h4>
              <p className="text-sm text-gray-600">{article.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
