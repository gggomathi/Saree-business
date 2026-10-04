import React from 'react';
import { Sparkles, Scissors, ShieldCheck, HeartHandshake } from 'lucide-react';
import { whyChooseUsFeatures } from '../data/sareeData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#9C155F]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#9C155F]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#9C155F]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#9C155F] font-bold">
            The RJ Fabrics Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#380036] tracking-tight mt-2">
            Why Choose RJ Fabrics
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9C155F] to-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base">
            Dedicated to delivering honest value, enduring quality, and personal attention with every single saree.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-[#FAF7F2] border border-amber-200/50 hover:border-[#9C155F]/40 hover:bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white border border-amber-100 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-[#9C155F]/30 transition-all duration-300">
                  {getIcon(feature.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold text-[#380036] group-hover:text-[#9C155F] transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Index Accent */}
              <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-stone-400">
                <span>0{idx + 1}</span>
                <span className="h-1 w-6 bg-amber-200 group-hover:bg-[#9C155F] rounded-full transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
