'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, localizedPath } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: localizedPath('/') },
    { name: t.nav.products, href: localizedPath('/products') },
    { name: t.nav.about, href: localizedPath('/about') },
    { name: t.nav.contact, href: localizedPath('/contact') },
  ];

  const isActive = (href: string) => pathname === href || pathname === href + '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <nav className="container-wide" aria-label="Global">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={localizedPath("/")} className="flex items-center">
            <img
              src="/logo.png"
              alt=" Powertech Logo"
              className="h-4 md:h-5 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? 'text-cyan-400' : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a href="tel:+998339556666" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{t.header.phone}</span>
            </a>
            <Button variant="accent" size="sm" asChild>
              <Link href={localizedPath('/contact')}>{t.header.contact}</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button type="button" className="p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full bg-primary z-50 lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-white font-bold text-lg">Menu</span>
                <button type="button" className="p-2 text-white" onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 space-y-2 bg-primary">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(item.href) ? 'bg-cyan-400/20 text-cyan-400' : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <Button variant="accent" className="w-full" asChild>
                    <Link href={localizedPath('/contact')} onClick={() => setMobileMenuOpen(false)}>
                      {t.header.contact}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
