import { useCartProductsContext } from "@/app/context/CartProductsProvider";
import Image from "next/image";

export const CartSummary = ({
  onClose,
  onPurchase,
}: {
  onClose: () => void;
  onPurchase: () => void;
}) => {
  const { getCartTotal, getTotalProductsInCart } = useCartProductsContext();
  const cartTotal = getCartTotal();
  const totalProductsInCart = getTotalProductsInCart();

  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center">
        <p className="text-lg font-medium text-center">
          Información del pedido
        </p>
        <button
          className="text-gray-500 hover:text-gray-700 hidden"
          onClick={onClose}
        >
          <Image src="/close-icon.svg" alt="close" width={20} height={20} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-background-icon rounded-lg p-2">🎲</span>
          <p>
            Productos ({totalProductsInCart}): $ {cartTotal.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-background-icon rounded-lg p-2">💰</span>
          <p>Impuestos: $ {(cartTotal * 0.16).toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-2">
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">
            $ {(cartTotal + cartTotal * 0.16).toFixed(2)}
          </p>
        </div>
      </div>

      <button
        onClick={onPurchase}
        className="w-full bg-primary text-white py-2 rounded-lg hover:cursor-pointer hover:bg-hover-primary"
      >
        Comprar
      </button>
    </div>
  );
};
