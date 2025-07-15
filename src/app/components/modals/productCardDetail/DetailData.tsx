import { IProduct } from "@/domain/product/Product";
import SizeSelector from "../SizeSelector";

interface DetailDataProps {
  productData: IProduct;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const DetailData = ({
  productData,
  selectedSize,
  setSelectedSize,
}: DetailDataProps) => {
  return (
    <div className="space-y-4 md:h-4/5 md:overflow-auto self-center flex flex-col pr-5 pt-5">
      <h1 className="text-xl font-extrabold text-secondary">
        {productData.name}
      </h1>
      {productData.category !== "electronics" &&
        productData.category !== "jewelery" && (
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        )}
      <div className="pt-6">
        <h1 className="text-lg pb-4">Descripción</h1>
        <p className="text-lg text-gray-500 leading-5">
          {productData.description}
        </p>
      </div>
    </div>
  );
};

export default DetailData;
