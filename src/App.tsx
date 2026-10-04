/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProductGallery } from './components/ProductGallery';
import { AboutSection } from './components/AboutSection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, businessDetails } from './data/sareeData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 flex flex-col pb-16 sm:pb-0 relative selection:bg-[#9C155F] selection:text-white">
      {/* Header */}
      <Header onCategorySelect={handleSelectCategory} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Saree Collections Grid */}
        <Collections onSelectCategory={handleSelectCategory} />

        {/* Product Showcase Gallery */}
        <ProductGallery
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Why Choose RJ Fabrics */}
        <WhyChooseUs />

        {/* About RJ Fabrics */}
        <AboutSection />

        {/* WhatsApp Conversion Section */}
        <WhatsAppCTA />

        {/* Showroom & Contact Details with Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom Action Bar (Call | WhatsApp | Enquire) */}
      <MobileBottomBar onOpenEnquire={handleScrollToContact} />

      {/* Desktop Floating WhatsApp Widget */}
      <aside aria-label="WhatsApp quick chat" className="hidden sm:block fixed bottom-6 right-6 z-30">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-emerald-950/20 border-2 border-white hover:scale-105 transition-all duration-200"
          title={`Chat with RJ Fabrics (${businessDetails.phones.whatsapp}) on WhatsApp`}
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F3E5AB] rounded-full animate-ping" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] text-emerald-100 uppercase tracking-wider font-semibold leading-tight">
              Have questions?
            </span>
            <span className="block text-xs font-bold leading-tight">
              Chat on WhatsApp
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}
