import { useCartProductsContext } from "@/app/context/CartProductsProvider";
import Image from "next/image";

export const CartSummary = ({
  onClose,
  onPurchase,
}: {
  onClose: () => void;
  onPurchase: () => void;
}) => {
  const { cartProducts, getCartTotal } = useCartProductsContext();
  const cartTotal = getCartTotal();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Resumen de la compra</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 md:hidden"
        >
          <Image src="/close-icon.svg" alt="close" width={20} height={20} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-background-icon rounded-lg p-2">🎲</span>
          <p>
            Productos ({cartProducts.length}): $ {cartTotal.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-background-icon rounded-lg p-2">💰</span>
          <p>Impuestos: $ {(cartTotal * 0.16).toFixed(2)}</p>
        </div>

        <p className="text-lg font-bold border-t border-gray-200 pt-2">
          Total: $ {(cartTotal + cartTotal * 0.16).toFixed(2)}
        </p>
      </div>

      <button
        onClick={onPurchase}
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-hover-button"
      >
        Comprar
      </button>
    </div>
  );
};
