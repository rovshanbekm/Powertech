import ProductCard from "@/src/components/card/ProductCard";
import { CategoryTabs } from "@/src/components/tabs";

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4">
      <CategoryTabs />
      <ProductCard />
    </main>
  );
}
