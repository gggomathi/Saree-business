// Image asset references
// Business owners can replace these image files or add their own URLs in this file.
import heroSareeImg from '../assets/images/rj_hero_saree_1791076999937.jpg';
import cottonSareeImg from '../assets/images/rj_cotton_saree_1791077014185.jpg';
import silkSareeImg from '../assets/images/rj_silk_saree_1791077026770.jpg';
import weddingSareeImg from '../assets/images/rj_wedding_saree_1791077040248.jpg';
import festiveSareeImg from '../assets/images/rj_festive_saree_1791077067428.jpg';
import craftLoomImg from '../assets/images/rj_craft_loom_1791077053887.jpg';

export interface BusinessDetails {
  name: string;
  tagline: string;
  subtitle: string;
  addressLines: string[];
  postalCode: string;
  phones: {
    primary: string;
    secondary: string;
    whatsapp: string;
  };
  email: string;
  gstin: string;
  whatsappMessage: string;
}

export const businessDetails: BusinessDetails = {
  name: 'RJ FABRICS',
  tagline: 'Handloom Sarees',
  subtitle: 'Traditional Handloom Sarees, Woven with Elegance',
  addressLines: [
    'No. 890, B, Sakthi Nagar, Narasingapuram Village',
    'Krishnapuram Post, Madathukulam TK',
    'Tiruppur DT – 642111, Tamil Nadu, India',
  ],
  postalCode: '642111',
  phones: {
    primary: '79043 96868',
    secondary: '98940 89557',
    whatsapp: '98940 89557',
  },
  email: 'jjayakrishnan289@gmail.com',
  gstin: '33ASPPJ3998R1ZL',
  whatsappMessage:
    'Hello RJ Fabrics, I am interested in your handloom saree collection. Please share the available designs and details.',
};

export const WHATSAPP_NUMBER = '919894089557';

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || businessDetails.whatsappMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export interface SareeCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  highlight: string;
}

export const sareeCategories: SareeCategory[] = [
  {
    id: 'traditional-handloom',
    name: 'Traditional Handloom Sarees',
    description:
      'Timeless weaves crafted on heritage looms with authentic yarn textures, intricate motifs, and enduring grace.',
    image: heroSareeImg,
    highlight: 'Pure Heritage Weaves',
  },
  {
    id: 'cotton-sarees',
    name: 'Cotton Sarees',
    description:
      'Breathable, lightweight handloom cotton sarees designed for everyday comfort, temple visits, and graceful casual elegance.',
    image: cottonSareeImg,
    highlight: 'Breathable Pure Cotton',
  },
  {
    id: 'silk-sarees',
    name: 'Silk Sarees',
    description:
      'Exquisite handloom silk sarees featuring lustrous drape, rich temple borders, and opulent woven zari pallu details.',
    image: silkSareeImg,
    highlight: 'Rich Luster & Zari Pallu',
  },
  {
    id: 'wedding-collection',
    name: 'Wedding Collection',
    description:
      'Grand bridal sarees woven with majestic gold zari motifs, rich contrast borders, and festive grandeur for your special day.',
    image: weddingSareeImg,
    highlight: 'Bridal Grandeur & Brocade',
  },
  {
    id: 'festive-collection',
    name: 'Festive Collection',
    description:
      'Vibrant celebration drapes in festive jewel tones with delicate zari borders, perfect for family pujas and celebrations.',
    image: festiveSareeImg,
    highlight: 'Celebration Palette',
  },
  {
    id: 'latest-designs',
    name: 'Latest Designs',
    description:
      'Fresh contemporary handloom designs combining age-old weaving heritage with modern color combinations and patterns.',
    image: craftLoomImg,
    highlight: 'Fresh Artisan Creations',
  },
];

export interface SareeProduct {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  fabric: string;
  borderWork: string;
  occasion: string;
  image: string;
  description: string;
}

