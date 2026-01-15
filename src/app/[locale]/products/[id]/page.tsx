"use client"
import { useGetProductsById } from "@/src/api/useCard";
import { ProductCard } from "@/src/components/card";
import { Container } from "@/src/components/container";
import { Table } from "@/src/components/table";
import { Button } from "@/src/components/ui/button";
import { Separator } from "@radix-ui/react-select";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProductDetail = () => {
    const params = useParams();
    const id = typeof params.id === "string" ? params.id : "";
    const [mainMedia, setMainMedia] = useState<string | null>(null);
    const t = useTranslations()

    const { data, isLoading, error } = useGetProductsById(id);

    //default 1 chi rasm turishi uchun
    useEffect(() => {
        if (data?.images?.length && !mainMedia) {
            setMainMedia(data.images[0].image);
        }
    }, [data, mainMedia]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;


    return (
        <Container>
            <motion.div initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }} className="flex flex-col mt-12.5 gap-24.5">
                <div className=" flex gap-14.25">
                    <div className="h-79 bg-imgBgColor w-140.75 border relative rounded-[15px] overflow-hidden">
                        <img src={mainMedia || data?.images?.[0].image} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[30px] font-semibold">{data?.title}</h1>
                        <Separator className=" bg-bgSepColor h-px" />
                        <p className="text-2xl font-semibold text-mainColor">{Number(data?.price).toLocaleString("uz-UZ")} so'm</p>
                        <Separator className=" bg-bgSepColor h-px" />
                        <p className="text-[15px] text-descriptionColor">{data?.description}</p>
                        <Separator className=" bg-bgSepColor h-px" />
                    </div>
                </div>
                <div className="flex justify-between items-end gap-14.25">
                    <div className="flex gap-4.25 pt-2.5">
                        {data?.images?.map((i: any) => (
                            <div
                                key={i.id}
                                className={`w-20 h-20 rounded-2xl cursor-pointer flex items-center justify-center ${mainMedia === i.image && "border-selectBorderColor border-2"
                                    }`}
                                onClick={() => setMainMedia(i.image)}
                            >
                                <img src={i.image} className="w-full h-full object-contain rounded-2xl" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        <Link href={"/contact"}><Button className="w-150 cursor-pointer h-11 rounded-[22px] bg-mainColor text-white hover:bg-mainColor font-semibold text-lg leading-11">{t("product_request")}</Button></Link>
                        <Separator className=" bg-bgSepColor h-px" />
                    </div>
                </div>
            </motion.div>
            <div className="flex flex-col gap-7.5 mt-12.5">
                <Table
                    title={t("product_specifications")}
                    rows={[
                        { label: t("product_ports"), value: "8× 10/100/1000Mbps RJ45" },
                        { label: t("product_capacity"), value: "16 Gbps" },
                        { label: t("product_address_table"), value: "8K" },
                        { label: t("product_dimensions"), value: "158 × 101 × 25 mm" },
                    ]}
                />

                <Table
                    title={t("product_network_features")}
                    rows={[
                        { label: t("product_support"), value: "802.1Q tegga asoslangan VLAN" },
                        { label: "QoS", value: "802.1p/DSCP ustuvorligi" },
                        { label: t("product_flow_control"), value: "802.3x to'liq dupleks" },
                        { label: t("product_frame"), value: "9 KB gacha" },
                    ]}
                />
            </div>
            <div className="pt-12.5">
                <ProductCard />
            </div>
        </Container>
    );
};

export default ProductDetail;
