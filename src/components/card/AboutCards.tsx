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
                <h3 className="font-semibold text-[34px] text-titleColor">{t("about_cards")}</h3>
                <div className="h-px w-79 bg-lineColor mt-[14px]"></div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-12.5">
                {
                    aboutcardsData().map((card: { index: number; image: string; title: string; description: string; description2?: string }, index: number) => (
                        <div key={index} className="flex items-start gap-8 border rounded-[20px] bg-mainColor pt-[30px] px-[34px] pb-[47px]">
                            <img src={card.image} />
                            <div className="text-white">
                                <h2 className="font-bold text-[19px]">{card.title}</h2>
                                <h3 className="text-[16px] pt-5">{card.description}</h3>
                                {card?.description2 && <h3 className="text-[16px]">{card.description2}</h3>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutCards