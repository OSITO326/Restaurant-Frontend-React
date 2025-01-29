import { useMutation } from '@tanstack/react-query';
import categoriesServices from '../services/actions';
import { queryClient } from '../../../main';
import { SubmitHandler } from 'react-hook-form';
import { UpdateCategoryOptions } from '../interfaces/updateCategoryOptions';

export const useEditCategory = (id: string, onSuccessCallback?: () => void) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (category: UpdateCategoryOptions) =>
      categoriesServices.updateCategory(id, category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
  });

  const onSubmit: SubmitHandler<UpdateCategoryOptions> = (data, event) => {
    const { name, description } = data;
    event?.preventDefault();
    mutate({ name, description });
    // mutate({name: data.name, description: data.description})
  };

  return {
    mutate,
    isPending,
    onSubmit,
  };
};
