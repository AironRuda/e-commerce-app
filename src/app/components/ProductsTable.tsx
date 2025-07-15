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
