// Category filter section with in-place product filtering
import { motion } from 'framer-motion';
import { Shield, Wifi, Key, Camera, DoorOpen, Gauge, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useCategories, useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '../ui/button';
import Link from 'next/link';

const categoryIcons: Record<string, any> = {
  gates: DoorOpen,
  barriers: Gauge,
  remotes: Wifi,
  security: Shield,
  locks: Key,
  cameras: Camera,
};

const categoryColors: Record<string, string> = {
  gates: 'from-blue-500 to-blue-600',
  barriers: 'from-cyan-500 to-cyan-600',
  remotes: 'from-indigo-500 to-indigo-600',
  security: 'from-emerald-500 to-emerald-600',
  locks: 'from-violet-500 to-violet-600',
  cameras: 'from-rose-500 to-rose-600',
};

interface CategoryFilterSectionProps {
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export function CategoryFilterSection({ selectedCategory, onCategoryChange }: CategoryFilterSectionProps) {
  const { t, localizedPath } = useLanguage();
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();
  const { data: products, isLoading: isProductsLoading, isFetching } = useProducts(selectedCategory || undefined);

  const displayedProducts = products?.slice(0, 6) || [];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{t.categories.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.categories.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.categories.subtitle}</p>
        </motion.div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {/* All button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === null
                ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-primary shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
          >
            {t.common.all}
          </motion.button>

          {isCategoriesLoading ? (
            <>
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-28 rounded-full" />
              ))}
            </>
          ) : (
            categories?.map((category, index) => {
              const Icon = categoryIcons[Object.keys(categoryIcons)[index % 6]] || DoorOpen;

              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-primary shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              );
            })
          )}
        </div>

        {/* Loading indicator */}
        {isFetching && (
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm">{t.common.loading}</span>
          </div>
        )}

        {/* Products grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isFetching ? 0.5 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isProductsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-80 rounded-2xl" />
              ))}
            </div>
          ) : displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t.common.productsNotFound}</p>
            </div>

          )}
        </motion.div>
        <Link href={localizedPath('/products')} className='flex justify-center mt-5'><Button className=''>{t.common.viewAllProducts}</Button></Link>

        {/* Results count */}
        {!isProductsLoading && products && products.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-muted-foreground mt-6"
          >
            {/* {products.length} {t.common.productsFound} */}
          </motion.p>
        )}
      </div>
    </section>
  );
}