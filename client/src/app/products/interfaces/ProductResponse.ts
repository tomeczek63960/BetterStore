import { Product } from './product';
export interface ProductResponse {
  prev?: {
    page: number,
    limit: number
  };
  next?: {
    page: number,
    limit: number
  };
  total: {
    page: number,
  };
  response: Product[];
}
