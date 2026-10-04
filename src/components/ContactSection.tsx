import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  FileText,
  Copy,
  Check,
  Send,
  ExternalLink,
  Clock,
  Sparkles,
} from 'lucide-react';
import { businessDetails, getWhatsAppUrl } from '../data/sareeData';

export const ContactSection: React.FC = () => {
  const [copiedGst, setCopiedGst] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCategory, setFormCategory] = useState('Traditional Handloom Sarees');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyGST = () => {
    navigator.clipboard.writeText(businessDetails.gstin);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2500);
  };

  const handleWhatsAppFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const compiledMessage = `Hello RJ Fabrics, my name is ${formName || 'Customer'}.
Phone: ${formPhone || 'Not provided'}
Interested In: ${formCategory}
Message: ${formMessage || 'Please share available handloom saree designs and catalog.'}`;

    window.open(getWhatsAppUrl(compiledMessage), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-semibold text-[#9C155F] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9C155F]" />
            <span className="uppercase tracking-widest">Connect with Us</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380036] tracking-tight">
            Contact RJ Fabrics
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9C155F] to-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We welcome you to contact us for handloom saree orders, bridal custom weaves, bulk requirements, or showroom visits.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Details & Action Triggers */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Showroom Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-amber-200/70 shadow-sm space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9C155F]">
                  Traditional Handloom Sarees
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#380036] mt-1">
                  RJ FABRICS – Handloom Sarees
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-100/80 text-[#380036] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#9C155F]" />
                </div>
                <div className="space-y-0.5 text-stone-700 text-sm">
                  <p className="font-semibold text-stone-900">Showroom & Weaving Location:</p>
                  {businessDetails.addressLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                  <p className="text-stone-500 text-xs mt-1">Pin Code: {businessDetails.postalCode}</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-100/80 text-[#380036] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#9C155F]" />
                </div>
                <div className="space-y-1.5 text-sm">
                  <p className="font-semibold text-stone-900">Direct Phone Numbers:</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${businessDetails.phones.primary.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-stone-200 hover:border-[#9C155F] text-[#380036] font-semibold text-xs transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#9C155F]" />
                      <span>{businessDetails.phones.primary}</span>
                    </a>
                    <a
                      href={`tel:${businessDetails.phones.secondary.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-stone-200 hover:border-[#9C155F] text-[#380036] font-semibold text-xs transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#9C155F]" />
                      <span>{businessDetails.phones.secondary}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-100/80 text-[#380036] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#9C155F]" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-stone-900">Email Address:</p>
                  <a
                    href={`mailto:${businessDetails.email}`}
                    className="text-[#9C155F] hover:underline font-medium break-all"
                  >
                    {businessDetails.email}
                  </a>
                </div>
              </div>

              {/* GSTIN */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-stone-200/80">
                <div className="p-2.5 rounded-xl bg-amber-100/80 text-amber-900 shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="space-y-1 text-sm flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-stone-900">GSTIN Registration:</p>
                    <button
                      type="button"
                      onClick={handleCopyGST}
                      className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1"
                    >
                      {copiedGst ? (
                        <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                          <Check className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy className="w-3.5 h-3.5" /> Copy
                        </span>
                      )}
                    </button>
                  </div>
                  <p className="font-mono text-xs sm:text-sm font-bold text-[#380036] bg-white px-3 py-1.5 rounded border border-amber-200 inline-block">
                    {businessDetails.gstin}
                  </p>
                </div>
              </div>

              {/* Quick Communication Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={`tel:${businessDetails.phones.primary.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#380036] hover:bg-[#520042] text-white text-xs font-bold shadow-sm transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F3E5AB]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${businessDetails.email}?subject=Handloom%20Saree%20Enquiry%20-%20RJ%20Fabrics`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-white border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-bold transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9C155F]" />
                  <span>Email Us</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Quick WhatsApp Enquiry Form + Location Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Enquiry Form that opens WhatsApp directly */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#380036]">
                  Send Saree Enquiry via WhatsApp
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Fill in your details below to directly message RJ Fabrics on WhatsApp with your exact preference.
                </p>
              </div>

              <form onSubmit={handleWhatsAppFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Priyadharshini"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#9C155F] focus:ring-1 focus:ring-[#9C155F]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#9C155F] focus:ring-1 focus:ring-[#9C155F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Saree Category
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#9C155F] focus:ring-1 focus:ring-[#9C155F] bg-white"
                    >
                      <option value="Traditional Handloom Sarees">Traditional Handloom Sarees</option>
                      <option value="Cotton Sarees">Cotton Sarees</option>
                      <option value="Silk Sarees">Silk Sarees</option>
                      <option value="Wedding Collection">Wedding Collection</option>
                      <option value="Festive Collection">Festive Collection</option>
                      <option value="Latest Designs">Latest Designs</option>
                      <option value="Bulk / Wholesale Enquiry">Bulk / Wholesale Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message / Color Preference
                  </label>
                  <textarea
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="e.g. I am looking for purple silk sarees or lightweight temple border cotton sarees for an upcoming family pooja."
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#9C155F] focus:ring-1 focus:ring-[#9C155F]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry to WhatsApp ({businessDetails.phones.whatsapp})</span>
                </button>
              </form>
            </div>

            {/* Google Map Section */}
            <div className="bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
              <div className="p-4 bg-white border-b border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#380036]">
                    Showroom Location
                  </h4>
                  <p className="text-[11px] text-stone-500">
                    Madathukulam TK, Tiruppur DT – 642111
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Madathukulam,+Tiruppur,+Tamil+Nadu+642111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#9C155F] hover:underline"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="h-48 sm:h-56 w-full relative">
                <iframe
                  title="RJ Fabrics Location - Madathukulam, Tiruppur"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Madathukulam%20Tiruppur%20642111&t=&z=13&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
