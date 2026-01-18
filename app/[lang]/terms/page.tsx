'use client';

import { PlaceholderPage } from '@/components/PlaceholderPage';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TermsPage() {
  const { lang } = useLanguage();
  return <PlaceholderPage title={lang === 'uz' ? 'Foydalanish shartlari' : 'Условия использования'} />;
}
