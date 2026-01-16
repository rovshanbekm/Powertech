"use client"
import { BgImage, Powertech } from "@/src/assets"
import { LanguageMenu } from "../menu"
import Image from "next/image"
import { Container } from "../container"
import { useEffect, useRef, useState } from "react";
import Link from "next/link"
import { useTranslations } from "next-intl"
import Bg from "../BgImage"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations()
  const segment = useSelectedLayoutSegment()
  const isHome = segment === null

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      {/* <Bg /> */}
      <div
        className={`
        bg-mainColor w-full py-[9px] mt-7.5
        md:py-7.5 md:mt-0
         ${isHome ? "absolute top-[1px] z-20 mt-0" : "relative"}
        md:relative md:top-0
      `}
      >
        <Container>
          <div ref={ref}
            className={`transition-all duration-1000 ease-out flex justify-between items-center ${menuOpen ? "pb-2" : "pb-0"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`} >
            <Link href={"/"}><Image src={Powertech} alt="Powetech" className="w-[158px] h-[15px] md:w-[261px] md:h-[25px]" /></Link>

            <div className="flex md:gap-12.5">
              <Link href={"/contact"} onClick={() => setMenuOpen(false)} className="text-2xl z-50 text-white hidden md:block">{t("contact")}</Link>
              <LanguageMenu />

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-8 h-8 flex flex-col justify-center md:hidden items-center"
              >
                {/* Top line */}
                <span
                  className={`absolute h-[2px] w-6 bg-white transition-all duration-300
                  ${menuOpen ? "rotate-45" : "-translate-y-2"}`}
                />

                {/* Middle line */}
                <span
                  className={`absolute h-[2px] w-6 bg-white transition-all duration-300
                  ${menuOpen ? "opacity-0" : "opacity-100"}`}
                />

                {/* Bottom line */}
                <span
                  className={`absolute h-[2px] w-6 bg-white transition-all duration-300
                  ${menuOpen ? "-rotate-45" : "translate-y-2"}`}
                />
              </button>
            </div>
          </div>
        </Container>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-mainColor
            ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex items-center justify-between pt-[13px] pb-[6px] border-t border-t-white">
            <Container>
              <Link
                href="/contact"
                className="text-white text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {t("contact")}
              </Link>

            </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header