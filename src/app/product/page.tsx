import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function ProductPage() {
  return (
    <main className="min-h-dvh bg-white text-[#050505] font-(family-name:--font-sans) transition-colors duration-500 dark:bg-[#080a09] dark:text-[#f4f6f1]">
      <section className="mx-auto w-full max-w-370 px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-36 lg:px-14">
        <div className="space-y-40 sm:space-y-52 lg:space-y-60">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
