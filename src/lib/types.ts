// API Data Models - Next.js compatible types

export interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
  id: string;
  image: string;
}

export interface ProductListItem {
  id: string;
  title: string;
  price: string;
  image: string;
  category: {
    id: string;
    name: string;
  };
  images: ProductImage[];
}

export interface SpecificationItem {
  name: string;
  description: string;
}

export interface SpecificationSection {
  title: string;
  items: SpecificationItem[];
}

export interface ProductDetail {
  id: string;
  title: string;
  description: string;
  price: string;
  category: {
    id: string;
    name: string;
  };
  images: ProductImage[];
  specifications: SpecificationSection[];
}

export interface ContactPayload {
  name: string;
  company: string;
  address: string;
  email: string;
  phone: string;
  message_subject: string;
  message: string;
}

export interface ContactResponse {
  message: string;
}

// Language type
export type Language = 'uz' | 'ru';
