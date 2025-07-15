"use client";
import { useNoScroll } from "@/app/hooks/useNoScroll";
import { createContext, useState } from "react";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  modalToShow: React.ReactNode | null;
  setModalToShow: (value: React.ReactNode | null) => void;
  productId: number | null;
  setProductId: (value: number | null) => void;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  modalToShow: null,
  setIsOpen: () => {},
  setModalToShow: () => {},
  productId: null,
  setProductId: () => {},
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalToShow, setModalToShow] = useState<React.ReactNode | null>(null);
  const [productId, setProductId] = useState<number | null>(null);

  useNoScroll(isOpen);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        modalToShow,
        setModalToShow,
        productId,
        setProductId,
      }}
    >
      {children}
      {isOpen && (
        <div className="z-20 fixed inset-0 backdrop-blur-sm flex items-center justify-center rounded-2xl">
          {modalToShow}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
