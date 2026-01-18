// Centralized API client using Axios
// Next.js compatible: uses environment variables for base URL

import axios from 'axios';
import type { Category, ProductListItem, ProductDetail, ContactPayload, ContactResponse } from './types';

// Next.js uses NEXT_PUBLIC_ prefix for client-side environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shaxriyorbek.uz';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Categories
export async function fetchCategories(): Promise<Category[]> {
  const response = await apiClient.get<Category[]>('/categories/');
  return response.data;
}

// Products list
export async function fetchProducts(categoryId?: string): Promise<ProductListItem[]> {
  const params = categoryId ? { category_id: categoryId } : {};
  const response = await apiClient.get<ProductListItem[]>('/products/', { params });
  return response.data;
}

// Product detail
export async function fetchProductDetail(id: string): Promise<ProductDetail> {
  const response = await apiClient.get<ProductDetail>(`/products/${id}/`);
  return response.data;
}

// Contact form
export async function submitContact(data: ContactPayload): Promise<ContactResponse> {
  const response = await apiClient.post<ContactResponse>('/contacts/', data);
  return response.data;
}

export { apiClient };
