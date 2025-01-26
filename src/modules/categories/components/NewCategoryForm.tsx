import { Button } from '@heroui/button';
import { Input } from '@heroui/input';

export const NewCategoryForm = () => {
  return (
    <section>
      <div className='categories__form'>
        <form className='space-y-6'>
          <h2>Agrega una categoria</h2>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <Input label='Nombre' placeholder='Nombre de la categoria' />
            <Input label='Descripción' placeholder='Agrega una descripción' />
          </div>
          <Button type='submit' color='primary'>
            Guardar
          </Button>
        </form>
      </div>
    </section>
  );
};
