import React from 'react';
import { ArrowDown, MessageCircle, Phone, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { businessDetails, getWhatsAppUrl } from '../data/sareeData';
import heroSareeImg from '../assets/images/rj_hero_saree_1791076999937.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-stone-50 to-[#FAF7F2] pt-8 pb-16 lg:py-20 border-b border-amber-100">
      {/* Subtle traditional motif background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-bl from-purple-200/40 via-pink-100/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-200/30 via-purple-100/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Origin & Handloom Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C5A059]/40 shadow-xs text-xs font-semibold text-[#380036]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="tracking-wider uppercase">Handloom Heritage from Tiruppur, Tamil Nadu</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#380036] leading-none">
                RJ FABRICS
              </h1>
              <p className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-[#9C155F] font-semibold italic">
                Traditional Handloom Sarees, Woven with Elegance
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              Discover beautiful handloom sarees that bring together traditional craftsmanship, quality and timeless style.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Explore Collection */}
              <a
                href="#collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#380036] via-[#6d0a51] to-[#9C155F] hover:opacity-95 shadow-md shadow-purple-950/25 transition-all duration-200 active:scale-98"
              >
                <span>Explore Collection</span>
                <ArrowDown className="w-4 h-4 text-[#F3E5AB]" />
              </a>

              {/* Contact Us */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold text-[#380036] bg-white border border-stone-300 hover:border-[#9C155F] hover:bg-stone-50 shadow-xs transition-all duration-200 active:scale-98"
              >
                <span>Contact Us</span>
              </a>

              {/* Quick WhatsApp Inquiry */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                title="Direct WhatsApp chat"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="sm:hidden lg:inline">WhatsApp Enquiry</span>
                <span className="hidden sm:inline lg:hidden">WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-purple-100/70 text-[#380036] shrink-0">
                  <Sparkles className="w-4 h-4 text-[#9C155F]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Authentic Looms</h4>
                  <p className="text-[11px] text-stone-500">Pure handwoven yarn</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-amber-100/70 text-amber-900 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">GST Registered</h4>
                  <p className="text-[11px] text-stone-500 font-mono">33ASPPJ3998R1ZL</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-md bg-purple-100/70 text-[#380036] shrink-0">
                  <MapPin className="w-4 h-4 text-[#9C155F]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-stone-900">Madathukulam TK</h4>
                  <p className="text-[11px] text-stone-500">Tiruppur DT, TN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Saree Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Gold Border Frame */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] opacity-40 blur-xs" />
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border-2 border-[#D4AF37]/60">
                <img
                  src={heroSareeImg}
                  alt="Authentic traditional South Indian handloom silk saree at RJ Fabrics in Tiruppur"
                  className="w-full h-[360px] sm:h-[450px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Overlay Badge at Bottom of Saree Image */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#F3E5AB]">
                        Featured Handloom
                      </span>
                      <p className="font-serif-display text-lg font-bold text-white drop-shadow-sm">
                        Pure Silk & Zari Weave
                      </p>
                    </div>
                    <a
                      href={getWhatsAppUrl('Hello RJ Fabrics, I want to inquire about the featured silk saree shown on your homepage.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#9C155F] hover:bg-[#800F4E] text-white rounded text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial/Tag Pill */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white py-2.5 px-4 rounded-lg shadow-lg border border-amber-200/70 hidden sm:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                <div>
                  <p className="text-xs font-bold text-[#380036]">Traditional Handloom Sarees</p>
                  <p className="text-[10px] text-stone-500">Woven with pristine care & finesse</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
