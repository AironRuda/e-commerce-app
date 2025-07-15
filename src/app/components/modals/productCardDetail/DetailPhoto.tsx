import { stringCutter } from "@/app/utils/stringCutter";
import { IProduct } from "@/domain/product/Product";
import Image from "next/image";
import React from "react";

interface DetailPhotoProps {
  productData: IProduct;
  isProductFav: boolean;
  setIsOpen: (value: boolean) => void;
  handleFavProduct: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedSize: string;
}

const DetailPhoto = ({
  productData,
  isProductFav,
  setIsOpen,
  handleFavProduct,
  selectedSize,
}: DetailPhotoProps) => {
  return (
    <div className="relative w-full h-full md:h-[50dvh] md:w-[40dvh] flex flex-col justify-center items-center rounded-2xl bg-white border-2 border-gray-200">
      <div className="w-full h-full min-h-[400px] bg-white p-2 flex flex-col justify-center items-center rounded-2xl">
        <Image
          className="h-full w-full"
          src={productData.image}
          alt="product-image"
          width={400}
          height={400}
        />
      </div>
      <button
        className="rounded-full border-1 border-gray-200 shadow-2xl absolute md:hidden top-[5%] left-[5%]"
        onClick={() => setIsOpen(false)}
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
        className="rounded-full border-1 border-gray-200 shadow-2xl absolute top-[5%] right-[5%] cursor-pointer"
        onClick={handleFavProduct}
      >
        <Image
          className="bg-white p-1 rounded-full "
          src={isProductFav ? "/is-fav-icon.svg" : "/is-not-fav-icon.svg"}
          alt={productData.name}
          width={30}
          height={30}
        />
      </button>

      <div className="absolute bottom-[25%] left-[5%] text-left flex flex-col gap-12">
        <p className="text-3xl font-extrabold text-white text-shadow-[0_0_10px_rgba(0,0,0)]">
          {stringCutter(productData.name, 12)}
        </p>
        <p className="text-2xl font-extrabold text-white text-shadow-[0_0_10px_rgba(0,0,0)]">
          {productData.price} $
          <span className="text-xs font-extrabold pl-2 text-gray-200 text-shadow-[0_0_10px_rgba(0,0,0)]">
            / Talla {selectedSize}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DetailPhoto;
