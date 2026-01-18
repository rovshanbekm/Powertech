import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: " Powertech bilan ishlash juda qulay bo'ldi. Professional jamoalari bizning korxonamiz uchun mukammal yechim topdi. Endi kirish-chiqish nazorati to'liq avtomatlashtirilgan.",
    author: "Rustam Qodirov",
    role: "Kompaniya direktori",
    company: "Atlas Group",
    rating: 5,
  },
  {
    id: 2,
    content: "Uy uchun avtomatik darvoza o'rnatdik. Sifati ajoyib, kafolat muddati ham uzoq. Eng muhimi, texnik xizmat ko'rsatish juda tez va sifatli.",
    author: "Malika Saidova",
    role: "Uy egasi",
    company: "Toshkent",
    rating: 5,
  },
  {
    id: 3,
    content: "Bizning mehmonxona uchun xavfsizlik tizimini to'liq yangiladik.  Powertech jamoasining professionalligi va mas'uliyatliligidan juda mamnunmiz.",
    author: "Bobur Alimov",
    role: "Boshqaruvchi",
    company: "Grand Hotel",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[150px]" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Fikrlar</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Mijozlarimiz fikrlari
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Bizning mijozlarimiz biz haqimizda nima deyishadi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <Quote className="w-10 h-10 text-cyan-400/50 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
