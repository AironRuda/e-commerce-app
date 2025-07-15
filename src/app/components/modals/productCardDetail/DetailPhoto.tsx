import { stringCutter } from "@/app/utils/stringCutter";
import { IProduct } from "@/domain/product/Product";
import Image from "next/image";
import React from "react";

interface DetailPhotoProps {
  productData: IProduct;
  isProductFav: boolean;
  setIsOpen: (value: boolean) => void;
  handleFavProduct: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DetailPhoto = ({
  productData,
  isProductFav,
  setIsOpen,
  handleFavProduct,
}: DetailPhotoProps) => {
  return (
    <div className="relative w-full h-full md:max-h-[50dvh] flex flex-col justify-center items-center rounded-2xl bg-white border-2 border-gray-200">
      <div className="w-full h-full min-h-[400px] md:max-h-[50dvh] p-2 flex flex-col justify-center items-center  ">
        <Image
          className="rounded-2xl h-full w-full"
          src={productData.image}
          alt="product-image"
          width={200}
          height={200}
        />
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="rounded-full border-1 border-gray-200 shadow-2xl absolute md:hidden top-5 left-5"
      >
        <Image
          className="bg-white p-1 rounded-full"
          src="/chevron-down-icon.svg"
          style={{ transform: "rotate(90deg)" }}
          alt="close"
          width={30}
          height={30}
        />
      </button>

      <button
        onClick={handleFavProduct}
        className="rounded-full border-1 border-gray-200 shadow-2xl absolute top-5 right-5 cursor-pointer"
      >
        <Image
          className="bg-white p-1 rounded-full "
          src={isProductFav ? "/is-fav-icon.svg" : "/is-not-fav-icon.svg"}
          alt={productData.name}
          width={30}
          height={30}
        />
      </button>

      <div className="absolute flex items-center justify-around gap-16 bottom-5 left-5 p-2">
        <div className="text-left flex flex-col gap-6">
          <p className="text-3xl font-extrabold text-white text-shadow-[0_0_10px_rgba(0,0,0)]">
            {stringCutter(productData.name, 12)}
          </p>
          <p className="text-2xl font-extrabold text-white text-shadow-[0_0_10px_rgba(0,0,0)]">
            $ {productData.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPhoto;
