import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketSection from './components/MarketSection';
import CoreLogic from './components/CoreLogic';
import BusinessModel from './components/BusinessModel';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="market" className="scroll-mt-24">
          <MarketSection />
        </div>
        <div id="methodology" className="scroll-mt-24">
          <CoreLogic />
        </div>
        <div id="business" className="scroll-mt-24">
          <BusinessModel />
        </div>
        <div id="contact" className="scroll-mt-24">
          <ContactFooter />
        </div>
      </main>
    </div>
  );
};

export default App;