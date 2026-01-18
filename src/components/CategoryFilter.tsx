// Category filter component - fetches from API

import { motion } from 'framer-motion';
import { useCategories } from '@/hooks/useProducts';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Skeleton } from '@/components/ui/skeleton';

interface CategoryFilterProps {
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const { t } = useLanguage();
  const { data: categories, isLoading } = useCategories();
  
  if (isLoading) {
    return (
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeCategory === null
            ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-primary'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
      >
        {t.common.all}
      </motion.button>
      
      {categories?.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-primary'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}
