"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "../../data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Teesri listing hamesha ke liye shop grid se remove hai.
  const shopProducts = products.filter((_, index) => index !== 2);

  const categories = [
    "All",
    ...new Set(shopProducts.map((product) => product.category)),
  ];

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return shopProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9">
          <h1 className="text-4xl font-extrabold text-white">Cars and Bikes</h1>
          <p className="mt-2 text-slate-300">
            Browse our available vehicle listings.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search vehicles..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 sm:max-w-sm"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={product.thumbnail || product.image}
                  alt={product.name}
                  className="h-60 w-full bg-white object-contain"
                />

                <div className="p-5">
                  <p className="text-sm font-bold uppercase text-orange-600">
                    {product.category}
                  </p>

                  <h2
                    className="mt-3 text-lg font-bold"
                    style={{ color: "#111827" }}
                  >
                    {product.name}
                  </h2>

                  <p
                    className="mt-3 text-xl font-extrabold"
                    style={{ color: "#111827" }}
                  >
                    Rs. {Number(product.price).toLocaleString("en-PK")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-white p-6 text-slate-800">
            No vehicles found. Try another search.
          </p>
        )}
      </div>
    </main>
  );
}