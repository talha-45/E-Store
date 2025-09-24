"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItems) => cartItems.id === item.id);

      if (existingItem) {
        return prev.map((cartItems) =>
          cartItems.id === item.id
            ? { ...cartItems,quantity: cartItems.quantity + 1 }
            : cartItems
        );
      }

      return [...prev, { ...item,quantity: 1 }];
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((cartItems) =>
        cartItems.id === id
          ? {
              ...cartItems,
             quantity: cartItems.quantity > 1 ? cartItems.quantity - 1 : 1,
            }
          : cartItems
      )
    );
  };
  
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () =>{
    setCartItems([]);
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,decreaseQuantity,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
