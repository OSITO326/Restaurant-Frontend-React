import { Loading } from '../../core/components/Loading';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  const { products, isLoading } = useProducts();

  return (
    <section>
      <Loading isLoading={isLoading} message='Cargando productos' />
      {!isLoading && (
        <div className='container'>
          <ul className='product__list'>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
