'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Wifi, Key, Camera, DoorOpen, Gauge } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useCategories } from '@/hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';

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

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function Categories() {
  const { t, localizedPath } = useLanguage();
  const { data: categories, isLoading } = useCategories();

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{t.categories.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t.categories.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.categories.subtitle}</p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => <Skeleton key={i} className="h-48 rounded-2xl" />)}
          </div>
        ) : (
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories?.map((category, index) => {
              const Icon = categoryIcons[Object.keys(categoryIcons)[index % 6]] || DoorOpen;
              const color = categoryColors[Object.keys(categoryColors)[index % 6]] || 'from-cyan-500 to-cyan-600';
              
              return (
                <motion.div key={category.id} variants={item} whileHover={{ y: -4 }}>
                  <Link href={localizedPath(`/products?category=${category.id}`)} className="group block bg-card rounded-2xl p-6 border border-border hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-cyan-500 transition-colors">{category.name}</h3>
                    <div className="flex items-center text-cyan-500 text-sm font-medium">
                      <span>{t.common.view}</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
