import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Sparkles, Heart } from 'lucide-react';
import { businessDetails, getWhatsAppUrl, sareeCategories } from '../data/sareeData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D0826] text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-[#520042]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-900/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9C155F] to-[#D4AF37] flex items-center justify-center text-white shadow-md border border-[#F3E5AB]/40">
                <span className="font-heading text-base font-bold text-white">RJ</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold tracking-wider text-white">
                  {businessDetails.name}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]">
                  {businessDetails.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Authentic handloom sarees crafted with devotion to traditional South Indian weaving heritage. We deliver timeless cotton and silk sarees from Tiruppur, Tamil Nadu to homes across India.
            </p>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded bg-purple-950/80 border border-purple-800 text-[11px] font-mono text-[#F3E5AB]">
                GSTIN: {businessDetails.gstin}
              </span>
            </div>
          </div>

          {/* Saree Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              {sareeCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#collections"
                    className="hover:text-[#F3E5AB] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#9C155F]">›</span>
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">Collections</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Product Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why RJ Fabrics</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Contact RJ Fabrics
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  No. 890, B, Sakthi Nagar, Narasingapuram Village, Krishnapuram Post, Madathukulam TK, Tiruppur DT – 642111
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <div className="space-x-2">
                  <a href={`tel:${businessDetails.phones.primary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                    {businessDetails.phones.primary}
                  </a>
                  <span>/</span>
                  <a href={`tel:${businessDetails.phones.secondary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                    {businessDetails.phones.secondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {businessDetails.phones.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${businessDetails.email}`} className="hover:text-white transition-colors break-all">
                  {businessDetails.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords bar */}
        <div className="py-4 border-b border-purple-900/40 text-[11px] text-stone-500 text-center">
          <p>
            Popular Searches: Handloom Sarees in Tiruppur • Handloom Sarees Madathukulam • RJ Fabrics Handloom Sarees • Traditional Handloom Sarees Tamil Nadu • Pure Cotton Sarees • Traditional Wedding Silk Sarees
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} RJ Fabrics – Handloom Sarees. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Handcrafted with devotion in Tiruppur, Tamil Nadu
          </p>
        </div>

      </div>
    </footer>
  );
};
