export const siteLogo = "ZIVEK";

export const navigationLinks = [
  { text: 'Health', href: '/news-categories/health' },
  { text: 'Culture', href: '/news-categories/culture' },
  { text: 'Sports', href: '/news-categories/sports' },
  { text: 'World News', href: '/news-categories/world-news' },
  { text: 'Business', href: '/news-categories/business' },
  { text: 'Technology', href: '/news-categories/technology' },
];

export const heroData = {
  image: '/hero-image.jpg',
  category: 'Technology',
  date: 'Dec 16, 2024',
  title: 'Revolutionizing Industries with AI-Powered Solutions',
};

export const topStoriesData = [
  {
    category: 'World News',
    date: 'Dec 16, 2024',
    title: 'Global Leaders Discuss Climate Change Initiatives',
    image: '/news1.jpg',
  },
  {
    category: 'Culture',
    date: 'Dec 15, 2024',
    title: 'The Resurgence of Traditional Art Forms in Modern Society',
    image: '/news2.jpg',
  },
  {
    category: 'Sports',
    date: 'Dec 14, 2024',
    title: 'Record-Breaking Performance at the International Games',
    image: '/news3.jpg',
  },
];

export const footerLinks = [
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Terms of Service', href: '/terms' },
];

export const featuredHeroData = {
  image: '/ice-hockey.jpg',
  author: 'Esther Howards',
  title: 'How major sporting events unite fans across cultures & nations',
  description: 'These events transcend language, geography, and differences, creating a shared sense of excitement and unity. Through the universal love of competition.',
  category: 'Sports',
  date: 'Dec 16, 2024',
};

export const latestArticles = [
  {
    title: 'The science of health latest research and medical advancements',
    category: 'Health',
    date: 'Dec 14, 2024',
    image: '/baby-doctor.jpg', 
    href: '/news-categories/health/research',
  },
  {
    title: 'Health matters updates on wellness, nutrition, and fitness',
    category: 'Health',
    date: 'Dec 14, 2024',
    image: '/doctors-analyzing.jpg', 
    href: '/health/wellness',
  },
  {
    title: 'How countries are responding to emerging crises',
    category: 'World News',
    date: 'Dec 15, 2024',
    image: '/world-leaders.jpg', 
    href: '/news-categories/world-news/responses',
  },
  {
    title: 'From startups to giants the secrets to business success',
    category: 'Business',
    date: 'Dec 16, 2024',
    image: '/factory-pipes.jpg', 
    href: '/news-categories/business/success-stories',
  },
  {
    title: 'The road to glory major sports milestones & updates',
    category: 'Sports',
    date: 'Dec 16, 2024',
    image: '/karate-belt.jpg', 
    href: '/news-categories/sports/updates',
  },
  
];

export const editorPicks = [
  {
    category: 'Sports',
    title: 'From record-breaking performances to inspiring comebacks this week in sports',
    image: '/sports-fencing.jpg', 
    href: '/sports/latest',
  },
  {
    category: 'Culture',
    title: 'How art, music, and literature shape the identity of societies',
    image: '/culture-ancient-ruins.jpg', 
    href: '/news-categories/culture/insights',
  },
  {
    category: 'Business',
    title: 'Key trends and challenges facing businesses today',
    image: '/business-chart-phone.jpg', 
    href: '/business/analysis',
  },
];

export const cultureArticles = [
  {
    id: 1,
    title:
      "The power of storytelling connecting generations through shared narratives",
    date: "Dec 16, 2024",
    author: "Leslie Alexander",
    excerpt:
      "By passing down experiences and wisdom, storytelling preserves traditions, fosters understanding & strengthens bonds, uniting the past, present & future.",
    image: "/storytelling.jpg",
    featured: true,
  },
  {
    id: 2,
    title:
      "The global tapestry how cultural traditions are evolving across generations",
    date: "Dec 16, 2024",
    author: "Marvin McKinney",
    image: "/temple.jpg",
  },
  {
    id: 3,
    title:
      "How art, music, and literature shape the identity of societies",
    date: "Dec 16, 2024",
    author: "Theresa Webb",
    image: "/ruins.jpg",
  },
  {
    id: 4,
    title:
      "How countries use art and culture for global influence",
    date: "Dec 14, 2024",
    author: "Theresa Webb",
    image: "/statue.jpg",
  },
];

// Article type
export interface Article {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
  text?: string;
}

