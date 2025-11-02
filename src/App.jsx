import React from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b10] text-white">
      {/* Hero with interactive Spline scene */}
      <Hero />

      {/* Content sections */}
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}
