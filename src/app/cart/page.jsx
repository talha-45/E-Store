"use client";
import { useCart } from "@/components/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, decreaseQuantity, addToCart,clearCart } = useCart();

  if (cartItems.length === 0) {
    return <h2 className="p-6 text-xl">Your cart is empty 🛒</h2>;
  }
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="items-center justify-between border p-4 rounded md:flex"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold ">{item.title}</h2>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-2 py-1 bg-gray-300 rounded cursor-pointer"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="px-2 py-1 bg-gray-300 rounded cursor-pointer"
              >
                +
              </button>
            
              <button onClick={() => removeFromCart(item.id)} className="px-2 bg-red-500 text-white cursor-pointer">
                Remove
              </button>
           </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 border-t flex justify-between items-center">
        <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
        >
          Checkout
        </button>
      </div>
      
    </div>
  );
}


