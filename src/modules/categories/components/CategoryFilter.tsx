import { Button } from '@heroui/button';
import { useCategories } from '../hooks/useCategories';
import { Loading } from '../../core/components/Loading';
import { useNavigate } from 'react-router';

export const CategoryFilter = () => {
  const { categories, isLoading } = useCategories();
  const navigate = useNavigate();

  const handleFilter = (slug: string) => {
    navigate(`/admin/pos?category=${slug}`);
  };

  return (
    <section>
      <Loading isLoading={isLoading} message='Cargando categorias...' />
      {!isLoading && (
        <div className='container'>
          <div className='flex items-center gap-4'>
            {categories?.map(({ id, name, slug }) => (
              <Button
                as='li'
                key={id}
                className='px-4 text-lg'
                variant='flat'
                radius='lg'
                onPress={() => handleFilter(slug)}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
