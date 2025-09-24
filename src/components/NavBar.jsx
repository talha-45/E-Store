"use client";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useCart } from "@/components/context/CartContext";
import { useState } from "react";

export default function NavBar({ mobile = false }) {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${
        mobile ? "flex flex-col gap-4" : "flex items-center gap-5"
      }`}
    >
      {/* Navigation Links */}
      <ul
        className={`${
          mobile
            ? "flex flex-col gap-3 font-semibold"
            : "flex items-center gap-3 font-semibold"
        }`}
      >
        <li className={styles.navLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/store">Store</Link>
        </li>
      </ul>

      {/* Cart */}
      <div
        className={`${
          mobile ? "flex " : "hidden md:flex"
        } items-center gap-4`}
      >
        <Link href="/cart">
          <div className="relative">
            <FiShoppingCart
              className="text-gray-700 hover:text-pink-500"
              size={24}
            />
            {cartItems.length > 0 && (
              <span
                className={`${styles.cartBadge}
                absolute -top-3 -right-4
                bg-pink-500 text-white text-xs
                rounded-full w-5 h-5 flex items-center
                justify-center`}
              >
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* User Menu */}
      <div className="relative">
        <FiUser
          size={24}
          className="cursor-pointer text-gray-700 hover:text-pink-500"
          onClick={() => setOpen(!open)}
        />

        {open && (
          <div
            className="absolute mt-2 w-40 
              bg-white border rounded shadow-md z-50
              flex flex-col md:right-0"
          >
            <Link
              href="/profile"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Signup
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
