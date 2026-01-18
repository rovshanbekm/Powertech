'use client';

import { PlaceholderPage } from '@/components/PlaceholderPage';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PrivacyPage() {
  const { lang } = useLanguage();
  return <PlaceholderPage title={lang === 'uz' ? 'Maxfiylik siyosati' : 'Политика конфиденциальности'} />;
}
