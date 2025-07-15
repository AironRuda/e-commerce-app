"use client";

import { useContext, useState } from "react";
import { ModalContext } from "./provider";
import Image from "next/image";
import CartResume from "./CartResume";
import { useGetProductById } from "@/hooks/products/useProducts";
import StatusLoading from "../status/StatusLoading";
import StatusError from "../status/StatusError";
import StatusNotfound from "../status/StatusNotfound";
import { useFavProductsContext } from "@/app/context/FavProductsProvider";
import { useCartProductsContext } from "@/app/context/CartProductsProvider";
import DetailPhoto from "./productCardDetail/DetailPhoto";
import DetailData from "./productCardDetail/DetailData";

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
      <div className="md:flex md:flex-col bg-white shadow-lg rounded-2xl p-5 max-w-4xl w-full relative max-h-full md:max-h-[80dvh] md:w-3/5 overflow-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute hidden md:block top-7 right-7 text-gray-500 hover:text-gray-700"
        >
          <Image src="/close-icon.svg" alt="close" width={20} height={20} />
        </button>

        <article className="w-full pb-15 md:pb-0 flex flex-col md:grid md:grid-cols-2 md:h-[50dvh] gap-6">
          <DetailPhoto
            productData={productResponse}
            isProductFav={isProductFav}
            setIsOpen={setIsOpen}
            handleFavProduct={handleFavProduct}
          />
          <DetailData
            productData={productResponse}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </article>
        <div className="md:hidden fixed w-full bottom-0 left-0 p-5">
          <button
            className="bg-primary w-full flex items-center justify-around text-white py-3 rounded-lg hover:bg-hover-primary"
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
        <div className="hidden md:flex md:self-end mt-5 w-3/4 gap-4">
          <button
            className="bg-white w-1/2 border-2 px-4 py-2 rounded-lg text-black hover:bg-hover-cancel-button hidden md:block"
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
    );
  };
  return renderProductState();
};

export default ProductDetail;
