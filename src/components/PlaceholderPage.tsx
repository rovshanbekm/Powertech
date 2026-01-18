'use client';

// Placeholder page for unimplemented routes
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Construction, ArrowLeft, Home } from 'lucide-react';

interface PlaceholderPageProps {
  title?: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  const { lang, localizedPath } = useLanguage();

  const content = {
    uz: {
      heading: 'Sahifa tayyorlanmoqda',
      description: 'Bu sahifa hozirda ishlab chiqilmoqda. Tez orada yangi va foydali kontent bilan qaytamiz.',
      backHome: 'Bosh sahifaga qaytish',
      comingSoon: 'Tez kunda!',
    },
    ru: {
      heading: 'Страница в разработке',
      description: 'Эта страница в настоящее время находится в разработке. Скоро мы вернемся с новым и полезным контентом.',
      backHome: 'Вернуться на главную',
      comingSoon: 'Скоро!',
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="min-h-[70vh] flex items-center justify-center section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-lg mx-auto text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 flex items-center justify-center"
              >
                <Construction className="w-12 h-12 text-cyan-500" />
              </motion.div>

              {/* Badge */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-500 text-sm font-medium mb-4"
              >
                {t.comingSoon}
              </motion.span>

              {/* Title */}
              {title && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-muted-foreground text-sm uppercase tracking-wider mb-2"
                >
                  {title}
                </motion.p>
              )}

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                {t.heading}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                {t.description}
              </motion.p>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button variant="accent" size="lg" asChild>
                  <Link href={localizedPath('/')}>
                    <Home className="w-4 h-4 mr-2" />
                    {t.backHome}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}