import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function ProductPage() {
  return (
    <main className="min-h-dvh bg-[#080a09] text-[#f4f6f1] font-(family-name:--font-sans)">
      <section className="mx-auto w-full max-w-370 px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-36 lg:px-14">
        <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#9fb8b2]">
              Product
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#f4f6f1] sm:text-6xl">
              Interfaces for markets, training systems, and model operations.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#a7aaa2] md:justify-self-end">
            Four shipped product surfaces, arranged as alternating feature cards
            so the work reads like a portfolio wall instead of a grid.
          </p>
        </div>

        <div className="mt-16 space-y-28 sm:mt-20 sm:space-y-36">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
