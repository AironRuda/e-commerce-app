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
      className="flex flex-col items-center  bg-white rounded-2xl p-2 h-60 w-48 shadow-xl"
      key={productData.id}
    >
      {showAlert && (
        <AddToFavAlert productData={productData} setShowAlert={setShowAlert} />
      )}
      <div
        className="h-full flex flex-col items-center justify-center"
        onClick={handleShowModal}
      >
        <Image
          className="cursor-pointer  hover:scale-105 transition-discrete duration-300"
          src={productData.image}
          alt={productData.name}
          width={100}
          height={100}
        />
      </div>
      <div className="flex float-end justify-between items-center w-full px-1">
        <div className="cursor-pointer" onClick={handleShowModal}>
          <p className="text-sm font-bold">{stringCutter(productData.name)}</p>
          <p className="text-gray-500 text-sm">$ {productData.price}</p>
        </div>
        <button onClick={handleFavProduct}>
          <Image
            className="cursor-pointer hover:scale-105 transition-discrete duration-300"
            src={isProductFav ? "/is-fav-icon.svg" : "/is-not-fav-icon.svg"}
            alt={productData.name}
            width={30}
            height={30}
          />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