// Technology articles
export const technologyArticles: Article[] = [
  {
    title: 'Exploring emerging technologies from quantum computing to space exploration',
    category: 'Technology',
    date: 'May 6, 2025',
    image: '/hero-image.jpg',
    href: '/news/generative-ai-advances-may-2025',
    text: 'Major tech companies are announcing significant improvements to their generative AI models, impacting everything from content creation to software development.',
  },
  {
    title: 'Living well trends and innovations in health and wellness',
    category: 'Technology',
    date: 'May 4, 2025',
    image: '/technology.jpg',
    href: '/news/quantum-computing-milestones',
    text: 'Researchers have reported new breakthroughs in quantum error correction and qubit stability, bringing practical quantum computers closer to reality.',
  },
  {
    title: 'Tech that transforms what’s new in the digital world',
    category: 'Technology',
    date: 'May 2, 2025',
    image: '/tech.jpg',
    href: '/news/ambient-computing-smart-homes',
    text: 'Seamless and invisible technology is becoming more prevalent in homes, with devices and systems that anticipate user needs without explicit commands.',
  },
  {
    title: 'Exploring the ever-changing world of technology',
    category: 'Technology',
    date: 'April 29, 2025',
    image: '/techhh1.jpg',
    href: '/news/sustainable-energy-leaps',
    text: 'Innovations in solar, wind, and battery storage technologies are making renewable energy sources more efficient and cost-effective than ever before.',
  },
];

// World News Articles
export const worldNewsArticles: Article[] = [
  {
    title: 'Global Leaders Convene for Climate Summit Amidst Growing Concerns',
    category: 'World News',
    date: 'May 7, 2025',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/6756df9799bd76176ea5b9b2_news-thumb-05.jpg',
    href: '/news-categories/world-news/responses',
    text: 'Heads of state are meeting to address the escalating climate crisis, with discussions focused on new targets for reducing carbon emissions and supporting vulnerable nations.',
  },
  {
    title: 'New Trade Agreement Signed Between Major Economic Powers',
    category: 'World News',
    date: 'May 6, 2025',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0b456cc15837d7b9d416_news-thumb-25.jpg',
    href: '/news-categories/world-news/responses',
    text: 'A landmark trade deal has been finalized, promising to reshape global commerce and potentially leading to significant economic shifts in the coming years.',
  },
  {
    title: 'Humanitarian Crisis Deepens in East African Region',
    category: 'World News',
    date: 'May 5, 2025',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0ae86e03badd60ce7e3b_news-thumb-22.jpg',
    href: '/news-categories/world-news/responses',
    text: 'Millions are facing starvation and displacement due to ongoing conflict and severe drought, prompting urgent calls for international aid and intervention.',
  },
];

export const sportsArticles: Article[] = [
  {
    title: 'How major sporting events unite fans across cultures & nations',
    category: 'Sports',
    date: 'Dec 16, 2024',
    image:
      'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675a6bbd966e58ea9ac913b9_news-thumb-06.jpg',
    href: '/news-categories/sports/updates',
    text: 'These events transcend language, geography, and differences, creating a shared sense of excitement and unity. Through the universal love of competition.',
  },
  {
    title: 'From record-breaking performances to inspiring comebacks this week in sports',
    category: 'Sports',
    date: 'Dec 16, 2024',
    image:
      'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675a8d0b632cf9ef6701bf33_news-thumb-12.jpg',
    href: '/news-categories/sports/updates',
    text: 'From athletes smashing records to underdogs defying the odds, these stories showcase the perseverance, talent, and resilience that make sports.',
  },
  {
    title: 'The road to glory major sports milestones & updates',
    category: 'Sports',
    date: 'Dec 14, 2024',
    image:
      'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0b8b042ad0ad520feb36_news-thumb-27.jpg',
    href: '/news-categories/sports/updates',
    text: 'This article highlights the latest milestones in the world of sports, from record-breaking performances to career-defining victories, and offers updates.',
  },
  {
    title: "On the field what's next for the world of sports?",
    category: 'Sports',
    date: 'Dec 14, 2024',
    image:
      'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0ac83b2542696cbb1aca_news-thumb-21.jpg',
    href: '/news-categories/sports/updates',
    text: 'Emerging technologies and data analytics on performance, to the growing influence of social issues and fan engagement in shaping the sports landscape.',
  },
];

