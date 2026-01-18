import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { generateMetadata as genMeta } from './metadata';
import type { Language } from '@/lib/types';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  return genMeta(params.lang);
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  return <LanguageProvider lang={params.lang}>{children}</LanguageProvider>;
}
