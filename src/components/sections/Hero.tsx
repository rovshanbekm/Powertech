'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Factory, Rocket, Settings, Shield, ShieldCheck, Timer, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { PowertechLogo } from '../assets';

export function Hero() {
  const { t, localizedPath, lang } = useLanguage();

  const stats = lang === 'uz'
    ? [{ value: '5000+', label: "O'rnatilgan tizimlar" }, { value: '98%', label: 'Mijozlar mamnuniyati' }, { value: '3 yil', label: 'Kafolat muddati' }]
    : [{ value: '5000+', label: 'Установленных систем' }, { value: '98%', label: 'Довольных клиентов' }, { value: '3 года', label: 'Гарантия' }];

  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">{lang === 'uz' ? "O'zbekistonda №1 avtomatika brendi" : 'Бренд автоматики №1 в Узбекистане'}</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              {t.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">{t.hero.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" className='h-14 rounded-xl xl:px-10 text-lg' asChild>
                <Link href={localizedPath('/products')} className="group">{t.hero.cta}<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
              <Button variant="hero-secondary" className='h-14 rounded-xl xl:px-10 text-lg' asChild>
                <Link href={localizedPath('/contact')}>{t.hero.ctaSecondary}</Link>
              </Button>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex  gap-8 mt-12 justify-center pb-3 lg:pb-10 lg:justify-start md:pb-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-[12px] md:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* o'ng tomondigi malumot */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-cyan-600/20 rounded-3xl blur-3xl scale-95" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-light to-primary rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <img src={PowertechLogo.src} alt="" />
                    </div>
                    <p className="text-white/60 text-sm">{lang === 'uz' ? 'Premium avtomatika' : 'Премиум автоматика'}</p>
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="absolute -left-8 top-1/4 bg-white rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-green-600" /></div>
                    <div><p className="text-xs text-muted-foreground">{lang === 'uz' ? 'Xavfsizlik' : 'Безопасность'}</p><p className="text-sm font-semibold text-foreground">{lang === 'uz' ? 'Kafolatlangan' : 'Гарантировано'}</p></div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="absolute -right-4 bottom-1/4 bg-white rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center"><Timer className="w-4 h-4 text-cyan-600" /></div>
                    <div><p className="text-xs text-muted-foreground">{lang === 'uz' ? 'Tezkor' : 'Быстрый'}</p><p className="text-sm font-semibold text-foreground">{lang === 'uz' ? "O'rnatish" : 'Монтаж'}</p></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 25% 98%)" />
        </svg>
      </div>
    </section>
  );
}
