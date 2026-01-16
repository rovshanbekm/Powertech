import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header";
import { routing } from "@/src/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ToastContainer } from 'react-toastify';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return (
    <div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </NextIntlClientProvider>
    </div>
  );
}
