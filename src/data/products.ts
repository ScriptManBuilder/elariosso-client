// Product types and interfaces
export interface ProductSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: ProductSpecifications;
  inStock: boolean;
}

// Helper function to get product image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Based on your actual file structure, determine the correct pattern
  const productImageMap: { [key: number]: string[] } = {
    1: ['product1_1.jpg', 'product1_2.jpg', 'product1_3.jpg'],
    2: ['product2_1.jpg', 'product2_2.jpg', 'product2_3.jpg'],
    3: ['product3_1.jpg', 'product3_2.jpg', 'product3_3.jpg'],
    4: ['product4_1.jpg'],
    5: ['product5_1.jpg', 'product5_2.jpg'],
    6: ['product6.jpg'],
    7: ['product7.jpg'],
    8: ['product8_1.jpg'],
    9: ['product9_1.jpg', 'product9_2.jpg', 'product9_3.jpg'],
    10: ['product10_1.jpg', 'product10_2.jpg', 'product10_3.jpg'],
    11: ['product11_1.jpg', 'product11_2.jpg'],
    13: ['product13_1.jpg', 'product13_2.jpg'],
    14: ['product14_1.jpg', 'product14_2.jpg', 'product14_3.jpg'],
    15: ['product15_1.jpg', 'product15_2.jpg', 'product15_3.jpg'],
    16: ['product16_1.jpg', 'product16_2.jpg'],
    17: ['product17_1.jpg', 'product17_2.jpg', 'product17_3.jpg'],
    18: ['product18_1.jpg', 'product18_2.jpg', 'product18_3.jpg'],
    19: ['product19_1.jpg', 'product19_2.jpg', 'product19_3.jpg'],
    20: ['product20_1.jpg', 'product20_2.jpg'],
    21: ['product21_1.jpg', 'product21_2.jpg'],
    22: ['product22_1.jpg', 'product22_2.jpg']
  };

  const availableImages = productImageMap[productId] || [];
  
  if (availableImages.length > 0 && imageIndex <= availableImages.length) {
    const imageName = availableImages[imageIndex - 1];
    try {
      const image = require(`./images/${imageName}`);
      return image;
    } catch (error) {
      // Image not found, use fallback
    }
  }
  
  // Fallback to placeholder if no image found
  return `https://via.placeholder.com/400x300/000000/FFFFFF?text=Product+${productId}`;
};

