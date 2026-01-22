'use client';

// Product card component - displays API product data

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { formatPrice } from '@/lib/format';
import type { ProductListItem } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: ProductListItem;
  index?: number;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, index = 0, viewMode = 'grid' }: ProductCardProps) {
  const { lang, localizedPath } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={localizedPath(`/products/${product.id}`)}
        className={`group block bg-card rounded-2xl border border-border overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg ${viewMode === 'list' ? 'flex' : ''
          }`}
      >
        {/* Image */}
        <div className={`relative bg-muted ${viewMode === 'list' ? 'w-38 md:w-48 shrink-0' : 'w-full h-60 aspect-square'}`}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-6">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 rounded-xl" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 lg:p-5 flex-1">
          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
            {product.category?.name}
          </p>
          <h3 className="font-semibold text-foreground group-hover:text-cyan-500 transition-colors mb-2">
            {product.title}
          </h3>

          {/* Price */}
          <div className='flex items-center justify-between'>
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.price, lang)}
            </span>
            <Link
              href={localizedPath(`/products/${product.id}`)}
              className="
    group inline-flex items-center gap-2
    text-primary font-semibold
    transition-all duration-300
    hover:gap-3 hover:text-primary/80
  "
            >
              Batafsil ko‘rish
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
