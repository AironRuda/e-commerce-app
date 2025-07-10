"use client";

import { useContext, useState } from "react";
import { ModalContext } from "./provider";
import Image from "next/image";
import CartResume from "./CartResume";
import { useGetProductById } from "@/hooks/products/useProducts";
import StatusLoading from "../status/StatusLoading";
import StatusError from "../status/StatusError";
import StatusNotfound from "../status/StatusNotfound";
import { stringCutter } from "@/app/utils/stringCutter";
import SizeSelector from "./SizeSelector";
import { useFavProductsContext } from "@/app/context/FavProductsProvider";
import { useCartProductsContext } from "@/app/context/CartProductsProvider";

const ProductDetail = ({ productId }: { productId: number }) => {
  const { productResponse, isLoading, isError } = useGetProductById(
    String(productId)
  );

  const { setIsOpen, setModalToShow } = useContext(ModalContext);

  const [selectedSize, setSelectedSize] = useState<string>("");

  const { addProductToCart } = useCartProductsContext();

  const handleShowResumeModal = () => {
    setIsOpen(true);
    setModalToShow(<CartResume />);
    addProductToCart(productResponse!);
  };

  const { addFavProduct, removeFavProduct, isFavProduct } =
    useFavProductsContext();

  const isProductFav = isFavProduct(String(productResponse?.id));

  const handleFavProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isProductFav) {
      removeFavProduct(String(productResponse?.id));
    } else {
      addFavProduct(productResponse!);
    }
  };

  const renderProductState = () => {
    if (isLoading) return <StatusLoading />;
    if (isError) return <StatusError />;
    if (!productResponse?.id) return <StatusNotfound />;
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl w-full relative max-h-full md:max-h-[80dvh] overflow-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute hidden md:block top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <Image src="/close-icon.svg" alt="close" width={20} height={20} />
        </button>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <Image
                className="rounded-2xl"
                src={productResponse.image}
                alt="product-image"
                width={400}
                height={400}
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full border-1 border-gray-500 shadow-2xl absolute md:hidden top-4 left-4"
            >
              <Image
                className="bg-white p-1 rounded-full"
                src="/chevron-down-icon.svg"
                style={{ transform: "rotate(90deg)" }}
                alt="close"
                width={40}
                height={40}
              />
            </button>

            <button
              onClick={handleFavProduct}
              className="rounded-full border-1 border-gray-500 shadow-2xl absolute top-4 right-4 cursor-pointer"
            >
              <Image
                className="bg-white p-1 rounded-full "
                src={isProductFav ? "/is-fav-icon.svg" : "/is-not-fav-icon.svg"}
                alt={productResponse.name}
                width={40}
                height={40}
              />
            </button>

            <div className="absolute flex items-center justify-around gap-16 top-1/2 left-1/12 p-2">
              <div className="text-left flex flex-col gap-6">
                <p className="text-3xl font-extrabold text-white text-shadow-[0_0_10px_rgba(0,0,0)]">
                  {stringCutter(productResponse.name, 12)}
                </p>
                <p className="text-2xl font-extrabold text-white text-shadow-[0_0_10px_rgba(0,0,0)]">
                  $ {productResponse.price}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-between">
            <h1 className="text-3xl font-extrabold text-secondary">
              {productResponse.name}
            </h1>
            {productResponse.category !== "electronics" &&
              productResponse.category !== "jewelery" && (
                <SizeSelector
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
              )}

            <p className="text-lg text-gray-500">
              {productResponse.description}
            </p>
            <div className="flex gap-4 justify-end">
              <button
                className="bg-white w-1/2 border-2 px-4 py-2 rounded-2xl text-black hover:bg-hover-cancel-button hidden md:block"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-primary w-full md:w-1/2 flex items-center justify-center text-white px-6 py-3 rounded-lg hover:bg-hover-primary"
                onClick={handleShowResumeModal}
              >
                <Image
                  src="/white-shoping-bag-icon.svg"
                  alt="heart"
                  width={25}
                  height={25}
                />
                <p>Agregar a la bolsa</p>
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  };
  return renderProductState();
};

export default ProductDetail;
