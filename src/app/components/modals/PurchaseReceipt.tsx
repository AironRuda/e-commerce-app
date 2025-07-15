import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "./provider";
import { useCartProductsContext } from "@/app/context/CartProductsProvider";

const PurchaseReceipt = () => {
  const { setIsOpen } = useContext(ModalContext);
  const { getCartTotal, clearCart } = useCartProductsContext();

  const cartTotal = getCartTotal();

  const handleFinishBuyProcess = () => {
    setIsOpen(false);
    clearCart();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-card-background rounded-2xl p-6 m-4 w-full md:w-1/3 md:m-0 md:h-[50dvh] shadow-2xl">
      <button
        onClick={() => handleFinishBuyProcess()}
        className=" self-end text-gray-500 hover:text-gray-700"
      >
        <Image src="/close-icon.svg" alt="close" width={20} height={20} />
      </button>
      <div className="flex flex-col items-center gap-2">
        <Image src="/success-icon.svg" alt="close" width={50} height={50} />
        <p className="text-2xl font-bold">Pago realizado</p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between gap-28">
          <p>Comercio</p>
          <p>Acme S.A</p>
        </div>
        <div className="flex justify-between gap-28">
          <p>Referencia</p>
          <p>FE1658568</p>
        </div>
        <div className="flex justify-between gap-28 text-lg font-bold">
          <p>Total</p>
          <p>$ {(cartTotal + cartTotal * 0.16).toFixed(2)}</p>
        </div>
      </div>
      <button
        className="bg-white p-4 rounded-2xl  border-2 border-gray-500"
        onClick={() => handleFinishBuyProcess()}
      >
        <p className="text-xl font-bold">Descargar comprobante</p>
      </button>
    </div>
  );
};

export default PurchaseReceipt;
