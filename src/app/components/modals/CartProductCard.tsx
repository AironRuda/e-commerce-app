import { stringCutter } from "@/app/utils/stringCutter";
import { IProduct } from "@/domain/product/Product";
import Image from "next/image";
import React from "react";

interface CartProductCardProps {
  product: IProduct;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
}

const CartProductCard = ({
  product,
  decreaseProductQuantity,
  increaseProductQuantity,
}: CartProductCardProps) => {
  const collectionFilterOptions = [
    { icon: "🎮", name: "Tecnología", collectionId: "electronics" },
    { icon: "💎", name: "Joyería", collectionId: "jewelery" },
    { icon: "👚", name: "Ropa Femenina", collectionId: "men's clothing" },
    { icon: "👗", name: "Ropa Masculina", collectionId: "women's clothing" },
  ];

  const getCollectionIcon = (collectionId: string): string => {
    const option = collectionFilterOptions.find(
      (option) => option.collectionId === collectionId
    );
    return option?.icon || "❓";
  };

  return (
    <div className="col-span-1 flex flex-col gap-4 bg-white rounded-2xl p-4 w-full">
      <div className="flex justify-between items-end">
        <div className="h-16 w-16 flex rounded-lg border border-gray-200 items-center justify-center">
          <Image
            className="h-full w-full rounded-lg"
            src={product.image}
            alt="product-image"
            width={100}
            height={100}
          />
        </div>
        <div className="flex-grow pl-4 flex flex-col">
          <p className="text-base font-bold">
            {stringCutter(product.name, 10)}
          </p>
          <p className="text-gray-500 text-xs">
            <span>{getCollectionIcon(product.category)}</span>
            {product.category}
          </p>
          <p className="font-semibold">
            $ {product.price}
            <span className="text-xs font-medium pl-1 text-gray-500">
              / Talla {product.size}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseProductQuantity(product.id.toString())}
          >
            <Image src="/minus-icon.svg" alt="close" width={30} height={30} />
          </button>
          <p>{product.quantity}</p>
          <button
            onClick={() => increaseProductQuantity(product.id.toString())}
          >
            <Image src="/plus-icon.svg" alt="close" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