export const sareeProducts: SareeProduct[] = [
  {
    id: 'rj-saree-01',
    name: 'Royal Purple Handloom Silk Saree',
    category: 'Silk Sarees',
    categoryId: 'silk-sarees',
    fabric: 'Pure Handloom Silk with Zari',
    borderWork: 'Traditional Temple Zari Border',
    occasion: 'Weddings & Auspicious Ceremonies',
    image: silkSareeImg,
    description:
      'A majestic pure handloom silk saree in regal purple adorned with rich gold zari brocade along the pallu and traditional temple motifs.',
  },
  {
    id: 'rj-saree-02',
    name: 'Madathukulam Fine Cotton Handloom Saree',
    category: 'Cotton Sarees',
    categoryId: 'cotton-sarees',
    fabric: '100% Breathable Fine Cotton',
    borderWork: 'Magenta & Gold Contrast Zari Border',
    occasion: 'Daily Wear, Office & Temple Visits',
    image: cottonSareeImg,
    description:
      'Comfortable and gracefully soft handloom cotton saree in warm sunshine mustard with a distinctive contrast temple border in rich magenta.',
  },
  {
    id: 'rj-saree-03',
    name: 'Bridal Crimson & Magenta Brocade Saree',
    category: 'Wedding Collection',
    categoryId: 'wedding-collection',
    fabric: 'Pure Handwoven Silk with Dense Zari',
    borderWork: 'Intricate Mango Paisley & Temple Zari',
    occasion: 'Bridal Wear & Grand Receptions',
    image: weddingSareeImg,
    description:
      'Grand bridal handloom masterpiece featuring deep magenta undertones, rich crimson shades, and heavy zari pallu work suited for weddings.',
  },
  {
    id: 'rj-saree-04',
    name: 'Dual-Tone Peacock Teal Festive Saree',
    category: 'Festive Collection',
    categoryId: 'festive-collection',
    fabric: 'Handloom Art Silk & Blended Weave',
    borderWork: 'Delicate Floral Gold Zari Border',
    occasion: 'Diwali, Pongal & Family Celebrations',
    image: festiveSareeImg,
    description:
      'Lustrous dual-tone peacock teal handloom saree complemented with elegant royal magenta border and fine gold floral zari tracing.',
  },
  {
    id: 'rj-saree-05',
    name: 'Heritage Traditional Kanchi Motif Saree',
    category: 'Traditional Handloom Sarees',
    categoryId: 'traditional-handloom',
    fabric: 'Authentic Handloom Silk Blend',
    borderWork: 'Traditional Rudraksham & Peacock Motif Border',
    occasion: 'Festivals, Religious Poojas & Milestones',
    image: heroSareeImg,
    description:
      'A classic representation of Tamil Nadu weaving traditions, featuring graceful folds, authentic body weave, and timeless gold borders.',
  },
  {
    id: 'rj-saree-06',
    name: 'Artisan Loom Contemporary Border Saree',
    category: 'Latest Designs',
    categoryId: 'latest-designs',
    fabric: 'Pure Handwoven Cotton-Silk Blend',
    borderWork: 'Contemporary Minimal Geometric Zari',
    occasion: 'Festive Gatherings & Contemporary Styling',
    image: craftLoomImg,
    description:
      'Crafted with precision on our traditional wooden handlooms, combining artisan texture with modern aesthetics for today’s discerning wearers.',
  },
  {
    id: 'rj-saree-07',
    name: 'Classic Deep Wine Handloom Silk Drape',
    category: 'Silk Sarees',
    categoryId: 'silk-sarees',
    fabric: 'Pure Handloom Silk',
    borderWork: 'Wide Antique Gold Zari Border',
    occasion: 'Receptions & Evening Gatherings',
    image: silkSareeImg,
    description:
      'Rich deep wine purple saree with an antique burnished gold zari border and coordinated pallu that radiates sophistication.',
  },
  {
    id: 'rj-saree-08',
    name: 'Summer Pastel Handloom Cotton Drape',
    category: 'Cotton Sarees',
    categoryId: 'cotton-sarees',
    fabric: 'High Count Handloom Cotton',
    borderWork: 'Woven Thread Border & Zari Pinstripes',
    occasion: 'Workplace & Summer Elegance',
    image: cottonSareeImg,
    description:
      'Superbly soft, featherlight handloom cotton saree created for humid climates, offering effortless draping and unmatched comfort.',
  },
];

export const whyChooseUsFeatures = [
  {
    title: 'Authentic Handloom Collection',
    description:
      'Each saree is woven on traditional looms, celebrating genuine South Indian textile craftsmanship and natural texture.',
    icon: 'Sparkles',
  },
  {
    title: 'Traditional Craftsmanship',
    description:
      'Honoring centuries-old weaving traditions passed down through generations of skilled local weavers in Tamil Nadu.',
    icon: 'Scissors',
  },
  {
    title: 'Quality-Focused Selection',
    description:
      'Every single piece is personally inspected for weave density, zari integrity, and flawless finish before reaching you.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Personal Customer Service',
    description:
      'Direct, friendly support via WhatsApp and phone calls. We happily share live pictures, videos, and personalized styling advice.',
    icon: 'HeartHandshake',
  },
];
