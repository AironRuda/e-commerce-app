import Image from "next/image";
import ProductCard from "./ProductCard";
import { useGetProductsList } from "@/hooks/products/useProducts";
import StatusLoading from "./status/StatusLoading";
import StatusError from "./status/StatusError";
import StatusNotfound from "./status/StatusNotfound";

const ProductsTable = () => {
  const { productsListResponse, isError, isLoading } = useGetProductsList();

  const renderProductsState = () => {
    if (isLoading) {
      return <StatusLoading />;
    }
    if (isError) {
      return <StatusError />;
    }
    if (!productsListResponse?.length) {
      return <StatusNotfound />;
    }
    return (
      <section className="w-full">
        <header className="flex justify-between md:justify-start  py-4">
          <div className="flex items-center">
            <p className="text-2xl font-bold">Top ventas</p>
            <Image
              src="/chevron-down-icon.svg"
              alt="chevron-down"
              width={30}
              height={30}
            />
          </div>
          <div className="flex items-center md:pl-8">
            <p className="text-2xl font-bold text-gray-500">Explorar</p>
            <Image
              style={{ transform: "rotate(270deg)" }}
              src="/chevron-down-icon.svg"
              alt="chevron-down"
              width={30}
              height={30}
            />
          </div>
        </header>
        <ul className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {productsListResponse?.map((product) => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </section>
    );
  };
  return renderProductsState();
};

export default ProductsTable;
