import React from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { businessDetails, getWhatsAppUrl } from '../data/sareeData';

export const WhatsAppCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-gradient-to-r from-[#380036] via-[#520042] to-[#6d0a51] text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Information */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F3E5AB]" />
              <span>Instant Weaver Assistance on WhatsApp</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Looking for a Specific Color or Saree Design?
            </h2>

            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Connect with us directly on WhatsApp at <strong className="text-[#F3E5AB] font-semibold">{businessDetails.phones.whatsapp}</strong>. We gladly share real-time pictures, video tours of current loom weaves, and pricing for single or bulk festive purchases.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#F3E5AB]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Live WhatsApp Photos & Videos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Quick Friendly Responses</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Showroom Assistance</span>
              </div>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/30 transition-all duration-200 active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${businessDetails.phones.secondary.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F3E5AB] bg-white/10 hover:bg-white/20 border border-[#D4AF37]/40 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Us: {businessDetails.phones.secondary}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
