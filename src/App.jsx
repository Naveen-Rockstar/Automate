import React from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import TransformationSection from './sections/TransformationSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import IndustriesSection from './sections/IndustriesSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TransformationSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
