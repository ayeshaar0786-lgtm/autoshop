import { notFound } from "next/navigation";
import { products, formatPrice } from "../../../data/products";
import AddToCart from "../../../components/AddToCart";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2">
      <img src={product.image} alt={product.name} className="h-[420px] w-full rounded-2xl bg-white object-contain p-4 shadow" />

      <section className="rounded-2xl bg-white p-8 shadow">
        <p className="font-bold uppercase text-orange-600">{product.category}</p>
        <h1 className="mt-3 text-4xl font-black">{product.name}</h1>
        <p className="mt-5 text-2xl font-black">{formatPrice(product.price)}</p>
        <p className="mt-5 leading-7 text-slate-600">{product.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <AddToCart product={product} />
          <a href="/shop" className="rounded-lg border px-5 py-3 font-bold">Back to Vehicles</a>
        </div>
      </section>
    </main>
  );
}