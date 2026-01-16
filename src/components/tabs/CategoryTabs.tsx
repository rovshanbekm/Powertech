"use client"
import { useGetCategories } from "@/src/api/useCategory";
import sessionStore from "@/src/utils/sessionStore";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export const CategoryTabs = () => {
    const settingsCategoryTab = sessionStore((state) => state.settingsCategoryTab);
    const setSettingsCategoryTab = sessionStore((state) => state.setSettingsCategoryTab);
    const setActiveFilter = sessionStore((state) => state.setActiveFilter);
    const { data: categories, isLoading } = useGetCategories();
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

    const handleReset = () => {
        setSettingsCategoryTab(null);
        setActiveFilter(null);
    };
    return (
        <div ref={ref}
            className={`transition-all duration-1000 ease-out mt-12.5 md:mt-32 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-semibold text-[20px] md:text-[34px] text-titleColor">{t("category")}</h3>
                <div className="h-px w-25 md:w-35 bg-lineColor mt-[14px]"></div>
            </div>
            <div
                className="flex items-center gap-2.5 w-full overflow-x-auto pt-7.5 md:pt-12.5"
                style={{ scrollbarWidth: "none" }}>
                <button
                    onClick={handleReset}
                    className={`rounded-[20px] px-[25px] h-9.5 md:h-12 border text-[13px] md:text-lg text-nowrap cursor-pointer ${settingsCategoryTab === null
                        ? "bg-selectBorderColor text-white border"
                        : "bg-white text-selectBorderColor border-selectBorderColor"
                        }`}
                >
                    {t("all_products")}
                </button>
                {!isLoading &&
                    categories?.map((cat: any) => (
                        <button
                            key={cat.id}
                            onClick={() => setSettingsCategoryTab(cat.slug || cat.id)}
                            className={`h-9.5 md:h-12 rounded-[20px] px-[25px] text-nowrap border text-[13px] md:text-lg cursor-pointer ${settingsCategoryTab === (cat.slug || cat.id)
                                ? "bg-selectBorderColor text-white border"
                                : "bg-white text-selectBorderColor border-selectBorderColor"
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
            </div>
        </div>
    )
}

export default CategoryTabs