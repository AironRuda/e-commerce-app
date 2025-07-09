import React from "react";

interface SizeSelectorProps {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const SizeSelector = ({ selectedSize, setSelectedSize }: SizeSelectorProps) => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-lg font-bold">Tallas</p>
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedSize("S")}
          className={`cursor-pointer px-6 py-3 rounded-lg ${
            selectedSize === "S"
              ? "bg-primary text-white"
              : "bg-white text-black"
          }`}
        >
          S
        </button>
        <button
          onClick={() => setSelectedSize("M")}
          className={`cursor-pointer px-6 py-3 rounded-lg ${
            selectedSize === "M"
              ? "bg-primary text-white"
              : "bg-white text-black"
          }`}
        >
          M
        </button>
        <button
          onClick={() => setSelectedSize("L")}
          className={`cursor-pointer px-6 py-3 rounded-lg ${
            selectedSize === "L"
              ? "bg-primary text-white"
              : "bg-white text-black"
          }`}
        >
          L
        </button>
      </div>
    </div>
  );
};

export default SizeSelector;
