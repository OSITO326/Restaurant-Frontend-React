import { isAxiosError } from 'axios';
import restaurantDB from '../../../lib/api/restaurantDB';
import { CategoriesResponse } from '../interfaces/categoriesResponse';
import { CreateCategoryOptions } from '../interfaces/createCategoryOptions';
import { handleActionError } from '../../../lib/helpers';

const getAllCategories = async () => {
  const { data } = await restaurantDB.get<CategoriesResponse>('/categories');
  return data.categories;
};

const createCategory = async (category: CreateCategoryOptions) => {
  try {
    const { data } = await restaurantDB.post('/categories', category);
    return {
      data,
      error: null,
    };
  } catch (error) {
    return handleActionError(
      error,
      'An error occurred while creating the category',
    );
  }
};

export default { createCategory, getAllCategories };
