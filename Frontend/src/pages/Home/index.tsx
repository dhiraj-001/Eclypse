import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HomeHeroSection from './HeroSection';
import ProductGallery from './ProductGallery';
import ProductSection from './ProductSection';
import TestimonialsSection from './TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Header />
      
      <main>
        
        <HomeHeroSection />
        <ProductGallery className="mt-16" />
        <ProductSection className="mt-24" />
        <TestimonialsSection className="mt-24" />
      </main>
      
      <Footer className="mt-24" />
    </div>
  );
};

export default HomePage;