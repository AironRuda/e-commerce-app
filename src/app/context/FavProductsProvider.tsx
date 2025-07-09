"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "@/domain/product/Product";

interface FavProductsContextType {
  favProducts: IProduct[];
  addFavProduct: (product: IProduct) => void;
  removeFavProduct: (productId: string) => void;
  isFavProduct: (productId: string) => boolean;
}

const FavProductsContext = createContext<FavProductsContextType>({
  favProducts: [],
  addFavProduct: () => {},
  removeFavProduct: () => {},
  isFavProduct: () => false,
});

const STORAGE_KEY = "favProducts";

export const useFavProductsContext = () => useContext(FavProductsContext);

export const FavProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favProducts, setFavProducts] = useState<IProduct[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favProducts));
    } catch (error) {
      console.error("Error saving captured pokemons:", error);
    }
  }, [favProducts]);

  const addFavProduct = (product: IProduct) => {
    setFavProducts((prev) => [...prev, product]);
  };

  const removeFavProduct = (productId: string) => {
    setFavProducts((prev) =>
      prev.filter((storedProduct) => storedProduct.id !== Number(productId))
    );
  };

  const isFavProduct = (productId: string) => {
    return favProducts.some((product) => product.id === Number(productId));
  };

  const value = {
    favProducts,
    addFavProduct,
    removeFavProduct,
    isFavProduct,
  };

  return (
    <FavProductsContext.Provider value={value}>
      {children}
    </FavProductsContext.Provider>
  );
};
