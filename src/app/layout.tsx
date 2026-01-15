import { Assistant } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ApiProvider } from "../components/provider";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

const assistant  = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: [ "200", "300", "400", "500", "600", "700", "800"],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations();
  return {
    title: "Powertech",
    description: t("seo"),
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${assistant.variable} antialiased`}>
        <NextIntlClientProvider>
          <ApiProvider>{children}</ApiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
