"use client"
import { useTranslations } from "next-intl"

export const aboutcardsData = () => {
    const t = useTranslations()
    return [
    {
        index:1,
        image: "/BoxSettings.svg",
        title: t("about_card_title1"),
        description: t("about_card_description1")
    },
    {
        index:2,
        image: "/UserInput.svg",
        title: t("about_card_title2"),
        description: t("about_card_description2"),
        description2: t("about_card_decription2_1")
    },
    {
        index:3,
        image: "/CodeSetup.svg",
        title: t("about_card_title3"),
        description: t("about_card_description3"),
        description2: t("about_card_description3_1")
    },
    {
        index:4,
        image: "/Configuration.svg",
        title: t("about_card_title4"),
        description: t("about_card_description4"),
        description2:t("about_card_description4_1")
    },
]}