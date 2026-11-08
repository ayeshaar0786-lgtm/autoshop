import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={product.thumbnail || product.image}
        alt={product.name}
        className="h-60 w-full object-contain"
      />

      <div className="p-5">
        <p className="text-sm font-bold uppercase text-orange-600">
          {product.category}
        </p>

        <h2 className="mt-3 text-lg font-bold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-3 text-xl font-extrabold text-slate-900">
          Rs. {Number(product.price).toLocaleString("en-PK")}
        </p>
      </div>
    </Link>
  );
}