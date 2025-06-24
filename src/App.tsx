import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Demonstration from './components/Demonstration';
import ProductShowcase from './components/ProductShowcase';
import Bonuses from './components/Bonuses';
import VideoTestimonials from './components/VideoTestimonials';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import LastCall from './components/LastCall';
import Footer from './components/Footer';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <ScrollProvider>
      <div className="font-sans bg-[#fefae0]">
        <Header />
        <main>
          <Hero />
          <PainPoints />
          <Solution />
          <Benefits />
          <Demonstration />
          <ProductShowcase />
          <Bonuses />
          <VideoTestimonials />
          <Testimonials />
          <div id="offer-section">
            <Offer />
          </div>
          <Guarantee />
          <FAQ />
          <LastCall />
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App