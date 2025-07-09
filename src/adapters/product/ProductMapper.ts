import { IProductDTO } from "@/lib/api/services/ProductsServices";
import { IProduct } from "@/domain/product/Product";

export class ProductMapper {
  static toDomain(dto: IProductDTO): IProduct {
    return {
      id: dto.id,
      name: dto.title,
      price: dto.price,
      description: dto.description,
      category: dto.category,
      image: dto.image,
      rating: dto.rating,
    };
  }

  static toDomainList(dtos: IProductDTO[]): IProduct[] {
    return dtos.map((dto) => this.toDomain(dto));
  }
}
