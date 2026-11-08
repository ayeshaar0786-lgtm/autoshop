"use client";

export default function AddToCart({ product }) {
  function handleAddToCart() {
    const savedCart = JSON.parse(localStorage.getItem("autoShopCart") || "[]");
    const existingItem = savedCart.find((item) => item.id === product.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = savedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...savedCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("autoShopCart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart`);
  }

  if (!product) return null;

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="rounded-lg bg-orange-600 px-5 py-3 font-bold text-white transition hover:bg-orange-700"
    >
      Add to Cart
    </button>
  );
}