export const allArticles: Article[] = [
  {
    title: 'The science of health latest research and medical advancements',
    category: 'Health',
    date: 'Dec 14, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0bfdc1332fb49a0b2956_news-thumb-30.jpg',
    href: '/news-categories/health/research',
    text: 'The world of medical science is constantly evolving, with groundbreaking research and innovations changing how we understand and treat health conditions.',
  },
  {
    title: 'Health matters updates on wellness, nutrition, and fitness',
    category: 'Health',
    date: 'Dec 14, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0bd5e49a4c4888393092_news-thumb-29.jpg',
    href: '/news-categories/health/research',
    text: 'This article provides the latest insights into wellness innovations, healthy eating habits, and fitness regimens, offering readers practical advice.',
  },
  {
    title: 'Global health updates what you need to know today',
    category: 'Health',
    date: 'Dec 14, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0b6805c091f4d9a621b0_news-thumb-26.jpg',
    href: '/news-categories/health/research',
    text: 'The ongoing challenges facing healthcare systems around the world, empowering readers with the knowledge needed to understand today’s most pressing health issues.',
  },
  {
    title: 'Living well trends and innovations in health and wellness',
    category: 'Health',
    date: 'Dec 14, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0b0c656a2aa2bcbc5d4b_news-thumb-23.jpg',
    href: '/news-categories/health/research',
    text: 'The pursuit of well-being is a central focus in today’s society, with innovations in health and wellness continuously shaping our approach to living a healthier life.',
  },
  {
    title: 'Bridging gaps in rural and underserved communities',
    category: 'Health',
    date: 'Dec 9, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/6756df23530576043034de91_news-thumb-02.jpg',
    href: '/news-categories/health/research',
    text: 'By addressing disparities, it fosters growth, equality, and improved quality of life in these communities, and support to areas often overlooked.',
  },
];

export const culturePageArticles: Article[] = [
  {
    title: 'The global tapestry how cultural traditions are evolving across generations',
    category: 'Culture',
    date: 'Dec 16, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0a5177ebb03ac21e57f5_news-thumb-18.jpg',
    href: '/news-categories/culture/insights',
    text: 'Storytelling is a timeless tradition that bridges generations, preserving history and shaping collective identities. Through tales of resilience, triumph, and belonging.',
  },
  {
    title: 'The power of storytelling connecting generations through shared narratives',
    category: 'Culture',
    date: 'Dec 16, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d09f4af00354478ce044e_news-thumb-15.jpg',
    href: '/news-categories/culture/insights',
    text: 'By passing down experiences and wisdom, storytelling preserves traditions, fosters understanding &amp;strengthens bonds, uniting the past, present &amp;future.',
  },
  {
    title: 'How art, music, and literature shape the identity of societies',
    category: 'Culture',
    date: 'Dec 16, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d09d5839a8076b09ae255_news-thumb-14.jpg',
    href: '/news-categories/culture/insights',
    text: 'Through the lens of art, music, and literature, this feature examines how creativity reflects shared values, influences global narratives.',
  },
  {
    title: 'The intersection of culture in a globalized world',
    category: 'Culture',
    date: 'Dec 14, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0a14d0b377ec2b9dc78a_news-thumb-16.jpg',
    href: '/news-categories/culture/insights',
    text: 'As globalization connects diverse communities, cultures converge and blend, creating unique exchanges of ideas, traditions, and values.',
  },
];

export const businessPageArticles: Article[] = [
  {
    title: 'Key trends and challenges facing businesses today',
    category: 'Business',
    date: 'Dec 16, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d09909b90d25415446da5_news-thumb-13.jpg',
    href: '/news-categories/business/success-stories',
    text: 'The business world is undergoing rapid transformations, driven by technology, shifting consumer behaviors, and economic uncertainties.',
  },
  {
    title: 'From startups to giants: the secrets to business success',
    category: 'Business',
    date: 'Dec 14, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0bb0754e63ba795d442a_news-thumb-28.jpg',
    href: '/news-categories/business/success-stories',
    text: 'Success in business doesn’t happen overnight, but with the right strategies and mindset, startups can transform into global giants.',
  },
  {
    title: 'The changing landscape of global business: key developments',
    category: 'Business',
    date: 'Dec 14, 2024',
    image: 'https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675d0aa2332ab332a617997c_news-thumb-20.jpg',
    href: '/news-categories/business/success-stories',
    text: 'Global business is undergoing a profound transformation, driven by economic shifts, technological advancements, and evolving consumer demands.',
  },
];
