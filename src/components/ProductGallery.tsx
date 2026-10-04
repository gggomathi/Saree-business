import React, { useState } from 'react';
import { sareeProducts, SareeProduct, getWhatsAppUrl } from '../data/sareeData';
import { MessageCircle, Eye, Sparkles, Filter } from 'lucide-react';
import { ProductModal } from './ProductModal';

interface ProductGalleryProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [modalProduct, setModalProduct] = useState<SareeProduct | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Sarees' },
    { id: 'traditional-handloom', label: 'Traditional' },
    { id: 'cotton-sarees', label: 'Cotton Sarees' },
    { id: 'silk-sarees', label: 'Silk Sarees' },
    { id: 'wedding-collection', label: 'Wedding Collection' },
    { id: 'festive-collection', label: 'Festive Collection' },
    { id: 'latest-designs', label: 'Latest Designs' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? sareeProducts
      : sareeProducts.filter((product) => product.categoryId === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-stone-50/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/60 border border-purple-200 text-xs font-semibold text-[#9C155F] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#9C155F]" />
            <span className="uppercase tracking-widest">Handloom Showcase</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380036] tracking-tight">
            Featured Handloom Saree Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9C155F] to-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Browse our handpicked creations. Click on any saree to examine the weave details or reach out directly on WhatsApp to check stock and available color shades.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-white rounded-xl shadow-xs border border-stone-200 gap-1">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onCategoryChange(tab.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#380036] text-[#F3E5AB] shadow-sm'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const productWhatsAppMessage = `Hello RJ Fabrics, I am interested in "${product.name}" (${product.category}) from your handloom collection. Please share the available designs, colors and details.`;
            const whatsAppUrl = getWhatsAppUrl(productWhatsAppMessage);

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border border-stone-200/80 hover:border-[#9C155F]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Large Product Image */}
                <div
                  className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => setModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} - Handloom Saree from RJ Fabrics in Tiruppur`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-[#380036] border border-amber-200 shadow-xs">
                    {product.category}
                  </div>

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalProduct(product);
                      }}
                      className="px-4 py-2 bg-white text-stone-900 rounded-lg text-xs font-bold shadow-lg hover:bg-stone-50 flex items-center gap-1.5 transition-transform transform translate-y-2 group-hover:translate-y-0"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#9C155F]" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Saree Information */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => setModalProduct(product)}
                      className="font-heading text-base sm:text-lg font-bold text-[#380036] hover:text-[#9C155F] transition-colors cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-stone-500 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="pt-2 text-[11px] space-y-1 text-stone-600 border-t border-stone-100">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400">Fabric:</span>
                        <span className="font-medium text-stone-700">{product.fabric}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-400">Border:</span>
                        <span className="font-medium text-stone-700 truncate max-w-[150px]">{product.borderWork}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enquiry on WhatsApp CTA */}
                  <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-stone-400">Price:</span>
                      <span className="font-semibold text-[#9C155F]">On WhatsApp Request</span>
                    </div>

                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-700/20 transition-all duration-200 active:scale-98"
                      title={`Enquire about ${product.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox / Modal */}
        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />

      </div>
    </section>
  );
};
