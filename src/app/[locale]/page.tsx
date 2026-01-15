import { AboutCards, ProductCard } from "@/src/components/card";
import SimpleSlider from "@/src/components/carousel/MainCarousel";
import { Container } from "@/src/components/container";
import { YandexMap } from "@/src/components/map";
import { CategoryTabs } from "@/src/components/tabs";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations()
  return (
    <div>
      <SimpleSlider />
      <Container>
        <CategoryTabs />
        <ProductCard />
        <AboutCards />
        <YandexMap />
      </Container>
    </div>
  );
}
