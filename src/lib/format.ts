// Price formatting utilities - Next.js compatible

import type { Language } from './types';

/**
 * Format price with thousands separators
 * @param price - Price value (number or string)
 * @param lang - Language for currency label
 * @returns Formatted price string
 */
export function formatPrice(price: number | string, lang: Language = 'uz'): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  
  if (isNaN(numPrice)) {
    return '0';
  }
  
  const formatted = new Intl.NumberFormat('uz-UZ').format(numPrice);
  const currency = lang === 'uz' ? "so'm" : 'сум';
  
  return `${formatted} ${currency}`;
}

/**
 * Parse price string to number
 */
export function parsePrice(price: string): number {
  return parseFloat(price) || 0;
}
