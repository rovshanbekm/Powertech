'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/ContactForm';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Youtube, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const { t } = useLanguage();


  const contactInfo = [
    { icon: Phone, title: t.contact.infoItems.phone, lines: ['+998 90 815 72 72', '+998 95 383 13 13', '+998 33 955 66 66'], action: { label: t.contact.infoItems.callAction, href: 'tel:+998901234567' } },
    { icon: Mail, title: t.contact.infoItems.email, lines: ['info@Powertech.uz', 'sales@Powertech.uz'], action: { label: t.contact.infoItems.emailAction, href: 'mailto:info@Powertech.uz' } },
    { icon: MapPin, title: t.contact.infoItems.address, lines: ['Toshkent sh., Chilonzor t.,', "Qatortol ko'chasi, 15-uy"], action: { label: t.contact.infoItems.mapAction, href: 'https://maps.google.com' } },
    { icon: Clock, title: t.contact.infoItems.hours, lines: ['Dush-Shan: 09:00 - 18:00', 'Yakshanba: dam olish'] },
  ];
  const [selectedPhone, setSelectedPhone] = useState(
    contactInfo[0].lines[0]
  );


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-primary py-16">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t.contact.title}</h1>
              <p className="text-white/70 max-w-2xl mx-auto">{t.contact.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{t.contact.info.title}</h2>
                <p className="text-muted-foreground mb-8">{t.contact.info.description}</p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-cyan-400/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>

                        {/* 📞 PHONE */}
                        {item.icon === Phone ? (
                          <div className='flex flex-col '>
                            <select
                              value={selectedPhone}
                              onChange={(e) => setSelectedPhone(e.target.value)}
                              className="bg-transparent text-muted-foreground text-sm outline-none cursor-pointer"
                            >
                              {item.lines.map((phone, idx) => (
                                <option key={idx} value={phone}>
                                  {phone}
                                </option>
                              ))}
                            </select>

                            {item.action && (
                              <a
                                href={`tel:${selectedPhone.replace(/\s/g, "")}`}
                                className="inline-flex items-center gap-1 text-cyan-500 text-sm font-medium mt-2 hover:underline"
                              >
                                {item.action.label}
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        ) : (
                          <>
                            {/* 📝 BOSHQA ITEMLAR */}
                            {item.lines.map((line, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm">
                                {line}
                              </p>
                            ))}

                            {item.action && (
                              <a
                                href={item.action.href}
                                className="inline-flex items-center gap-1 text-cyan-500 text-sm font-medium mt-2 hover:underline"
                              >
                                {item.action.label}
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold text-foreground mb-4">{t.contact.social}</h3>
                  <div className="flex gap-3">
                    <a href="https://t.me/powertech0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-400/20 flex items-center justify-center transition-colors" aria-label="Telegram">
                      <Send className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/@maxvision7192" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-400/20 flex items-center justify-center transition-colors" aria-label="YouTube">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/powertech.uz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-400/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
