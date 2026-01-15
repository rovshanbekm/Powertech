"use client"
import Link from "next/link"
import { Container } from "../container"
import Image from "next/image"
import { Facebook, Instagramm, Powertech, YouTube } from "@/src/assets"
import { useTranslations } from "next-intl"

export const Footer = () => {
    const t = useTranslations()
    return (
        <div className="bg-mainColor py-12.5 mt-20">
            <Container>
                <div className="flex gap-[240px]">
                    <div className="flex gap-15">
                        <div className="w-[370px]">
                            <Link href={"/"}><Image src={Powertech} alt="Powetech" /></Link>
                            <p className="text-white text-sm pt-[26px]">{t("footer_description")}</p>
                        </div>
                        <div className="flex flex-col gap-4.5">
                            <h2 className="font-semibold text-white text-[22px]">{t("footer_title")}</h2>
                            <a href="tel:+886 2 8667 5222" className="text-lg text-white">Tel:+886 2 8667 5222</a>
                            <h4 className="text-lg text-white">Fox: +886 2 8667 5223</h4>
                            <h4 className="text-lg text-white">
                                Email:{" "}
                                <a href="mailto:salesteam.tw@powertech.tw">
                                    salesteam.tw@powertech.tw
                                </a>
                            </h4>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <h3 className="font-semibold text-[22px] text-white">{t("footer_socials")}</h3>
                        <div className="flex gap-4.5 ">
                            <Link href={"/"}><Image src={Facebook} alt="Facebook" /></Link>
                            <Link href={"/"}><Image src={YouTube} alt="YouTube" /></Link>
                            <Link href={"/"}><Image src={Instagramm} alt="Instagramm" /></Link>
                        </div>
                    </div>
                </div>
                <p className="text-[17px] text-white leading-5 pt-25 flex items-center justify-center">{t("footer_copyright")}</p>
            </Container>
        </div>
    )
}

export default Footer