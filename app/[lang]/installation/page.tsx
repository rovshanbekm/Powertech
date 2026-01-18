'use client';

import { PlaceholderPage } from '@/components/PlaceholderPage';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function InstallationPage() {
  const { lang } = useLanguage();
  return <PlaceholderPage title={lang === 'uz' ? 'O\'rnatish xizmati' : 'Услуга установки'} />;
}
