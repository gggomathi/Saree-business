import React from 'react';
import { Sparkles, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import craftLoomImg from '../assets/images/rj_craft_loom_1791077053887.jpg';
import { businessDetails, getWhatsAppUrl } from '../data/sareeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase with border & badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Gold decorative accent backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#9C155F]/20 via-[#D4AF37]/30 to-purple-200/40 rounded-2xl blur-xs" />
              
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#D4AF37]/50 bg-white">
                <img
                  src={craftLoomImg}
                  alt="Traditional handloom shuttle and weaving at RJ Fabrics in Tiruppur Tamil Nadu"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center"
                  loading="lazy"
                />
                
                {/* Overlay Quote */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#380036]/95 via-[#380036]/75 to-transparent p-5 text-white">
                  <p className="font-serif-display text-base sm:text-lg italic text-[#F3E5AB]">
                    “Every thread carries dedication, heritage and the gentle rhythm of the handloom.”
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    Narasingapuram Village • Madathukulam TK
                  </p>
                </div>
              </div>

              {/* Verified Address Tag */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white border border-[#C5A059]/40 py-2 px-3.5 rounded-lg shadow-md flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9C155F]" />
                <span className="text-xs font-bold text-[#380036]">Tiruppur DT – 642111</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text and Information */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-semibold text-[#9C155F]">
                <Sparkles className="w-3.5 h-3.5 text-[#9C155F]" />
                <span className="uppercase tracking-wider">About RJ Fabrics</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380036] tracking-tight">
                Tradition Woven with Care
              </h2>
              <div className="w-16 h-1 bg-[#9C155F] rounded-full" />
            </div>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-stone-900 font-semibold">RJ FABRICS</strong>, we specialize exclusively in traditional handloom sarees. Located in Sakthi Nagar, Narasingapuram Village (Madathukulam Taluk, Tiruppur District, Tamil Nadu), our establishment is devoted to the art of authentic South Indian handloom weaving.
              </p>
              
              <p>
                We focus on preserving traditional craftsmanship, upholding rigorous standards of quality in every yarn, and presenting elegant designs that honor our rich textile lineage. Whether it is lightweight everyday cotton or grand silk drapes woven with zari accents, every saree in our collection is selected with deep care and respect for the wearer.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#9C155F] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  Focus on Pure Handloom Weaves
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#9C155F] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  Traditional South Indian Motifs
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#9C155F] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  Carefully Inspected Finishing
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#9C155F] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-800">
                  Honest, Direct Customer Service
                </span>
              </div>
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Hello RJ Fabrics, I read about your handloom sarees and would like to know more.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk with RJ Fabrics on WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="text-xs sm:text-sm font-semibold text-[#380036] hover:text-[#9C155F] underline underline-offset-4 transition-colors"
              >
                View Showroom Address & Location →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
