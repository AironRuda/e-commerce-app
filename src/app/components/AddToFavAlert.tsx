"use client";

import { IProduct } from "@/domain/product/Product";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { ModalContext } from "./modals/provider";
import ProductDetail from "./modals/ProductDetail";

interface AddToFavAlertProps {
  productData: IProduct;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToFavAlert = ({ productData, setShowAlert }: AddToFavAlertProps) => {
  const { setIsOpen, setModalToShow, setProductId } = useContext(ModalContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setShowAlert]);

  const handleShowModal = () => {
    setIsOpen(true);
    setProductId(productData.id);
    setModalToShow(<ProductDetail productId={productData.id} />);
  };

  return (
    <div className="mx-3 h-20 rounded-t-2xl md:hidden flex items-center justify-around fixed bottom-1/9 left-0 right-0 z-9 bg-background-icon">
      <Image
        className="cursor-pointer max-w-20 max-h-20 rounded-xl  hover:scale-105 transition-discrete duration-300"
        src={productData.image}
        alt={productData.name}
        width={40}
        height={40}
      />
      <p className="text-white">Agregado a favoritos.</p>
      <Image
        className="cursor-pointer max-w-20 max-h-20 rounded-xl  hover:scale-105 transition-discrete duration-300"
        src="/white-arrow-icon.svg"
        alt="white-arrow-icon"
        width={40}
        height={40}
        onClick={handleShowModal}
      />
    </div>
  );
};

export default AddToFavAlert;
