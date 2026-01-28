"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "@/lib/i18n/LanguageContext";


const testimonials = [
  {
    id: 1,
    content: {
      uz: "Powertech bilan ishlash juda qulay bo'ldi. Professional jamoalari bizning korxonamiz uchun mukammal yechim topdi. Endi kirish-chiqish nazorati to'liq avtomatlashtirilgan.",
      ru: "Работать с Powertech было очень удобно. Их профессиональная команда нашла идеальное решение для нашей компании. Теперь контроль доступа полностью автоматизирован.",
    },
    author: "Rustam Qodirov",
    role: {
      uz: "Kompaniya direktori",
      ru: "Директор компании",
    },
    company: "Atlas Group",
    rating: 5,
  },
  {
    id: 2,
    content: {
      uz: "Uy uchun avtomatik darvoza o'rnatdik. Sifati ajoyib, kafolat muddati ham uzoq. Eng muhimi, texnik xizmat ko'rsatish juda tez va sifatli.",
      ru: "Установили автоматические ворота для дома. Качество отличное, гарантийный срок длительный. Самое главное - техническое обслуживание очень быстрое и качественное.",
    },
    author: "Malika Saidova",
    role: {
      uz: "Uy egasi",
      ru: "Домовладелица",
    },
    company: "Toshkent",
    rating: 5,
  },
  {
    id: 3,
    content: {
      uz: "Bizning mehmonxona uchun xavfsizlik tizimini to'liq yangiladik. Powertech jamoasining professionalligi va mas'uliyatliligidan juda mamnunmiz.",
      ru: "Полностью обновили систему безопасности для нашего отеля. Мы очень довольны профессионализмом и ответственностью команды Powertech.",
    },
    author: "Bobur Alimov",
    role: {
      uz: "Boshqaruvchi",
      ru: "Управляющий",
    },
    company: "Grand Hotel",
    rating: 5,
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  const sliderSettings = {
    // autoplay: true,
    // autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    dots: true,
  };

  const currentLabels = t?.testimonials;

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[150px]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            {currentLabels?.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {currentLabels?.title}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {currentLabels?.description}
          </p>
        </motion.div>


        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-2">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  const { lang } = useLanguage();

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
      <Quote className="w-10 h-10 text-cyan-400/50 mb-4" />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      <p className="text-white/80 mb-6 leading-relaxed">
        &ldquo;{testimonial.content[lang]}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-primary font-bold">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.author}</p>
          <p className="text-white/60 text-sm">
            {testimonial.role[lang]}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
