import { motion } from 'framer-motion';

const partners = [
  { name: 'FAAC', logo: 'FAAC' },
  { name: 'CAME', logo: 'CAME' },
  { name: 'NICE', logo: 'NICE' },
  { name: 'BFT', logo: 'BFT' },
  { name: 'DOORHAN', logo: 'DOORHAN' },
  { name: 'HORMANN', logo: 'HORMANN' },
];

export function Partners() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm">Hamkorlarimiz va distribyutorlik brendlari</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 bg-card rounded-lg border border-border hover:border-cyan-400/30 transition-colors"
            >
              <span className="text-xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                {partner.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
