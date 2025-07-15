import React from "react";

interface SizeSelectorProps {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const sizeOptions = [
  { id: 1, size: "S" },
  { id: 2, size: "M" },
  { id: 3, size: "L" },
  { id: 4, size: "XL" },
];

const SizeSelector = ({ selectedSize, setSelectedSize }: SizeSelectorProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="text-xs font-semibold">Talla</p>
        <div className="flex gap-2">
          {sizeOptions.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.size)}
              className={`cursor-pointer w-6 h-9 p-0.5 flex items-center justify-center rounded-lg ${
                selectedSize === size.size
                  ? "bg-primary text-white"
                  : "bg-white text-black"
              }`}
            >
              {size.size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl bg-white rounded-lg p-1">🎨</span>
        <p className="text-xs font-semibold">Color</p>
      </div>
    </div>
  );
};

export default SizeSelector;
