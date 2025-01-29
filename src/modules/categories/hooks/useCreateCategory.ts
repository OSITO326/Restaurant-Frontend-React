import { useMutation } from '@tanstack/react-query';
import categoriesServices from '../services/actions';
import { queryClient } from '../../../main';

export const useCreateCategory = () => {
  const { data, isSuccess, mutate } = useMutation({
    mutationFn: categoriesServices.createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
  console.log(data);
  return {
    data,
    isSuccess,
    mutate,
  };
};
