import { useMutation } from '@tanstack/react-query';
import categoriesServices from '../services/actions';
import { queryClient } from '../../../main';
import { Category } from '../interfaces/category';
import { SubmitHandler } from 'react-hook-form';

export const useCreateCategory = (reset: () => void) => {
  // const { data, isSuccess, mutate, isPending } = useMutation({
  const { mutate, isPending } = useMutation({
    mutationFn: categoriesServices.createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      reset();
    },
  });
  // console.log(data); // mostrar los datos
  const onSubmit: SubmitHandler<Category> = (data, event) => {
    const { name, description } = data;
    event?.preventDefault();
    mutate({ name, description });
  };

  return {
    // data,
    // isSuccess,
    mutate,
    isPending,
    onSubmit,
  };
};
