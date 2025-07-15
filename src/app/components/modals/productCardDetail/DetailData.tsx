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
    <div className="space-y-2 md:h-3/4 md:overflow-auto self-center flex flex-col px-5">
      <h1 className="text-lg font-semibold text-secondary">
        {productData.name}
      </h1>
      {productData.category !== "electronics" &&
        productData.category !== "jewelery" && (
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        )}
      <div>
        <h1 className="text-lg">Descripción</h1>
        <p className="text-lg text-gray-500">{productData.description}</p>
      </div>
    </div>
  );
};

export default DetailData;
