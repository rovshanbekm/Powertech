"use client";
import { useGetFilteredProducts, useGetProducts } from "@/src/api/useCard";
import sessionStore from "@/src/utils/sessionStore";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export const ProductCard = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const settingsCategoryTab = sessionStore((state) => state.settingsCategoryTab);
    const activeFilter = sessionStore((state) => state.activeFilter);
    const parsedActiveFilter = activeFilter ? JSON.parse(activeFilter) : {};

    // Filter params faqat category boshqacha bo‘lsa ishlaydi
    const filterParams = {
        ...parsedActiveFilter,
        category_id: settingsCategoryTab !== "all" ? settingsCategoryTab : undefined,
        enabled: settingsCategoryTab !== "all", // all bo‘lsa false bo‘ladi
    };

    const { data: filteredProducts } = useGetFilteredProducts(filterParams);
    const { data: allProducts } = useGetProducts();

    // Agar all tanlangan bo‘lsa allProducts ishlatiladi
    const list = settingsCategoryTab === "all" ? allProducts : filteredProducts;

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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] pt-7.5 md:pt-12.5">
                {list?.map((item: any) => (
                    <Link
                        href={`/products/${item.id}`}
                        key={item.id}
                        className=" border flex flex-col overflow-hidden"
                    >
                        <img
                            className="w-full h-auto object-cover "
                            src={`${item?.image}`}
                            alt={item?.title}
                        />
                        <div className="flex flex-col  md:gap-1.5 p-2.5">
                            <h2 className="font-medium text-sm text-secondColor line-clamp-1">
                                {item?.title}
                            </h2>
                            {/* {item.description && (
                                <p className="text-[12px] text-placeholderColor line-clamp-1">
                                    {item.description}
                                </p>
                            )} */}
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-[12px] 2xs:text-sm sm:text-[15px] text-mainColor">
                                    {Number(item?.price).toLocaleString("uz-UZ")} so‘m
                                </h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
