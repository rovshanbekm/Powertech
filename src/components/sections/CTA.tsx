'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function CTA() {
  const { t, localizedPath } = useLanguage();

  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-primary via-primary/95 to-primary rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-xl shadow-primary/20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.1)_0%,_transparent_50%)]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                {t?.cta.title}
              </h2>
              <p className="text-white/70 max-w-xl text-base md:text-lg leading-relaxed">
                {t?.cta.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
              <Button variant="hero" size="lg" asChild className="shadow-lg shadow-cyan-500/20">
                <Link href={localizedPath('/contact')} className="group">
                  {t?.cta.button}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="tel:+998339556666">
                  <Phone className="w-5 h-5 mr-2" />
                  {t?.common.call}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
