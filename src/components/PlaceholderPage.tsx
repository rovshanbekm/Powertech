'use client';

// Placeholder page for unimplemented routes
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Construction, ArrowLeft, Home } from 'lucide-react';

interface PlaceholderPageProps {
  title?: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  const { lang, localizedPath } = useLanguage();

  const content = {
    uz: {
      title: 'Kafolat shartlari',
      description: 'Powertech Uzbekistan mahsulotlari uchun rasmiy kafolat va xizmat ko‘rsatish qoidalari',
      section1_title: 'Umumiy qoidalar',
      section1_description: ' Mazkur kafolat shartlari Powertech Uzbekistan kompaniyasi tomonidan sotiladigan va o‘rnatiladigan mahsulotlarga nisbatan amal qiladi. Kafolat O‘zbekiston Respublikasining “Iste’molchilar huquqlarini himoya qilish to‘g‘risida”gi Qonuniga muvofiq taqdim etiladi.',
      section2_title: ' Kafolat muddati',
      section2_description: ' Powertech Uzbekistan tomonidan yetkazib berilgan va o‘rnatilgan mahsulotlarga 3 (uch) yil kafolat beriladi.',
      section2_description2: "  Kafolat muddati mahsulot mijozga topshirilgan yoki o‘rnatilgan kundan boshlab hisoblanadi.",
      section2_description3: " Kafolat mahsulotdan foydalanish qoidalariga rioya qilingan taqdirda amal qiladi.",
      section3_title: "Kafolat doirasiga kiradigan holatlar",
      section3_description: "ishlab chiqarishdagi nuqsonlar",
      section3_description2: "mahsulotning normal ishlashiga to‘sqinlik qiluvchi texnik nosozliklar",
      section3_description3: "o‘rnatish jarayonida yuzaga kelgan nosozliklar",
      section3_description4: "elektron yoki mexanik qismlarning zavod nuqsonlari",
      section4_title: "Kafolat amal qilmaydigan holatlar",
      section4_description: "mexanik zarba, sinish yoki tashqi shikastlanishlar",
      section4_description2: "suv, namlik, yong‘in yoki kuchlanishdagi o‘zgarishlar",
      section4_description3: "tabiiy ofatlar oqibatida yuzaga kelgan nosozliklar",
      section4_description4: "foydalanish yo‘riqnomasiga amal qilinmagan holatlar",
      section4_description5: "uchinchi shaxslar tomonidan ochilgan yoki ta’mirlangan mahsulotlar",
      section4_description6: "original bo‘lmagan ehtiyot qismlar o‘rnatilishi",
      section4_description7: "normal ekspluatatsiya jarayonida eskiradigan qismlar",
      section5_title: "Kafolat bo‘yicha murojaat qilish tartibi",
      section5_description: " Kafolat bo‘yicha murojaat qilish uchun mijoz sotib olish yoki o‘rnatish hujjatini, mahsulotning seriya raqamini hamda nosozlik tavsifini taqdim etishi lozim.",
      section5_description2: " Murojaat mahsulot texnik ko‘rikdan o‘tkazilgandan so‘ng ko‘rib chiqiladi.",
      section6_title: "Yakuniy qoidalar",
      section6_description: " Powertech Uzbekistan kafolat doirasida mahsulotni ta’mirlash yoki almashtirish huquqini o‘zida saqlab qoladi.",
      section6_description2: " Kafolat shartlari kompaniya tomonidan oldindan ogohlantirilmasdan yangilanishi mumkin.",
      section6_description3: " Mazkur shartlar O‘zbekiston Respublikasi qonunchiligiga muvofiq tartibga solinadi.",
    },
    ru: {
      title: 'Условия гарантии',
      description: 'Официальные правила гарантийного и сервисного обслуживания продукции Powertech Uzbekistan',
      section1_title: 'Общие правила',
      section1_description: 'Настоящие гарантийные условия распространяются на продукцию, продаваемую и устанавливаемую компанией Powertech Uzbekistan. Гарантия предоставляется в соответствии с Законом Республики Узбекистан «О защите прав потребителей».',
      section2_title: 'Срок гарантии',
      section2_description: ' На продукцию, поставляемую и устанавливаемую Powertech Uzbekistan, предоставляется гарантия сроком на 3 (три) года.',
      section2_description2: " Срок гарантии начинается с даты передачи или установки продукции клиенту.",
      section2_description3: " Гарантия действует при условии соблюдения правил эксплуатации продукции.",
      section3_title: "Случаи, подпадающие под гарантию",
      section3_description: "дефекты производства",
      section3_description2: "технические неисправности, препятствующие нормальной работе продукции",
      section3_description3: "неисправности, возникшие в процессе установки",
      section3_description4: "заводские дефекты электронных или механических частей",
      section4_title: "Случаи, не подпадающие под гарантию",
      section4_description: "механические удары, поломки или внешние повреждения",
      section4_description2: "вода, влага, огонь или перепады напряжения",
      section4_description3: "неисправности, возникшие в результате стихийных бедствий",
      section4_description4: "случаи несоблюдения инструкции по эксплуатации",
      section4_description5: "продукция, вскрытая или отремонтированная третьими лицами",
      section4_description6: "установка неоригинальных запасных частей",
      section4_description7: "изнашиваемые детали в процессе нормальной эксплуатации",
      section5_title: "Порядок обращения по гарантии",
      section5_description: " Для обращения по гарантии клиент должен предоставить документ о покупке или установке, серийный номер продукции и описание неисправности.",
      section5_description2: " Обращение рассматривается после технической проверки продукции.",
      section6_title: "Заключительные положения",
      section6_description: " Powertech Uzbekistan оставляет за собой право ремонта или замены продукции в рамках гарантии.",
      section6_description2: " Условия гарантии могут быть изменены компанией без предварительного уведомления.",
      section6_description3: " Настоящие условия регулируются законодательством Республики Узбекистан.",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-background ">
      <Header />
      <section className="container mx-auto px-4 py-16 max-w-4xl mt-20">
        {/* PAGE HEADER */}
        <header className="mb-12">
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            {t.title}
          </h1>
          <p className="text-muted-foreground">
            {t.description}
          </p>
        </header>

        {/* CONTENT */}
        <div className="space-y-8 text-[15px] leading-7 text-muted-foreground">

          {/* Umumiy qoidalar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              {t.section1_title}
            </h2>
            <p>
             {t.section1_description}
            </p>
          </div>

          {/* Kafolat muddati */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              {t.section2_title}
            </h2>
            <div className="space-y-2">
              <p>
               {t.section2_description}
              </p>
              <p>
                {t.section2_description2}
              </p>
              <p>
                {t.section2_description3}
              </p>
            </div>
          </div>

          {/* Kafolat doirasiga kiradigan holatlar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-4 text-foreground">
              {t.section3_title}
            </h2>
            <ul className="space-y-2">
              {[
                `${t.section3_description}`,
                `${t.section3_description2}`,
                `${t.section3_description3}`,
                `${t.section3_description4}`,
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kafolat amal qilmaydigan holatlar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-4 text-foreground">
             {t.section4_title}
            </h2>
            <ul className="space-y-2">
              {[
                `${t.section4_description}`,
                `${t.section4_description2}`,
                `${t.section4_description3}`,
                `${t.section4_description4}`,
                `${t.section4_description5}`,
                `${t.section4_description6}`,
                `${t.section4_description7}`,
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-destructive shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Murojaat tartibi */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              {t.section5_title}
            </h2>
            <div className="space-y-2">
              <p>
               {t.section5_description}
              </p>
              <p>
                {t.section5_description2}
              </p>
            </div>
          </div>

          {/* Yakuniy qoidalar */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium mb-3 text-foreground">
              {t.section6_title}
            </h2>
            <div className="space-y-2">
              <p>
               {t.section6_description}
              </p>
              <p>
                {t.section6_description2}
              </p>
              <p>
                {t.section6_description3}
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}