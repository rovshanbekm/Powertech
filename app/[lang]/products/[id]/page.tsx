'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGallery } from '@/components/ProductGallery';
import { SpecsAccordion } from '@/components/SpecsAccordion';
import { ProductCard } from '@/components/ProductCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Button } from '@/components/ui/button';
import { useProductDetail, useProducts } from '@/hooks/useProducts';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { formatPrice } from '@/lib/format';
import { ChevronRight, Share2, Phone, MessageCircle, Shield, Truck, Package } from 'lucide-react';
import { toast } from 'sonner';

export default function ProductDetailPage({ params }: { params: { id: string; lang: string } }) {
  const { lang, t, localizedPath } = useLanguage();
  const router = useRouter();

  const { data: product, isLoading, isError, refetch } = useProductDetail(params.id);
  const { data: allProducts } = useProducts(product?.category?.id);

  const relatedProducts = allProducts?.filter(p => p.id !== params.id).slice(0, 4) || [];

  const handleOrder = () => {
    const subject = encodeURIComponent(product?.title || '');
    router.push(localizedPath(`/contact?subject=${subject}`));
  };

  if (isLoading) return <div className="min-h-screen bg-background"><Header /><main className="pt-20"><LoadingSpinner text={t.common.loading} /></main><Footer /></div>;
  if (isError || !product) return <div className="min-h-screen bg-background"><Header /><main className="pt-20"><ErrorMessage onRetry={refetch} /></main><Footer /></div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="bg-muted/50 border-b border-border">
          <div className="container-wide py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href={localizedPath('/')} className="text-muted-foreground hover:text-foreground transition-colors">{t.breadcrumb.home}</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link href={localizedPath('/products')} className="text-muted-foreground hover:text-foreground transition-colors">{t.breadcrumb.products}</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">{product.title}</span>
            </nav>
          </div>
        </div>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <ProductGallery images={product.images} title={product.title} />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <p className="text-cyan-500 font-medium text-sm uppercase tracking-wider mb-2">{product.category?.name}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.title}</h1>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-foreground">{formatPrice(product.price, lang)}</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-green-600 font-medium">{t.common.inStock}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Button variant="accent" size="lg" className="flex-1" onClick={handleOrder}>{t.products.order}</Button>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" asChild><a href="tel:+998339556666"><Phone className="w-4 h-4 mr-2" />{t.common.call}</a></Button>
                  <Button variant="outline" className="flex-1" asChild><a href="https://t.me/powertech0" target="_blank"><MessageCircle className="w-4 h-4 mr-2" />Telegram</a></Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                  <div className="text-center"><Shield className="w-6 h-6 text-cyan-500 mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t.trust.warranty}</p></div>
                  <div className="text-center"><Truck className="w-6 h-6 text-cyan-500 mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t.trust.delivery}</p></div>
                  <div className="text-center"><Package className="w-6 h-6 text-cyan-500 mx-auto mb-2" /><p className="text-xs text-muted-foreground">{t.trust.installation}</p></div>
                </div>
              </motion.div>
            </div>

            {product.specifications && product.specifications.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.products.specifications}</h2>
                <SpecsAccordion specifications={product.specifications} />
              </div>
            )}

            {relatedProducts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.products.relatedProducts}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {relatedProducts.map((item, index) => (
                    <ProductCard key={item.id} product={item} index={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
