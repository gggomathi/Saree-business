import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { businessDetails, getWhatsAppUrl } from '../data/sareeData';

interface HeaderProps {
  onCategorySelect?: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onCategorySelect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About Us', href: '#about' },
    { label: 'Why RJ', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#380036] text-[#F3E5AB] text-xs py-2 px-4 border-b border-[#520042]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E6CA65] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Authentic Handloom Sarees from Tiruppur, Tamil Nadu • Direct Weaver Enquiries
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden sm:inline-block text-stone-300">
              GSTIN: <span className="font-mono text-[#F3E5AB]">{businessDetails.gstin}</span>
            </span>
            <a
              href={`tel:${businessDetails.phones.primary.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              {businessDetails.phones.primary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-amber-100/60'
            : 'bg-white py-4 border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#380036] via-[#6d0a51] to-[#9C155F] flex items-center justify-center text-white shadow-md shadow-purple-950/20 border border-[#D4AF37]/50 group-hover:scale-105 transition-transform duration-200">
              <span className="font-heading text-lg font-bold tracking-wider text-[#F3E5AB]">RJ</span>
            </div>
            <div>
              <span className="block font-heading text-xl sm:text-2xl font-bold tracking-wider text-[#380036] group-hover:text-[#9C155F] transition-colors leading-none">
                RJ FABRICS
              </span>
              <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9C155F] mt-1">
                Handloom Sarees • Tiruppur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-700 hover:text-[#9C155F] text-sm font-medium tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#9C155F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Call Now Button */}
            <a
              href={`tel:${businessDetails.phones.primary.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold text-[#380036] bg-amber-50 hover:bg-amber-100 border border-[#C5A059]/40 transition-colors shadow-sm"
              title="Call RJ Fabrics directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#9C155F]" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-700/20"
              title="Chat with RJ Fabrics on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-stone-700 hover:text-[#380036] hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-purple-50 hover:text-[#380036] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact through WhatsApp ({businessDetails.phones.whatsapp})</span>
              </a>

              <a
                href={`tel:${businessDetails.phones.primary.replace(/\s+/g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-[#380036] bg-amber-50 border border-[#C5A059]/40 hover:bg-amber-100"
              >
                <Phone className="w-4 h-4 text-[#9C155F]" />
                <span>Call Directly: {businessDetails.phones.primary}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