// Helper function to get all available images for a product
export const getProductImages = (productId: number): string[] => {
  const images: string[] = [];
  
  const productImageMap: { [key: number]: string[] } = {
    1: ['product1_1.jpg', 'product1_2.jpg', 'product1_3.jpg'],
    2: ['product2_1.jpg', 'product2_2.jpg', 'product2_3.jpg'],
    3: ['product3_1.jpg', 'product3_2.jpg', 'product3_3.jpg'],
    4: ['product4_1.jpg'],
    5: ['product5_1.jpg', 'product5_2.jpg'],
    6: ['product6.jpg'],
    7: ['product7.jpg'],
    8: ['product8_1.jpg'],
    9: ['product9_1.jpg', 'product9_2.jpg', 'product9_3.jpg'],
    10: ['product10_1.jpg', 'product10_2.jpg', 'product10_3.jpg'],
    11: ['product11_1.jpg', 'product11_2.jpg'],
    13: ['product13_1.jpg', 'product13_2.jpg'],
    14: ['product14_1.jpg', 'product14_2.jpg', 'product14_3.jpg'],
    15: ['product15_1.jpg', 'product15_2.jpg', 'product15_3.jpg'],
    16: ['product16_1.jpg', 'product16_2.jpg'],
    17: ['product17_1.jpg', 'product17_2.jpg', 'product17_3.jpg'],
    18: ['product18_1.jpg', 'product18_2.jpg', 'product18_3.jpg'],
    19: ['product19_1.jpg', 'product19_2.jpg', 'product19_3.jpg'],
    20: ['product20_1.jpg', 'product20_2.jpg'],
    21: ['product21_1.jpg', 'product21_2.jpg'],
    22: ['product22_1.jpg', 'product22_2.jpg']
  };

  const availableImages = productImageMap[productId] || [];
  
  for (const imageName of availableImages) {
    try {
      const image = require(`./images/${imageName}`);
      images.push(image);
    } catch (error) {
      // Skip this image if it can't be loaded
    }
  }
  
  // Return at least one image (fallback if no images found)
  if (images.length === 0) {
    images.push(`https://via.placeholder.com/400x300/000000/FFFFFF?text=Product+${productId}`);
  }
  
  return images;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Elariosso Aurora Pro",
    price: 39.99,
    image: getProductImage(1),
    images: getProductImages(1),
    description: "Premium wireless headphones engineered for audiophiles who demand perfection.",
    detailedDescription: "The Elariosso Aurora Pro represents the pinnacle of wireless audio technology. Featuring our proprietary SoundWave™ drivers and advanced noise cancellation technology, these headphones deliver an unparalleled listening experience.",
    category: "wireless",
    features: ["Active Noise Cancellation", "40-hour battery", "SoundWave™ drivers", "Premium leather cushions", "Quick charge 15min = 3hrs"],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32Ω",
      "Battery Life": "40 hours",
      "Charging Time": "2 hours",
      "Weight": "280g"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Elariosso Studio Master",
    price: 29.99,
    image: getProductImage(2),
    images: getProductImages(2),
    description: "Professional studio monitor headphones for critical audio production and mixing.",
    detailedDescription: "Designed for professional audio engineers and producers, the Elariosso Studio Master delivers reference-quality sound reproduction with flat frequency response.",
    category: "studio",
    features: ["Flat frequency response", "Open-back design", "Detachable cable", "Modular construction", "Professional mixing"],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "15Hz - 25kHz",
      "Impedance": "250Ω",
      "THD": "<0.1%",
      "Cable Length": "3m detachable",
      "Weight": "320g"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Elariosso Cyber Elite",
    price: 39.99,
    image: getProductImage(3),
    images: getProductImages(3),
    description: "High-performance gaming headset with immersive surround sound and customizable RGB lighting.",
    detailedDescription: "Dominate your gaming sessions with the Elariosso Cyber Elite. Features advanced 7.1 virtual surround sound technology and customizable RGB lighting.",
    category: "gaming",
    features: ["7.1 Virtual Surround", "RGB Lighting System", "Noise-canceling mic", "Memory foam padding", "Lightweight titanium frame"],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Microphone": "Cardioid, noise-canceling",
      "RGB Zones": "12 customizable",
      "Weight": "250g",
      "Cable Length": "2m braided"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Elariosso Portable Plus",
    price: 29.99,
    image: getProductImage(4),
    images: getProductImages(4),
    description: "Ultra-portable wireless headphones designed for the modern traveler and commuter.",
    detailedDescription: "The Elariosso Portable Plus combines premium sound quality with ultimate portability and 35-hour battery life.",
    category: "wireless",
    features: ["Ultra-portable design", "35-hour battery", "Premium travel case", "Bluetooth 5.2", "Quick charge technology"],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Bluetooth": "5.2",
      "Battery Life": "35 hours",
      "Charging Time": "1.5 hours",
      "Weight": "200g"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Elariosso Sport Active",
    price: 19.99,
    image: getProductImage(5),
    images: getProductImages(5),
    description: "Sweat-resistant wireless earbuds engineered for intense workouts and active lifestyles.",
    detailedDescription: "Push your limits with the Elariosso Sport Active earbuds. IPX7 waterproof rating with 8+24 hours battery life.",
    category: "sport",
    features: ["IPX7 waterproof", "Secure-fit ear hooks", "8+24 hours battery", "Ambient awareness", "Fast charging case"],
    specifications: {
      "Driver Size": "10mm dynamic",
      "Frequency Response": "20Hz - 20kHz",
      "Water Resistance": "IPX7",
      "Battery Life": "8+24 hours",
      "Charging Case": "USB-C fast charge",
      "Weight": "5g per earbud"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Elariosso Classic Wired",
    price: 29.99,
    image: getProductImage(6),
    images: getProductImages(6),
    description: "Affordable wired headphones delivering exceptional sound quality for everyday listening.",
    detailedDescription: "Experience pure, uncompressed audio with the Elariosso Classic Wired headphones. Budget-friendly with high-quality 40mm drivers.",
    category: "wired",
    features: ["High-quality 40mm drivers", "Comfortable over-ear design", "Tangle-free cable", "Universal 3.5mm jack", "Affordable price"],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32Ω",
      "Cable Length": "1.5m tangle-free",
      "Connector": "3.5mm gold-plated",
      "Weight": "180g"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Elariosso Bass Pro",
    price: 29.99,
    image: getProductImage(7),
    images: getProductImages(7),
    description: "Bass-enhanced earbuds perfect for hip-hop, electronic music, and bass lovers.",
    detailedDescription: "Feel every beat with the Elariosso Bass Pro earbuds. Enhanced low-frequency response for deep, punchy bass.",
    category: "wired",
    features: ["Enhanced bass response", "Ergonomic design", "Inline controls", "Built-in microphone", "Multiple ear tip sizes"],
    specifications: {
      "Driver Size": "12mm dynamic",
      "Frequency Response": "15Hz - 22kHz",
      "Impedance": "16Ω",
      "Cable Length": "1.2m",
      "Connector": "3.5mm",
      "Weight": "15g"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Elariosso Entry Level",
    price: 39.99,
    image: getProductImage(8),
    images: getProductImages(8),
    description: "Entry-level earbuds offering surprising quality at an unbeatable price point.",
    detailedDescription: "Discover exceptional value with the Elariosso Entry Level earbuds. Clear, balanced sound at budget price.",
    category: "wired",
    features: ["Balanced sound signature", "Lightweight design", "Soft silicone ear tips", "Multiple ear tip sizes", "Unbeatable value"],
    specifications: {
      "Driver Size": "10mm",
      "Frequency Response": "20Hz - 18kHz",
      "Impedance": "32Ω",
      "Cable Length": "1.2m",
      "Connector": "3.5mm",
      "Weight": "12g"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Elariosso True Wireless Elite",
    price: 19.99,
    image: getProductImage(9),
    images: getProductImages(9),
    description: "Premium true wireless earbuds with sleek charging case and exceptional sound quality.",
    detailedDescription: "Experience the freedom of true wireless audio with the Elariosso True Wireless Elite. Featuring premium drivers, comfortable ergonomic design, and a sleek charging case that provides extended battery life for all-day listening.",
    category: "wireless",
    features: ["True wireless freedom", "Premium charging case", "Touch controls", "Auto-pairing technology", "Extended battery life"],
    specifications: {
      "Driver Size": "10mm dynamic",
      "Frequency Response": "20Hz - 20kHz",
      "Bluetooth": "5.2",
      "Battery Life": "6+24 hours with case",
      "Charging Case": "USB-C fast charging",
      "Water Resistance": "IPX4",
      "Weight": "5g per earbud"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Elariosso Blue Wireless Pro",
    price: 39.99,
    image: getProductImage(10),
    images: getProductImages(10),
    description: "Premium wireless earbuds in stylish blue design with professional-grade sound quality.",
    detailedDescription: "Stand out with the Elariosso Blue Wireless Pro earbuds. Featuring distinctive blue design, premium wireless technology, and exceptional audio performance for music lovers who want both style and substance.",
    category: "wireless",
    features: ["Distinctive blue design", "Premium wireless technology", "Professional sound quality", "Comfortable fit", "Long battery life"],
    specifications: {
      "Driver Size": "10mm dynamic",
      "Frequency Response": "20Hz - 20kHz",
      "Bluetooth": "5.2",
      "Battery Life": "7+28 hours with case",
      "Charging Case": "USB-C fast charging",
      "Water Resistance": "IPX5",
      "Weight": "5.5g per earbud"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Elariosso Mini Wireless Buds",
    price: 9.99,
    image: getProductImage(11),
    images: getProductImages(11),
    description: "Ultra-compact wireless earbuds in a tiny charging case - perfect for minimalists.",
    detailedDescription: "Experience ultimate portability with the Elariosso Mini Wireless Buds. These incredibly small wireless earbuds come in a pocket-sized charging case that fits anywhere, delivering surprisingly powerful sound in an ultra-compact package.",
    category: "wireless",
    features: ["Ultra-compact design", "Tiny charging case", "Surprisingly powerful sound", "Pocket-sized portability", "Easy pairing"],
    specifications: {
      "Driver Size": "6mm dynamic",
      "Frequency Response": "20Hz - 20kHz",
      "Bluetooth": "5.0",
      "Battery Life": "4+16 hours with case",
      "Charging Case": "Ultra-compact USB-C",
      "Water Resistance": "IPX4",
      "Weight": "3g per earbud"
    },
    inStock: true
  },
  
  {
    id: 13,
    name: "Elariosso Compact Black Pro",
    price: 19.99,
    image: getProductImage(13),
    images: getProductImages(13),
    description: "Ultra-compact black wireless earbuds designed for portability and premium sound.",
    detailedDescription: "Experience true portability with the Elariosso Compact Black Pro. These ultra-compact wireless earbuds fit perfectly in your palm and deliver exceptional sound quality with a sleek black finish.",
    category: "wireless",
    features: ["Ultra-compact design", "Premium black finish", "True wireless technology", "Pocket-sized charging case", "Crystal clear sound"],
    specifications: {
      "Driver Size": "8mm dynamic",
      "Frequency Response": "20Hz - 20kHz",
      "Bluetooth": "5.1",
      "Battery Life": "5+20 hours with case",
      "Charging Case": "Ultra-compact USB-C",
      "Water Resistance": "IPX4",
      "Weight": "4g per earbud"
    },
    inStock: true
  },
  {
    id: 14,
    name: "Elariosso True Wireless Pro",
    price: 39.99,
    image: getProductImage(14),
    images: getProductImages(14),
    description: "Premium true wireless earbuds with advanced noise cancellation and premium sound.",
    detailedDescription: "Experience ultimate freedom with our flagship true wireless earbuds featuring active noise cancellation and audiophile-grade sound quality.",
    category: "wireless",
    features: ["Active Noise Cancellation", "Transparency mode", "Wireless charging case", "Premium Hi-Res audio", "Touch controls"],
    specifications: {
      "Driver Size": "11mm dynamic",
      "Frequency Response": "20Hz - 40kHz",
      "Bluetooth": "5.3",
      "Battery Life": "6+24 hours",
      "Charging Case": "Wireless + USB-C",
      "Water Resistance": "IPX4"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Elariosso DJ Master",
    price: 29.99,
    image: getProductImage(15),
    images: getProductImages(15),
    description: "Professional DJ headphones with swivel cups and extended frequency response.",
    detailedDescription: "Built for professional DJs and performers, featuring swivel ear cups, reinforced headband, and extended bass response for perfect beat matching.",
    category: "studio",
    features: ["Swivel ear cups", "Reinforced construction", "Extended bass response", "Coiled cable", "Professional monitoring"],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "5Hz - 30kHz",
      "Impedance": "32Ω",
      "SPL": "110dB",
      "Cable Length": "3m coiled",
      "Weight": "340g"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Elariosso Gaming Elite RGB",
    price: 39.99,
    image: getProductImage(16),
    images: getProductImages(16),
    description: "Elite gaming headset with premium RGB lighting and 7.1 surround sound.",
    detailedDescription: "Dominate the competition with our elite gaming headset featuring premium RGB lighting zones, 7.1 virtual surround, and pro-grade microphone.",
    category: "gaming",
    features: ["Premium RGB lighting", "7.1 Virtual Surround", "Pro-grade microphone", "Memory foam padding", "Reinforced steel frame"],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "15Hz - 25kHz",
      "Microphone": "Detachable boom mic",
      "RGB Zones": "16 customizable",
      "Weight": "320g",
      "Connectivity": "USB + 3.5mm"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Elariosso Compact Wireless",
    price: 19.99,
    image: getProductImage(17),
    images: getProductImages(17),
    description: "Compact wireless earbuds perfect for everyday use with great battery life.",
    detailedDescription: "Enjoy wireless freedom with our compact earbuds offering excellent sound quality and all-day battery life in a comfortable, lightweight design.",
    category: "wireless",
    features: ["Compact design", "All-day battery", "Touch controls", "Voice assistant", "Fast pairing"],
    specifications: {
      "Driver Size": "8mm",
      "Frequency Response": "20Hz - 20kHz",
      "Bluetooth": "5.1",
      "Battery Life": "5+20 hours",
      "Charging Time": "1 hour",
      "Weight": "4g per earbud"
    },
    inStock: true
  },
  {
    id: 18,
    name: "Elariosso Sport Pro",
    price: 29.99,
    image: getProductImage(18),
    images: getProductImages(18),
    description: "Professional sport earbuds with advanced waterproofing and secure fit.",
    detailedDescription: "Train harder with our professional sport earbuds featuring advanced IPX8 waterproofing, secure ear hooks, and motivating sound signature.",
    category: "sport",
    features: ["IPX8 waterproof", "Secure sport hooks", "Motivating sound", "Fast charge", "Ambient sound mode"],
    specifications: {
      "Driver Size": "12mm dynamic",
      "Frequency Response": "16Hz - 22kHz",
      "Water Resistance": "IPX8",
      "Battery Life": "10+30 hours",
      "Quick Charge": "15min = 2hrs",
      "Weight": "6g per earbud"
    },
    inStock: true
  },
  {
    id: 19,
    name: "Elariosso Premium Wired",
    price: 9.99,
    image: getProductImage(19),
    images: getProductImages(19),
    description: "Premium wired headphones with audiophile-grade drivers and comfort design.",
    detailedDescription: "Experience audiophile-quality sound with our premium wired headphones featuring high-resolution drivers and superior comfort for extended listening.",
    category: "wired",
    features: ["Audiophile drivers", "Premium comfort", "Detachable cable", "Hi-Res certified", "Velvet ear pads"],
    specifications: {
      "Driver Size": "40mm planar",
      "Frequency Response": "10Hz - 40kHz",
      "Impedance": "64Ω",
      "THD": "<0.05%",
      "Cable Length": "2m detachable",
      "Weight": "220g"
    },
    inStock: true
  },
  {
    id: 20,
    name: "Elariosso Studio Professional",
    price: 29.99,
    image: getProductImage(20),
    images: getProductImages(20),
    description: "Professional studio headphones with premium build quality and accurate sound reproduction.",
    detailedDescription: "Engineered for professional audio work, the Elariosso Studio Professional delivers exceptional sound accuracy with comfortable over-ear design. Perfect for mixing, mastering, and critical listening sessions.",
    category: "studio",
    features: ["Professional studio quality", "Accurate sound reproduction", "Comfortable over-ear design", "Durable construction", "Detachable cable"],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "15Hz - 25kHz",
      "Impedance": "250Ω",
      "THD": "<0.1%",
      "Cable Length": "3m detachable",
      "Weight": "320g"
    },
    inStock: true
  },
  {
    id: 21,
    name: "Elariosso Podcast Pro",
    price: 9.99,
    image: getProductImage(21),
    images: getProductImages(21),
    description: "Professional wired headphones with boom microphone for podcasting and streaming.",
    detailedDescription: "Perfect for content creators, streamers, and podcasters. The Elariosso Podcast Pro features a professional boom microphone, comfortable over-ear design, and crystal-clear audio quality for professional broadcasting.",
    category: "studio",
    features: ["Professional boom microphone", "Comfortable over-ear design", "Crystal-clear audio", "Adjustable headband", "Long cable for studio use"],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Microphone": "Boom mic with noise cancellation",
      "Impedance": "32Ω",
      "Cable Length": "2.5m",
      "Weight": "280g"
    },
    inStock: true
  },
  {
    id: 22,
    name: "Elariosso Podcast Pro",
    price: 19.99,
    image: getProductImage(22),
    images: getProductImages(22),
    description: "Professional podcast headphones with broadcast-quality sound and comfort.",
    detailedDescription: "Perfect for podcasters and content creators, featuring broadcast-quality drivers, superior comfort, and professional monitoring capabilities.",
    category: "studio",
    features: ["Broadcast quality", "Extended comfort", "Professional monitoring", "Detachable boom mic", "Closed-back design"],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "150Ω",
      "Microphone": "Broadcast-grade boom",
      "Cable Length": "3m straight",
      "Weight": "280g"
    },
    inStock: true
  }
];
