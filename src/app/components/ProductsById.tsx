import { useGetProductById } from "@/hooks/products/useProducts";
import StatusError from "./status/StatusError";
import StatusLoading from "./status/StatusLoading";
import StatusNotfound from "./status/StatusNotfound";
import ProductCard from "./ProductCard";

const ProductsById = ({ productId }: { productId: string }) => {
  const { productResponse, isLoading, isError } = useGetProductById(productId);

  const renderProductState = () => {
    if (isLoading) {
      return <StatusLoading />;
    }
    if (isError) {
      return <StatusError />;
    }
    if (!productResponse?.id) {
      return <StatusNotfound />;
    }
    return (
      <div className="flex items-center justify-center pt-15">
        <ProductCard productData={productResponse} key={productResponse.id} />
      </div>
    );
  };

  return renderProductState();
};

export default ProductsById;
