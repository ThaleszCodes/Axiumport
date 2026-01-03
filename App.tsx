import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Audience } from './components/Audience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-neutral-200 selection:bg-brand-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Features />
        <Portfolio />
        <Testimonials />
        <Process />
        <FAQ />
        <Audience />
      </main>
      <Footer />
    </div>
  );
}

export default App;