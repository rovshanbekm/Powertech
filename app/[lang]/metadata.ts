import type { Metadata } from 'next';
import { dictionaries } from '@/lib/i18n/dictionaries';
import type { Language } from '@/lib/types';

export function generateMetadata(lang: Language): Metadata {
  const t = dictionaries[lang];

  return {
    title: lang === 'uz'
      ? ' Powertech - Avtomatik darvozalar va xavfsizlik tizimlari'
      : ' Powertech - Автоматические ворота и системы безопасности',
    description: t?.hero.subtitle,
    keywords: lang === 'uz'
      ? 'avtomatik darvozalar, shlagbaumlar, xavfsizlik tizimlari, avtomatika, O\'zbekiston'
      : 'автоматические ворота, шлагбаумы, системы безопасности, автоматика, Узбекистан',
    openGraph: {
      title: lang === 'uz'
        ? ' Powertech - Avtomatik darvozalar va xavfsizlik tizimlari'
        : ' Powertech - Автоматические ворота и системы безопасности',
      description: t?.hero.subtitle,
      type: 'website',
    },
  };
}
