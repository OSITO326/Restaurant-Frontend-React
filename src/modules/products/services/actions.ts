import restaurantDB from '../../../lib/api/restaurantDB';
import { handleActionError } from '../../../lib/helpers';
import { ProductsResponse } from '../interfaces/productsResponse';

const getAllProducts = async (page: number = 1, limit: number = 5) => {
  try {
    const { data } = await restaurantDB.get<ProductsResponse>('/products', {
      params: {
        page,
        limit,
      },
    });
    return data;
  } catch (error) {
    return handleActionError(
      error,
      'An error occurred while getting the products',
    );
  }
};

export default { getAllProducts };
