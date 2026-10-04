import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { businessDetails, getWhatsAppUrl } from '../data/sareeData';

interface MobileBottomBarProps {
  onOpenEnquire?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquire }) => {
  const handleEnquireClick = () => {
    if (onOpenEnquire) {
      onOpenEnquire();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] sm:hidden px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${businessDetails.phones.primary.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-amber-50 active:bg-amber-100 border border-[#C5A059]/40 text-[#380036] font-bold text-xs shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#9C155F]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-sm shadow-emerald-700/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Button */}
        <button
          type="button"
          onClick={handleEnquireClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gradient-to-r from-[#380036] to-[#9C155F] active:opacity-90 text-[#F3E5AB] font-bold text-xs shadow-sm shadow-purple-950/20"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};
