// pages/index.js
import HeroSection from './components/hero section';
import AboutUs from './components/about us';
import WhyChooseUs from './components/why choose us';
import ShopNowCard from './components/shop now';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <ShopNowCard />
    </div>
  );
}
