"use client"
import { Powertech } from "@/src/assets"
import { LanguageMenu } from "../menu"
import Image from "next/image"
import { Container } from "../container"
import { useEffect, useRef, useState } from "react";
import Link from "next/link"
import { useTranslations } from "next-intl"

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations()

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
    <div className="bg-mainColor py-7.5" >
      <Container>
        <div ref={ref}
          className={`transition-all duration-1000 ease-out flex justify-between items-center ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} >
          <Link href={"/"}><Image src={Powertech} alt="Powetech" /></Link>
          <div className="flex gap-12.5">
            <Link href={"/contact"} className="text-2xl text-white">{t("contact")}</Link>
            <LanguageMenu />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header