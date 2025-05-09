'use client';

import Image from 'next/image';
import Link from 'next/link';

type SocialIcon = {
  name: string;
  href: string;
  position: string;
};

export default function Footer() {
  const socialIcons: SocialIcon[] = [
    { name: 'Facebook', href: 'https://facebook.com', position: 'facebook' },
    { name: 'Twitter', href: 'https://x.com', position: 'twitter' },
    { name: 'YouTube', href: 'https://youtube.com', position: 'youtube' },
    { name: 'Instagram', href: 'https://instagram.com', position: 'instagram' },
  ];

  return (
    <section className="footer bg-[#0B0B0B] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left Section */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="inline-block">
              <Image
                src="https://cdn.prod.website-files.com/66eac38ea29fd1de7449fa8c/675670dfec805b6bbd9f53e3_zivek-white.svg"
                alt="ZIVEK"
                width={150}
                height={40}
                priority
              />
            </Link>
            <p className="text-sm max-w-md text-white/70">
              Stay updated with the latest news, stories, and insights from around the globe.
            </p>

            {/* Social Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialIcons.map(({ name, href, position }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-55 px-3 py-2 border border-white/10 hover:bg-white/10 transition rounded-lg text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 bg-social-icon-${position} bg-no-repeat bg-contain rounded-full`} />
                    <span className="text-sm">{name}</span>
                  </div>
                  <Image
                    src="https://cdn.prod.website-files.com/66eac38ea29fd1de7449fa8c/675673b150073e7746a445b6_ic-white-arrow.svg"
                    alt="Arrow"
                    width={12}
                    height={12}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Pages</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/about-us" className="hover:text-white transition-colors">About us</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="/authors" className="hover:text-white transition-colors">Authors</Link></li>
                <li><Link href="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
                <li><Link href="/subscription" className="hover:text-white transition-colors">Newsletter Plans</Link></li>
                <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Categories</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/news-categories/health" className="hover:text-white transition-colors">Health</Link></li>
                <li><Link href="/news-categories/culture" className="hover:text-white transition-colors">Culture</Link></li>
                <li><Link href="/news-categories/sports" className="hover:text-white transition-colors">Sports</Link></li>
                <li><Link href="/news-categories/world-news" className="hover:text-white transition-colors">World News</Link></li>
                <li><Link href="/news-categories/business" className="hover:text-white transition-colors">Business</Link></li>
                <li><Link href="/news-categories/technology" className="hover:text-white transition-colors">Technology</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><Link href="/advertise" className="hover:text-white transition-colors">Advertise</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/template-info/license" className="hover:text-white transition-colors">License</Link></li>
                <li><Link href="/template-info/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-white/70">
          <div>© 2025 Zivek.</div>
          <div>
            Designed by <a href="https://nixar.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Nixar</a>. Powered by{' '}
            <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Webflow</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
