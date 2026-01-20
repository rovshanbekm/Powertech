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
    <div className="min-h-screen bg-background ">
      <Header />
      <section className="container mx-auto px-4 py-16 max-w-4xl mt-20">
        {/* PAGE HEADER */}
        <header className="mb-12">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Kafolat shartlari
          </h1>
          <p className="text-muted-foreground">
            Powertech Uzbekistan mahsulotlari uchun rasmiy kafolat va xizmat ko‘rsatish qoidalari
          </p>
        </header>

        {/* CONTENT */}
        <div className="space-y-8 text-[15px] leading-7 text-muted-foreground">

          {/* Umumiy qoidalar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              Umumiy qoidalar
            </h2>
            <p>
              Mazkur kafolat shartlari Powertech Uzbekistan kompaniyasi tomonidan
              sotiladigan va o‘rnatiladigan mahsulotlarga nisbatan amal qiladi.
              Kafolat O‘zbekiston Respublikasining “Iste’molchilar huquqlarini
              himoya qilish to‘g‘risida”gi Qonuniga muvofiq taqdim etiladi.
            </p>
          </div>

          {/* Kafolat muddati */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              Kafolat muddati
            </h2>
            <div className="space-y-2">
              <p>
                Powertech Uzbekistan tomonidan yetkazib berilgan va o‘rnatilgan
                mahsulotlarga 3 (uch) yil kafolat beriladi.
              </p>
              <p>
                Kafolat muddati mahsulot mijozga topshirilgan yoki o‘rnatilgan
                kundan boshlab hisoblanadi.
              </p>
              <p>
                Kafolat mahsulotdan foydalanish qoidalariga rioya qilingan taqdirda
                amal qiladi.
              </p>
            </div>
          </div>

          {/* Kafolat doirasiga kiradigan holatlar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-4 text-foreground">
              Kafolat doirasiga kiradigan holatlar
            </h2>
            <ul className="space-y-2">
              {[
                "ishlab chiqarishdagi nuqsonlar",
                "mahsulotning normal ishlashiga to‘sqinlik qiluvchi texnik nosozliklar",
                "o‘rnatish jarayonida yuzaga kelgan nosozliklar",
                "elektron yoki mexanik qismlarning zavod nuqsonlari",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kafolat amal qilmaydigan holatlar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-4 text-foreground">
              Kafolat amal qilmaydigan holatlar
            </h2>
            <ul className="space-y-2">
              {[
                "mexanik zarba, sinish yoki tashqi shikastlanishlar",
                "suv, namlik, yong‘in yoki kuchlanishdagi o‘zgarishlar",
                "tabiiy ofatlar oqibatida yuzaga kelgan nosozliklar",
                "foydalanish yo‘riqnomasiga amal qilinmagan holatlar",
                "uchinchi shaxslar tomonidan ochilgan yoki ta’mirlangan mahsulotlar",
                "original bo‘lmagan ehtiyot qismlar o‘rnatilishi",
                "normal ekspluatatsiya jarayonida eskiradigan qismlar",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-destructive shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Murojaat tartibi */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              Kafolat bo‘yicha murojaat qilish tartibi
            </h2>
            <div className="space-y-2">
              <p>
                Kafolat bo‘yicha murojaat qilish uchun mijoz sotib olish yoki
                o‘rnatish hujjatini, mahsulotning seriya raqamini hamda nosozlik
                tavsifini taqdim etishi lozim.
              </p>
              <p>
                Murojaat mahsulot texnik ko‘rikdan o‘tkazilgandan so‘ng ko‘rib
                chiqiladi.
              </p>
            </div>
          </div>

          {/* Yakuniy qoidalar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              Yakuniy qoidalar
            </h2>
            <div className="space-y-2">
              <p>
                Powertech Uzbekistan kafolat doirasida mahsulotni ta’mirlash yoki
                almashtirish huquqini o‘zida saqlab qoladi.
              </p>
              <p>
                Kafolat shartlari kompaniya tomonidan oldindan ogohlantirilmasdan
                yangilanishi mumkin.
              </p>
              <p>
                Mazkur shartlar O‘zbekiston Respublikasi qonunchiligiga muvofiq
                tartibga solinadi.
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}