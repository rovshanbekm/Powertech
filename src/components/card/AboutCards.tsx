"use client"
import { aboutcardsData } from "@/src/data/aboutcards-data";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";


export const AboutCards = () => {
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
        <div ref={ref}
            className={`transition-all duration-1000 ease-out mt-40  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-semibold text-[20px] text-center md:text-[34px] text-titleColor">{t("about_cards")}</h3>
                <div className="h-px w-[111px] md:w-79 bg-lineColor mt-[14px]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12.5">
                {
                    aboutcardsData().map((card: { index: number; image: string; title: string; description: string; description2?: string }, index: number) => (
                        <div key={index} className=" border rounded-[20px] bg-mainColor p-5 lg:pt-[30px] lg:px-[34px] xl:pb-[47px]">
                            <div className="flex flex-col lg:flex-row items-start gap-2.5 lg:gap-8">
                                <img src={card.image} />
                                <h2 className="font-semibold lg:font-bold text-white text-[15px] lg:text-[19px]">{card.title}</h2>
                            </div>
                            <div className="text-white xl:pl-[80px]">
                                <h3 className="text-[10px] leading-5 lg:text-[16px]  lg:leading-[100%] pt-1.5 lg:pt-5">{card.description}</h3>
                                {card?.description2 && <h3 className="text-[10px]  leading-5 lg:text-[16px] lg:leading-[100%]">{card.description2}</h3>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutCards