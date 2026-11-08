"use client";

import { useEffect, useState } from "react";
import { products, formatPrice } from "../../data/products";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem("auto-shop-cart") || "[]"));
    } catch {
      setCart([]);
    }
  }, []);

  function removeItem(id) {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("auto-shop-cart", JSON.stringify(updated));
  }

  const rows = cart
    .map((item) => ({
      ...item,
      product: products.find((product) => product.id === item.id),
    }))
    .filter((item) => item.product);

  const total = rows.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  function orderOnWhatsApp() {
    const lines = rows.map(
      (item) => `${item.product.name} x ${item.quantity} - ${formatPrice(item.product.price)}`
    );
    const message = encodeURIComponent(
      `Auto Shop order:\n${lines.join("\n")}\nTotal: ${formatPrice(total)}`
    );
    window.open(`https://wa.me/923226026388?text=${message}`, "_blank");
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="text-4xl font-black">Your Cart</h1>

      {rows.length === 0 ? (
        <div className="mt-6 rounded-xl bg-white p-8 shadow">
          <p>Your cart is empty.</p>
          <a href="/shop" className="mt-4 inline-block font-bold text-orange-700">Browse Vehicles</a>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {rows.map((item) => (
            <article key={item.id} className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-4 shadow">
              <img src={item.product.image} alt={item.product.name} className="h-24 w-28 rounded-lg object-cover" />
              <div className="flex-1">
                <h2 className="font-bold">{item.product.name}</h2>
                <p>{formatPrice(item.product.price)} x {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="font-semibold text-red-600">Remove</button>
            </article>
          ))}

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-xl font-black">Total: {formatPrice(total)}</p>
            <button onClick={orderOnWhatsApp} className="mt-4 rounded-lg bg-green-700 px-5 py-3 font-bold text-white">
              Order on WhatsApp
            </button>
          </div>
        </div>
      )}
    </main>
  );
}