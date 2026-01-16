"use client"
import { useEffect, useRef, useState } from "react"
import { useTranslations } from "use-intl"

type Row = {
    label: string
    value: string
}

type Props = {
    title: string
    rows: Row[]
}


export function Table({ title, rows }: Props) {
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
            className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
            <div className="w-full rounded-2xl border border-bgSepColor bg-tableBgColor overflow-hidden">
                <div className="px-6 py-4 font-semibold text-[20px] text-center md:text-start md:text-base md:font-medium text-titleColor">
                    {title}
                </div>

                <div className="border-t border-bgSepColor">
                    <div className="grid grid-cols-2 bg-tableBgColor text-sm text-titleColor">
                        <div className="px-6 py-3 border-r border-bgSepColor">{t("product_title")}</div>
                        <div className="px-6 py-3">{t("product_description")}</div>
                    </div>

                    {rows.map((row, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-2 bg-tableBgColor text-[13px] md:text-sm text-descriptionColor border-t border-bgSepColor"
                        >
                            <div className="px-6 py-4 border-r border-bgSepColor">
                                {row.label}
                            </div>

                            <div className="px-6 py-4">
                                {row.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Table