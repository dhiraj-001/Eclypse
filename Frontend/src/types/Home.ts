export interface ProductSize {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: string[];
  sizes: ProductSize[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  avatar: string;
}