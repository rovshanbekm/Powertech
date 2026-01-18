'use client';

// Language Context for i18n - Next.js compatible pattern
// Uses URL-based routing with /uz, /ru, and /en prefixes

import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { dictionaries } from './dictionaries';
import type { Language } from '../types';

// Use a flexible type for the dictionary
type DictionaryType = typeof dictionaries.uz | typeof dictionaries.ru;

interface LanguageContextType {
  lang: Language;
  t: DictionaryType;
  switchLanguage: (newLang: Language) => void;
  localizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  lang: initialLang
}: {
  children: React.ReactNode;
  lang: Language;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Extract language from URL pathname
  const getLangFromPath = (): Language => {
    if (!pathname) return initialLang || 'uz';
    const pathParts = pathname.split('/');
    if (pathParts[1] === 'ru') return 'ru';
    if (pathParts[1] === 'uz') return 'uz';
    if (pathParts[1] === 'en') return 'uz'; // Default to uz for en (not implemented yet)
    return initialLang || 'uz'; // fallback
  };

  const lang = getLangFromPath();
  const t = dictionaries[lang];

  const switchLanguage = useCallback((newLang: Language) => {
    const currentPath = pathname || '/';
    // Remove current language prefix and add new one
    const pathWithoutLang = currentPath.replace(/^\/(uz|ru|en)/, '') || '/';
    const newPath = `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    router.push(newPath);
  }, [pathname, router]);

  const localizedPath = useCallback((path: string) => {
    // Ensure path starts with language prefix
    if (path.startsWith('/uz') || path.startsWith('/ru') || path.startsWith('/en')) {
      return path;
    }
    return `/${lang}${path === '/' ? '' : path}`;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, t, switchLanguage, localizedPath }),
    [lang, t, switchLanguage, localizedPath]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { LanguageContext };
