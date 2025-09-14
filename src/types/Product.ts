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

export interface CartItem extends Product {
  quantity: number;
}