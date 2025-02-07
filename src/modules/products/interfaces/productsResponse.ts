import { Product } from './product';

export interface ProductsResponse {
  products: Product[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  total: number;
  page: number;
  lastPage: number;
}
