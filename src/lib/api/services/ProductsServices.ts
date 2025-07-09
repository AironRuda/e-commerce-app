import { AxiosRepository } from "@/lib/axios/repository";
import { API_ENDPOINTS } from "../endpoints";
import { ProductMapper } from "@/adapters/product/ProductMapper";
import { IProduct } from "@/domain/product/Product";

export interface IProductDTO {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const apiRepository = new AxiosRepository();

export class ProductService {
  static async getAllProducts(): Promise<IProduct[]> {
    const dtos = await apiRepository.Get<IProductDTO[]>(
      API_ENDPOINTS.PRODUCTS.GET_ALL
    );
    return ProductMapper.toDomainList(dtos);
  }

  static async getProductsByCollection(
    collection: string
  ): Promise<IProduct[]> {
    const dtos = await apiRepository.Get<IProductDTO[]>(
      API_ENDPOINTS.PRODUCTS.GET_BY_COLLECTION(collection)
    );
    return ProductMapper.toDomainList(dtos);
  }

  static async getProductById(id: string): Promise<IProduct> {
    const dto = await apiRepository.Get<IProductDTO>(
      API_ENDPOINTS.PRODUCTS.GET_BY_ID(id)
    );
    return ProductMapper.toDomain(dto);
  }
}
