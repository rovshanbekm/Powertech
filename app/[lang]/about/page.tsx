'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTA } from '@/components/sections/CTA';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Shield, Award, Users, Clock, CheckCircle, Building2, Wrench, Headphones } from 'lucide-react';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function AboutPage() {
  const { t, lang } = useLanguage();

  const stats = [
    { value: '10+', label: lang === 'uz' ? 'Yillik tajriba' : 'Лет опыта' },
    { value: '5000+', label: lang === 'uz' ? 'Bajarilgan loyihalar' : 'Выполненных проектов' },
    { value: '50+', label: lang === 'uz' ? 'Malakali mutaxassislar' : 'Квалифицированных специалистов' },
    { value: '24/7', label: lang === 'uz' ? 'Texnik yordam' : 'Техническая поддержка' },
  ];

  const values = [
    {
      icon: Shield,
      title: lang === 'uz' ? 'Ishonchlilik' : 'Надежность',
      description: lang === 'uz'
        ? 'Faqat sifatli mahsulotlar va uzoq muddatli kafolat bilan xizmat ko\'rsatamiz'
        : 'Работаем только с качественными продуктами и предоставляем долгосрочную гарантию',
    },
    {
      icon: Award,
      title: lang === 'uz' ? 'Professional xizmat' : 'Профессиональный сервис',
      description: lang === 'uz'
        ? 'Malakali mutaxassislar tomonidan o\'rnatish va texnik xizmat ko\'rsatish'
        : 'Монтаж и техническое обслуживание квалифицированными специалистами',
    },
    {
      icon: Users,
      title: lang === 'uz' ? 'Mijozlarga e\'tibor' : 'Клиентоориентированность',
      description: lang === 'uz'
        ? 'Har bir mijoz uchun individual yondashuv va bepul konsultatsiya'
        : 'Индивидуальный подход к каждому клиенту и бесплатная консультация',
    },
    {
      icon: Clock,
      title: lang === 'uz' ? 'Tezkor xizmat' : 'Быстрое обслуживание',
      description: lang === 'uz'
        ? 'Buyurtmalarni tez bajarish va o\'z vaqtida yetkazib berish'
        : 'Быстрое выполнение заказов и своевременная доставка',
    },
  ];

  const services = [
    {
      icon: Building2,
      title: lang === 'uz' ? 'Avtomatik darvozalar' : 'Автоматические ворота',
      description: lang === 'uz'
        ? 'Surma, qanotli va garaj darvozalari uchun avtomatika tizimlari'
        : 'Системы автоматики для откатных, распашных и гаражных ворот',
    },
    {
      icon: Shield,
      title: lang === 'uz' ? 'Xavfsizlik tizimlari' : 'Системы безопасности',
      description: lang === 'uz'
        ? 'CCTV, signalizatsiya va kirish nazorati tizimlari'
        : 'Системы видеонаблюдения, сигнализации и контроля доступа',
    },
    {
      icon: Wrench,
      title: lang === 'uz' ? 'O\'rnatish xizmati' : 'Услуги монтажа',
      description: lang === 'uz'
        ? 'Professional o\'rnatish va sozlash xizmatlari'
        : 'Профессиональные услуги по установке и настройке',
    },
    {
      icon: Headphones,
      title: lang === 'uz' ? 'Texnik yordam' : 'Техническая поддержка',
      description: lang === 'uz'
        ? '24/7 texnik qo\'llab-quvvatlash va ta\'mirlash xizmati'
        : 'Круглосуточная техническая поддержка и ремонт',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
                {lang === 'uz' ? 'Biz haqimizda' : 'О нас'}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Powertech
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {lang === 'uz'
                  ? 'O\'zbekistonda avtomatik darvozalar, shlagbaumlar va xavfsizlik tizimlari bo\'yicha yetakchi kompaniya. 10 yildan ortiq tajriba va minglab muvaffaqiyatli loyihalar.'
                  : 'Ведущая компания в Узбекистане по автоматическим воротам, шлагбаумам и системам безопасности. Более 10 лет опыта и тысячи успешных проектов.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-8 md:p-10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center relative"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                    {index < stats.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
                  {lang === 'uz' ? 'Bizning maqsadimiz' : 'Наша миссия'}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
                  {lang === 'uz'
                    ? 'Xavfsizlik va qulaylikni ta\'minlash'
                    : 'Обеспечение безопасности и комфорта'}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {lang === 'uz'
                    ? 'Biz mijozlarimizga eng zamonaviy avtomatika va xavfsizlik yechimlarini taqdim etish orqali ularning hayotini xavfsiz va qulay qilishga intilamiz. Jahon brendlari bilan hamkorlik va doimiy rivojlanish bizning asosiy tamoyillarimizdir.'
                    : 'Мы стремимся сделать жизнь наших клиентов безопасной и комфортной, предоставляя им самые современные решения в области автоматики и безопасности. Сотрудничество с мировыми брендами и постоянное развитие — наши основные принципы.'}
                </p>
                <ul className="space-y-3">
                  {[
                    lang === 'uz' ? 'Jahon standartlariga mos mahsulotlar' : 'Продукция, соответствующая мировым стандартам',
                    lang === 'uz' ? '5 yillik rasmiy kafolat' : '5-летняя официальная гарантия',
                    lang === 'uz' ? 'Bepul texnik konsultatsiya' : 'Бесплатная техническая консультация',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-400/20 to-primary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield className="w-20 h-20 text-cyan-500 mx-auto mb-4" />
                    <p className="text-2xl font-bold text-foreground"> Powertech</p>
                    <p className="text-muted-foreground mt-2">
                      {lang === 'uz' ? 'Xavfsizlik va avtomatika' : 'Безопасность и автоматика'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
                {lang === 'uz' ? 'Bizning qadriyatlarimiz' : 'Наши ценности'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                {lang === 'uz' ? 'Nima uchun bizni tanlashadi?' : 'Почему выбирают нас?'}
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
                {lang === 'uz' ? 'Xizmatlarimiz' : 'Наши услуги'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                {lang === 'uz' ? 'Biz nima qilamiz?' : 'Что мы делаем?'}
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex gap-4 bg-card rounded-xl p-6 border border-border hover:border-cyan-400/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
