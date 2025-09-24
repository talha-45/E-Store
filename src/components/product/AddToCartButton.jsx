"use client";

import { useCart } from "@/components/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
    >
      Add to Cart
    </button>
  );
}

