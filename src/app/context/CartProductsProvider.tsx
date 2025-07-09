"use client";

import { IProduct } from "@/domain/product/Product";
import { createContext, useContext, useEffect, useState } from "react";

interface CartProductsContextType {
  cartProducts: IProduct[];
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (productId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

const CartProductsContext = createContext<CartProductsContextType>({
  cartProducts: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
});

const STORAGE_KEY = "CartProducts";

export const useCartProductsContext = () => useContext(CartProductsContext);

export const CartProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartProducts));
    } catch (error) {
      console.error("Error saving captured pokemons:", error);
    }
  }, [cartProducts]);

  const addProductToCart = (product: IProduct) => {
    setCartProducts((prev) => {
      const existingProductIndex = prev.findIndex((p) => p.id === product.id);

      if (existingProductIndex !== -1) {
        return prev.map((p, index) =>
          index === existingProductIndex
            ? { ...p, quantity: p.quantity! + 1 }
            : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeProductFromCart = (productId: string) => {
    setCartProducts((prev) =>
      prev.filter((product) => product.id !== Number(productId))
    );
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  const getCartTotal = () => {
    return cartProducts.reduce(
      (total, product) => total + product.price * product.quantity!,
      0
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setCartProducts((prev) =>
      prev.map((product) =>
        product.id === Number(productId)
          ? { ...product, quantity: product.quantity! + 1 }
          : product
      )
    );
  };

  const decreaseProductQuantity = (productId: string) => {
    setCartProducts((prev) =>
      prev
        .map((product) =>
          product.id === Number(productId) && product.quantity === 1
            ? null
            : product.id === Number(productId)
            ? { ...product, quantity: product.quantity! - 1 }
            : product
        )
        .filter((product): product is IProduct => product !== null)
    );
  };

  const value = {
    cartProducts,
    addProductToCart,
    removeProductFromCart,
    clearCart,
    getCartTotal,
    increaseProductQuantity,
    decreaseProductQuantity,
  };

  return (
    <CartProductsContext.Provider value={value}>
      {children}
    </CartProductsContext.Provider>
  );
};
