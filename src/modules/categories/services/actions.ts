import restaurantDB from '../../../lib/api/restaurantDB';
import { CategoriesResponse } from '../interfaces/categoriesResponse';

const getAllCategories = async () => {
  const { data } = await restaurantDB.get<CategoriesResponse>('/categories');
  return data.categories;
};

export default { getAllCategories };
