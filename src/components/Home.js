import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default Home;