import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroNewsItem {
  id: string;
  href: string;
  imageUrl: string;
  category: string;
  date: string;
  title: string;
}

const mockNewsItems: HeroNewsItem[] = [
  {
    id: '1',
    href: '/news/1',
    imageUrl: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/6756df9799bd76176ea5b9b2_news-thumb-05.jpg',
    category: 'World News',
    date: 'Dec 16, 2024',
    title: 'How countries are responding to emerging crises',
  },
  {
    id: '2',
    href: '/news/2',
    imageUrl: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0a5177ebb03ac21e57f5_news-thumb-18.jpg',
    category: 'Culture',
    date: 'Dec 16, 2024',
    title: 'The global tapestry how cultural traditions are evolving across generations',
  },
  {
    id: '3',
    href: '/news/3',
    imageUrl: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675a6bbd966e58ea9ac913b9_news-thumb-06.jpg',
    category: 'Sports',
    date: 'Dec 16, 2024',
    title: 'How major sporting events unite fans across cultures & nations',
  },
  {
    id: '4',
    category: 'Health',
    date: 'Dec 14, 2024',
    imageUrl: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0b0c656a2aa2bcbc5d4b_news-thumb-23.jpg',
    href: '/news-categories/health/research',
    title: 'Living well trends and innovations in health and wellness',
  },
];

const mainHeroItem = {
  id: 'main',
  href: '/news/main',
  imageUrl: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675a8c7af76b5bde42ea4af0_news-thumb-11.jpg',
  category: 'Technology',
  date: 'Dec 16, 2024',
  title: 'Exploring emerging technologies from quantum computing to space exploration',
};

const HeroSection: React.FC = () => {
  return (
    <section className="py-14 bg-[#f4f8fb]">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-0 items-start">
          <div className="space-y-6">
            {mockNewsItems.map((item) => (
              <Link key={item.id} href={item.href} className="flex gap-5 group">
                <div className="relative w-[120px] h-[100px] flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 border-b border-gray-200 pb-6">
                  <p className="text-[13px] text-gray-500 mb-1">
                    <span>{item.category}</span> <span className="mx-1">—</span> <span>{item.date}</span>
                  </p>
                  <h3 className="text-[16px] font-medium text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <Link href={mainHeroItem.href} className="group block">
              <div className="relative w-full h-[420px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={mainHeroItem.imageUrl}
                  alt={mainHeroItem.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {mainHeroItem.category}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {mainHeroItem.date}
                </div>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                {mainHeroItem.title}
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
