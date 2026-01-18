'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductCard } from '@/components/ProductCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { useProducts } from '@/hooks/useProducts';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Grid3X3, LayoutList } from 'lucide-react';

export default function ProductsPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryId = searchParams?.get('category') || null;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const { data: products, isLoading, isError, refetch } = useProducts(categoryId || undefined);

  const handleCategoryChange = (newCategoryId: string | null) => {
    const params = new URLSearchParams(searchParams?.toString() || '');
    if (newCategoryId) {
      params.set('category', newCategoryId);
    } else {
      params.delete('category');
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="bg-primary py-16">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t.products.title}</h1>
              <p className="text-white/70 max-w-2xl mx-auto">{t.products.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <CategoryFilter activeCategory={categoryId} onCategoryChange={handleCategoryChange} />

            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground text-sm">
                {products?.length || 0} {t.common.productsFound}
              </p>
              <div className="flex items-center gap-2">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}>
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}>
                  <LayoutList className="w-5 h-5" />
                </button>
              </div>
            </div>

            {isLoading && <LoadingSpinner text={t.common.loading} />}
            {isError && <ErrorMessage onRetry={refetch} />}
            
            {!isLoading && !isError && (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                {products?.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
