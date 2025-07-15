"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ModalContext } from "./provider";
import ProductDetail from "./ProductDetail";
import CartProductCard from "./CartProductCard";
import PurchaseReceipt from "./PurchaseReceipt";
import { useCartProductsContext } from "@/app/context/CartProductsProvider";
import { CartSummary } from "./CartSummary";

const CartResume = () => {
  const { cartProducts, decreaseProductQuantity, increaseProductQuantity } =
    useCartProductsContext();

  const { setIsOpen, setModalToShow, productId } = useContext(ModalContext);

  const [showResume, setShowResume] = useState(false);

  const handleBackToProductDetail = () => {
    setModalToShow(<ProductDetail productId={productId!} />);
  };

  const handleShowResumeModal = () => {
    setShowResume(true);
  };

  const handleHideResumeModal = () => {
    setShowResume(false);
  };

  const handleShowPurchaseReceipt = () => {
    if (!cartProducts.length) {
      setIsOpen(false);
    } else {
      setModalToShow(<PurchaseReceipt />);
    }
  };

  return (
    <div className="bg-card-background shadow-lg rounded-2xl pt-10 p-5 max-w-4xl w-full h-[100vh] md:h-[70dvh] flex flex-col items-center">
      <div className="flex justify-between w-full">
        <button
          onClick={() => handleBackToProductDetail()}
          className="top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <Image
            src="/left-arrow-icon.svg"
            alt="close"
            width={25}
            height={25}
          />
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className=" hidden md:block top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <Image src="/close-icon.svg" alt="close" width={25} height={25} />
        </button>
      </div>
      <div className="flex md:flex-col items-center gap-2 mb-2 md:mb-6">
        <Image src="/bag-icon.svg" alt="close" width={25} height={25} />
        <p className="text-2xl font-bold">Mi bolsa</p>
      </div>
      <section className="grid grid-cols-1 md:flex md:flex-row md:items-start gap-4 w-full mt-1">
        <div className=" col-span-1 flex flex-col pb-16 md:pb-0 gap-4 h-[70vh] md:h-[45dvh] md:w-1/2 rounded-2xl w-full overflow-y-auto">
          {cartProducts.map((product) => (
            <CartProductCard
              key={product.id}
              product={product}
              decreaseProductQuantity={decreaseProductQuantity}
              increaseProductQuantity={increaseProductQuantity}
            />
          ))}
          <button
            className="flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-lg font-bold">Agregar más productos</p>
            <Image
              src="/black-chevron-icon.svg"
              alt="close"
              width={30}
              height={30}
            />
          </button>
        </div>
        <div className="flex md:hidden fixed w-full bottom-0 left-0 p-5">
          <button
            className="bg-background w-full border px-4 py-2 rounded-2xl text-black hover:bg-hover-cancel-button"
            onClick={() => handleShowResumeModal()}
          >
            <p className="text-lg font-bold">Detalle del pedido</p>
          </button>
        </div>

        <div className="hidden md:w-1/2 md:flex flex-col justify-center gap-8">
          <div className="bg-card-background rounded-2xl p-6">
            <CartSummary
              onClose={() => setIsOpen(false)}
              onPurchase={handleShowPurchaseReceipt}
            />
          </div>
        </div>

        <div
          className={`fixed bottom-0 left-0 right-0 bg-white p-4 rounded-t-2xl shadow-lg transition-all duration-300 z-50 ${
            showResume ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <CartSummary
            onClose={handleHideResumeModal}
            onPurchase={handleShowPurchaseReceipt}
          />
        </div>
        {showResume && (
          <div
            className="modal-backdrop md:hidden"
            onClick={handleHideResumeModal}
          />
        )}
      </section>
    </div>
  );
};

export default CartResume;
