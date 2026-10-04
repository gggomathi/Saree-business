import React from 'react';
import { sareeCategories, SareeCategory, getWhatsAppUrl } from '../data/sareeData';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

interface CollectionsProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  const handleViewCollection = (category: SareeCategory) => {
    if (onSelectCategory) {
      onSelectCategory(category.id);
    }
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-xs font-semibold text-[#9C155F] mb-3">
            <Sparkles className="w-3 h-3 text-[#9C155F]" />
            <span className="uppercase tracking-widest">Handcrafted Splendor</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380036] tracking-tight">
            Handloom Saree Collections
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9C155F] to-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Explore our curated categories of authentic handwoven sarees. From soft everyday cottons to grand wedding silks, each piece reflects genuine Indian craftsmanship.
          </p>
        </div>

        {/* Collections Grid - 6 categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sareeCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-[#FAF7F2] rounded-xl overflow-hidden border border-amber-200/60 hover:border-[#9C155F]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
                <img
                  src={category.image}
                  alt={`${category.name} from RJ Fabrics handloom collection`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle highlight pill */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-[#380036] border border-amber-200/70 shadow-xs">
                  {category.highlight}
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-[#380036] group-hover:text-[#9C155F] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-stone-200/70">
                  <button
                    type="button"
                    onClick={() => handleViewCollection(category)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#380036] hover:text-[#9C155F] transition-colors py-1.5"
                  >
                    <span>View Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello RJ Fabrics, I would like to see designs and details for your ${category.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors"
                    title={`Enquire about ${category.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-4 rounded-xl bg-purple-50/60 border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#9C155F] text-[#F3E5AB] flex items-center justify-center font-bold text-sm shrink-0">
              RJ
            </span>
            <p className="text-xs sm:text-sm text-stone-700">
              Can't find a specific color or motif? We weave custom variations and accept wholesale inquiries.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Hello RJ Fabrics, I am looking for custom designs or wholesale sarees.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 bg-[#380036] hover:bg-[#520042] text-[#F3E5AB] rounded-md text-xs font-semibold tracking-wide transition-colors"
          >
            Inquire Custom Weaves
          </a>
        </div>

      </div>
    </section>
  );
};
