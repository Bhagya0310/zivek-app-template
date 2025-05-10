import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Podcast {
  title: string;
  duration: string;
  link: string;
  image: string;
  alt: string;
}

const podcasts: Podcast[] = [
  {
    title: "Bridging the gap conversations that unite and inspire",
    duration: "10 Minute",
    link: "/podcasts/bridging-the-gap-conversations-that-unite-and-inspire",
    image:
      "https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675fece18753f7d22ecc76dc_podcast-thumb-06.jpg",
    alt: "Podcast Image",
  },
  {
    title: "Rhythms of the world music, movements, and moments",
    duration: "06 Minute",
    link: "/podcasts/rhythms-of-the-world-music-movements-and-moments",
    image:
      "https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675fecbd131127d0d80287c5_podcast-thumb-05.jpg",
    alt: "Podcast Image",
  },
  {
    title: "Echoes of humanity conversations on culture and society",
    duration: "12 Minute",
    link: "/podcasts/echoes-of-humanity-conversations-on-culture-and-society",
    image:
      "https://cdn.prod.website-files.com/6753dfab79df68bd6de68cb7/675fec94b48984e43312ca3c_podcast-thumb-04.jpg",
    alt: "Podcast Image",
  },
];

const PodcastSection: React.FC = () => {
  return (
    <section className="podcast py-10">
      <div className="w-layout-blockcontainer container mx-auto w-container">
        <div className="section-heading flex justify-between items-center mb-8">
          <h2 className="title text-4xl font-semibold">PODCAST</h2>
          <Link
            href="/podcast"
            className="secondary-button w-inline-block flex items-center gap-2 text-sm font-medium"
            style={{ textDecoration: 'none' }}
          >
            <div>View All</div>
            <Image
              src="https://cdn.prod.website-files.com/66eac38ea29fd1de7449fa8c/6753fbb4eb733f845b9e0be3_ic-arrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="arrow"
              style={{ transform: 'translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }}
            />
          </Link>
        </div>
        
        <div className="w-dyn-list">
          <div role="list" className="podcast-list w-dyn-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <div key={index} role="listitem" className="podcast-item w-dyn-item rounded-lg shadow-md overflow-hidden group">
                <Link href={podcast.link} className="podcast-link w-inline-block block" style={{ textDecoration: 'none' }}>
                  <div className="relative w-full aspect-video">
                    <Image
                      src={podcast.image}
                      alt={podcast.alt}
                      width={824}
                      height={465}
                      sizes="(max-width: 479px) 83vw, (max-width: 991px) 46vw, 31vw"
                      className="podcast-image object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white bg-opacity-80 rounded-md px-3 py-1 text-xs font-medium">
                      {podcast.duration}
                    </div>
                  </div>
                  <div className="podcast-data p-4">
                    <h5 className="podcast-title text-lg font-semibold leading-snug mb-2">{podcast.title}</h5>
                    <div className="play-icon w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image
                        src="https://cdn.prod.website-files.com/66eac38ea29fd1de7449fa8c/675ff36cd298860f86d56328_play.svg"
                        alt="Play Icon"
                        width={20}
                        height={20}
                        className="ic-play"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
