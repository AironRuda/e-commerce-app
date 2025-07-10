import ProductCard from "./ProductCard";
import { useGetProductsListByCollection } from "@/hooks/products/useProducts";
import StatusError from "./status/StatusError";
import StatusLoading from "./status/StatusLoading";
import StatusNotfound from "./status/StatusNotfound";

const ProductsTable = ({ collection }: { collection: string }) => {
  const { productsListResponse, isError, isLoading } =
    useGetProductsListByCollection(collection);

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
      <section className="w-full mt-5">
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
