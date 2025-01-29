import restaurantDB from '../../../lib/api/restaurantDB';
import { CategoriesResponse } from '../interfaces/categoriesResponse';
import { CreateCategoryOptions } from '../interfaces/createCategoryOptions';
import { handleActionError } from '../../../lib/helpers';
import { UpdateCategoryOptions } from '../interfaces/updateCategoryOptions';

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

const deleteCategory = async (id: string) => {
  try {
    const { data } = await restaurantDB.delete(`/categories/${id}`);
    return {
      data,
      error: null,
    };
  } catch (error) {
    return handleActionError(
      error,
      'An error occurred while deleting the category',
    );
  }
};

const updateCategory = async (id: string, category: UpdateCategoryOptions) => {
  try {
    const { data } = await restaurantDB.patch(`/categories/${id}`, category);
    return {
      data,
      error: null,
    };
  } catch (error) {
    return handleActionError(
      error,
      'An error occurred while updating the category',
    );
  }
};

export default {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
};
