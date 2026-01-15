"use client"; // Next 13+ app router uchun Client Component

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useTranslations } from "next-intl";

interface YandexMapProps {
    defaultCenter?: [number, number];
    defaultZoom?: number;
}

export const YandexMap = ({
    defaultCenter = [41.29187, 69.22362],
    defaultZoom = 15,
}: YandexMapProps) => {
    const t = useTranslations()
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-27.5 mb-12.5">
                <h3 className="font-semibold text-[34px] text-titleColor">{t("map_title")}</h3>
                <div className="h-px w-35 bg-lineColor mt-[14px]"></div>
            </div>
            <YMaps>
                <Map
                    defaultState={{
                        center: defaultCenter,
                        zoom: defaultZoom,
                    }}
                    width="100%"
                    height="400px"
                >
                    <Placemark geometry={defaultCenter} />
                </Map>
            </YMaps>
        </div>
    );
};

export default YandexMap;
