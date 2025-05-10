import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import TrendingNewsSection from '@/components/landing/TrendingNewsSection';
import LatestArticlesSection from '@/components/landing/LatestArticlesSection';
import Footer from '@/components/landing/Footer';
import HeroSportingEvents from '@/components/landing/HeroSportingEvents';
import CultureSection from "@/components/landing/CultureSection";
import SubscribeSection  from  "@/components/landing/SubscribeSection";
import PodcastSection from '@/components/landing/PodcastSection';

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrendingNewsSection />
      <LatestArticlesSection />
      <HeroSportingEvents />
      <CultureSection />
      <PodcastSection />
      <SubscribeSection/>
      <Footer />

    </div>
  );
}