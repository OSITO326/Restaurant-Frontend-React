import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CategorySchema } from '../validations/categorySchema';
import { Category } from '../interfaces/category';
import { useCreateCategory } from '../hooks/useCreateCategory';

export const NewCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    reset,
  } = useForm<Category>({ resolver: zodResolver(CategorySchema) });
  // console.log(errors);
  const { onSubmit, isPending } = useCreateCategory(reset);

  return (
    <section>
      <div className='categories__form'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <h2>Agrega una categoria</h2>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <Input
              label='Nombre'
              placeholder='Nombre de la categoria'
              {...register('name')}
            />
            {errors.name?.message && (
              <p className='text-sm text-red-700'>{errors.name?.message}</p>
            )}
            <Input
              label='Descripción'
              placeholder='Agrega una descripción'
              {...register('description')}
            />
            {errors.description?.message && (
              <p className='text-sm text-red-700'>
                {errors.description?.message}
              </p>
            )}
          </div>
          <Button
            isLoading={isPending}
            isDisabled={isPending}
            type='submit'
            color='primary'
          >
            Guardar
          </Button>
        </form>
        {/* Show data as JSON */}
        {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
      </div>
    </section>
  );
};
