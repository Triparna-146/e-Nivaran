import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import ComplainingMethods from '../components/ComplainingMethods';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ComplainingMethods />
      <HowItWorks />
      <Footer />
    </div>
  );
}