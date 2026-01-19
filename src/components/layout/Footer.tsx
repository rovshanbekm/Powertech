'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Send, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { AppleIcon, Logo, PlayMarket } from '../assets';
import Image from 'next/image';

export function Footer() {
  const { t, localizedPath } = useLanguage();

  const footerLinks = {
    // products: [
    //   { name: t.footer.links.barriers, href: localizedPath('/products?category=barriers') },
    //   { name: t.footer.links.gates, href: localizedPath('/products?category=gates') },
    //   { name: t.footer.links.remotes, href: localizedPath('/products?category=remotes') },
    //   { name: t.footer.links.security, href: localizedPath('/products?category=security') },
    // ],
    products: [
      { name: t.footer.links.barriers, href: localizedPath('/') },
      { name: t.footer.links.gates, href: localizedPath('/') },
      { name: t.footer.links.remotes, href: localizedPath('/') },
      { name: t.footer.links.security, href: localizedPath('/') },
    ],
    company: [
      { name: t.footer.links.about, href: localizedPath('/about') },
      { name: t.footer.links.contactPage, href: localizedPath('/contact') },
      { name: t.footer.links.installation, href: localizedPath('/installation') },
      { name: t.footer.links.warranty, href: localizedPath('/warranty') },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href={localizedPath('/')} className="flex items-center gap-2 mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg"></span>
              </div> */}
              <Image src={Logo} alt='PowertechLogo' width={40} />
              <span className="font-bold text-xl tracking-tight">Powertech</span>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              {t.footer.description}
            </p>

            {/* Social links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://t.me/powertech0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-400/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>

              <a
                href="https://www.youtube.com/@maxvision7192"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-400/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/powertech.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-cyan-400/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* App badges */}
            <div className="space-y-3">
              <p className="text-white/60 text-xs uppercase tracking-wider">
                {t.footer.getApp}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://apps.apple.com/uz/app/eyeopen-powertech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-cyan-400/30 px-4 py-3 transition-colors"
                  aria-label="Download on the App Store"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-cyan-400/15 flex items-center justify-center transition-colors">
                    <img src={AppleIcon.src} alt="Play Market" className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] text-white/70">
                      {t.footer.downloadOn}
                    </div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=tw.powertech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-cyan-400/30 px-4 py-3 transition-colors"
                  aria-label="Get it on Google Play"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-cyan-400/15 flex items-center justify-center transition-colors">
                    <img src={PlayMarket.src} alt="Play Market" className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] text-white/70">
                      {t.footer.getItOn}
                    </div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.products}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-cyan-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.company}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-cyan-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-cyan-400 shrink-0" />
                <select
                  className="bg-primary/95 text-white/70 text-sm outline-none cursor-pointer"
                  defaultValue="+998339556666"
                  onChange={(e) => {
                    if (e.target.value) {
                      window.location.href = `tel:${e.target.value}`;
                    }
                  }}
                >

                  <option value="+998339556666">
                    +998 33 955 66 66
                  </option>

                  <option value="+998908157272">
                    +998 90 815 72 72
                  </option>

                  <option value="+998953831313">
                    +998 95 383 13
                  </option>
                </select>

              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-cyan-400 shrink-0" />
                <a href="mailto:info@Powertech.uz" className="text-white/70 hover:text-white text-sm">
                  info@Powertech.uz
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-cyan-400 shrink-0" />
                <span className="text-white/70 text-sm">Toshkent sh., Chilonzor t.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href={localizedPath('/')} className="text-white/50 hover:text-white text-sm transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href={localizedPath('/')} className="text-white/50 hover:text-white text-sm transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
