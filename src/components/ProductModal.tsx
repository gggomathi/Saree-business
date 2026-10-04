import React from 'react';
import { X, MessageCircle, Phone, Sparkles, CheckCircle2, Share2, Copy, Check } from 'lucide-react';
import { SareeProduct, getWhatsAppUrl, businessDetails } from '../data/sareeData';

interface ProductModalProps {
  product: SareeProduct | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!product) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappInquiryMessage = `Hello RJ Fabrics, I am interested in "${product.name}" (${product.category}) from your handloom collection. Please share available colors, prices, and fabric details.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-amber-200/50 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs text-stone-700 hover:text-stone-900 hover:bg-white shadow-md flex items-center justify-center transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 relative bg-stone-100 min-h-[300px] md:min-h-[440px]">
          <img
            src={product.image}
            alt={`${product.name} - Handloom Saree from RJ Fabrics`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-[#380036] border border-amber-200 shadow-xs">
            {product.category}
          </div>
        </div>

        {/* Product Information Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#9C155F]">
                RJ Fabrics • Authentic Handloom
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#380036] mt-1 leading-snug">
                {product.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications list */}
            <div className="space-y-2.5 pt-2 border-t border-stone-100 text-xs">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500 font-medium">Fabric Weave:</span>
                <span className="text-stone-900 font-semibold">{product.fabric}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500 font-medium">Border & Pallu:</span>
                <span className="text-stone-900 font-semibold">{product.borderWork}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500 font-medium">Recommended For:</span>
                <span className="text-stone-900 font-semibold">{product.occasion}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500 font-medium">Pricing:</span>
                <span className="text-[#9C155F] font-bold">Direct Weaver Inquiry on WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <a
              href={getWhatsAppUrl(whatsappInquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-700/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <div className="flex gap-2">
              <a
                href={`tel:${businessDetails.phones.secondary.replace(/\s+/g, '')}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-50 hover:bg-amber-100 border border-[#C5A059]/40 text-[#380036] font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9C155F]" />
                <span>Call ({businessDetails.phones.secondary})</span>
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="py-2 px-3 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-600 text-xs font-medium flex items-center gap-1 transition-colors"
                title="Share link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
