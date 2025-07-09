import { ProductService } from "@/lib/api/services/ProductsServices";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsList = () => {
  const query = useQuery({
    queryKey: ["get-products"],
    queryFn: () => ProductService.getAllProducts(),
  });
  return {
    productsListResponse: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};

export const useGetProductsListByCollection = (collection: string) => {
  const query = useQuery({
    queryKey: ["get-products", collection],
    queryFn: () => ProductService.getProductsByCollection(collection),
  });
  return {
    productsListResponse: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};

export const useGetProductById = (id: string) => {
  const query = useQuery({
    queryKey: ["get-product", id],
    queryFn: () => ProductService.getProductById(id),
  });
  return {
    productResponse: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
