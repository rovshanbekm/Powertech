'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { CategoryFilterSection } from '@/components/sections/CategoryFilterSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Partners } from '@/components/sections/Partners';
import { CTA } from '@/components/sections/CTA';
import type { Language } from '@/lib/types';

export default function IndexPage({ params }: { params: { lang: Language } }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryFilterSection 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
