'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useProducts } from '@/hooks/useProducts';

export function FeaturedProducts() {
  const { t, localizedPath } = useLanguage();
  const { data: products, isLoading } = useProducts();

  // Show only first 6 products
  const featuredProducts = products?.slice(0, 6) || [];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{t.products.featuredLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{t.products.featured}</h2>
          </div>
          <Button variant="outline" asChild>
            <Link href={localizedPath('/products')} className="group">
              {t.common.viewAll}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {isLoading ? (
          <LoadingSpinner text={t.common.loading} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
