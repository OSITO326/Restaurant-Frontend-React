import categoriesServices from '../services/actions';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoriesServices.getAllCategories(),
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { categories, isLoading, error, refetch, isFetching };
};
