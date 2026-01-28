import { motion } from 'framer-motion';
import { Shield, Award, Wrench, Clock, Headphones, BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function WhyChooseUs() {
  const { t, lang } = useLanguage();

  const benefits = lang === 'uz' ? [
    { icon: Shield, title: "3 yillik kafolat", description: "Barcha mahsulotlarimizga 3 yillik rasmiy kafolat beramiz" },
    { icon: Award, title: "Sertifikatlangan sifat", description: "Xalqaro ISO standartlariga mos keluvchi mahsulotlar" },
    { icon: Wrench, title: "Professional o'rnatish", description: "Tajribali mutaxassislar tomonidan sifatli o'rnatish" },
    { icon: Clock, title: "Tezkor yetkazib berish", description: "Toshkent bo'ylab 24 soat ichida bepul yetkazib berish" },
    { icon: Headphones, title: "24/7 qo'llab-quvvatlash", description: "Doimo aloqadamiz va har qanday savolga javob beramiz" },
    { icon: BadgeCheck, title: "Rasmiy distribyutor", description: "Jahon brendlarining rasmiy vakili" },
  ] : [
    { icon: Shield, title: "3 года гарантии", description: "Официальная гарантия 3 года на всю продукцию" },
    { icon: Award, title: "Сертифицированное качество", description: "Продукция соответствует международным стандартам ISO" },
    { icon: Wrench, title: "Профессиональный монтаж", description: "Качественная установка опытными специалистами" },
    { icon: Clock, title: "Быстрая доставка", description: "Бесплатная доставка по Ташкенту в течение 24 часов" },
    { icon: Headphones, title: "Поддержка 24/7", description: "Всегда на связи и готовы ответить на любые вопросы" },
    { icon: BadgeCheck, title: "Официальный дистрибьютор", description: "Официальный представитель мировых брендов" },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{lang === 'uz' ? 'Afzalliklar' : 'Преимущества'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t?.whyChooseUs.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t?.whyChooseUs.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
