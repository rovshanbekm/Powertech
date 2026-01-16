"use client"
import Link from "next/link"
import { Container } from "../container"
import Image from "next/image"
import { Facebook, Instagramm, Powertech, YouTube } from "@/src/assets"
import { useTranslations } from "next-intl"

export const Footer = () => {
    const t = useTranslations()
    return (
        <div className="bg-mainColor py-[35px] lg:py-12.5 mt-20">
            <Container>
                <div className="flex flex-col md:flex-row gap-5 md:gap-15">
                    <div className="w-[300px] xs:w-[326px] md:w-[370px]">
                        <Link href={"/"}><Image src={Powertech} alt="Powetech" /></Link>
                        <p className="text-white text-[12px] md:text-sm pt-[26px]">{t("footer_description")}</p>
                    </div>
                    <div className="flex xl:gap-[240px]">
                        <div className="flex flex-col gap-4.5">
                            <h2 className="font-semibold text-white text-[22px] hidden md:block">{t("footer_title")}</h2>
                            <a href="tel:+886 2 8667 5222" className="text-[12px] md:text-lg text-white">Tel:+886 2 8667 5222</a>
                            <h4 className="text-[12px] md:text-lg text-white">Fox: +886 2 8667 5223</h4>
                            <h4 className="text-[12px] md:text-lg text-white">
                                Email:{" "}
                                <a href="mailto:salesteam.tw@powertech.tw">
                                    salesteam.tw@powertech.tw
                                </a>
                            </h4>

                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <h3 className="font-semibold text-[18px] lg:text-[22px] text-white hidden md:block">{t("footer_socials")}</h3>
                            <div className="flex gap-2 md:gap-4.5 ">
                                <Link href={"/"}><Image src={Facebook} alt="Facebook" className="w-5.5 md:w-8" /></Link>
                                <Link href={"/"}><Image src={YouTube} alt="YouTube" className="w-5.5 md:w-8" /></Link>
                                <Link href={"/"}><Image src={Instagramm} alt="Instagramm" className="w-5.5 md:w-8" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-[17px] text-white leading-5 pt-25 md:flex items-center justify-center hidden">{t("footer_copyright")}</p>
                <div className="h-px w-full bg-footerLineColor mt-12.5 md:hidden"></div>
                <p className="text-[10px] text-white pt-[15px] flex items-center justify-center md:hidden">{t("footer_copyright2")}</p>
            </Container>
        </div>
    )
}

export default Footer