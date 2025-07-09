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
    <div className="col-span-1 flex flex-col items-center gap-8 bg-white rounded-2xl p-8 w-full md:w-1/2 md:h-3/5 shadow-2xl">
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
        <div className="flex justify-between gap-4">
          <p>Comercio</p>
          <p>Acme S.A</p>
        </div>
        <div className="flex justify-between gap-4">
          <p>Referencia</p>
          <p>FE1658568</p>
        </div>
        <div className="flex justify-between gap-4 text-lg font-bold">
          <p>Total</p>
          <p>$ {(cartTotal + cartTotal * 0.16).toFixed(2)}</p>
        </div>
      </div>
      <button
        className="bg-white text-xl font-bold rounded-2xl p-2 w-1/2 border-2 border-gray-500"
        onClick={() => handleFinishBuyProcess()}
      >
        Descargar comprobante
      </button>
    </div>
  );
};

export default PurchaseReceipt;
