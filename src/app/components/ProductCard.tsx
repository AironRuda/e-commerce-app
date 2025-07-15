"use client";
import Image from "next/image";
import { ModalContext } from "./modals/provider";
import { useContext, useState } from "react";
import ProductDetail from "./modals/ProductDetail";
import { IProduct } from "@/domain/product/Product";
import { stringCutter } from "../utils/stringCutter";
import { useFavProductsContext } from "../context/FavProductsProvider";
import AddToFavAlert from "./AddToFavAlert";

const ProductCard = ({ productData }: { productData: IProduct }) => {
  const { setIsOpen, setModalToShow, setProductId } = useContext(ModalContext);

  const { addFavProduct, removeFavProduct, isFavProduct } =
    useFavProductsContext();

  const isProductFav = isFavProduct(String(productData.id));

  const handleShowModal = () => {
    setIsOpen(true);
    setProductId(productData.id);
    setModalToShow(<ProductDetail productId={productData.id} />);
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleFavProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isProductFav) {
      removeFavProduct(String(productData.id));
      setShowAlert(false);
    } else {
      setShowAlert(true);
      addFavProduct(productData);
    }
  };

  return (
    <li
      className="flex flex-col items-center justify-between bg-white rounded-xl p-2 h-48 md:h-60 w-full md:w-48 border-gray-500 hover:outline-2 hover:outline-gray-500 hover:shadow-none transition-all duration-150"
      key={productData.id}
      style={{
        boxShadow:
          "8px 8px 20px -1px rgba(0, 0, 0, 0.05), 8px -8px 20px -1px rgba(0, 0, 0, 0.05)",
      }}
    >
      {showAlert && (
        <AddToFavAlert productData={productData} setShowAlert={setShowAlert} />
      )}
      <div
        className="h-3/4 w-full p-2 flex flex-col justify-center items-center rounded-xl border-1 border-gray-100"
        onClick={handleShowModal}
      >
        <Image
          src={productData.image}
          alt={productData.name}
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-between items-center w-full px-1">
        <div className="cursor-pointer" onClick={handleShowModal}>
          <p className="text-xs font-bold md:text-base md:font-extrabold">
            {stringCutter(productData.name, 12)}
          </p>
          <p className="text-gray-400 text-xs font-normal md:text-base md:font-extrabold">
            $ {productData.price}
          </p>
        </div>
        <button onClick={handleFavProduct}>
          <Image
            className="cursor-pointer hover:scale-105 transition-discrete duration-300"
            src={isProductFav ? "/is-fav-icon.svg" : "/is-not-fav-icon.svg"}
            alt={productData.name}
            width={25}
            height={25}
          />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
