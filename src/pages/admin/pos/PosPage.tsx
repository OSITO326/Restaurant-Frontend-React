import { CategoryFilter } from '../../../modules/categories/components/CategoryFilter';
import { TitlePage } from '../../../modules/core/components/TitlePage';
import { ProductGrid } from '../../../modules/products/components/ProductGrid';

export const PosPage = () => {
  return (
    <>
      <TitlePage
        title='Punto de venta'
        description='Menu virtual para realizar ventas y ordenes'
      />
      {/* MENU DE CATEGORIAS */}
      <CategoryFilter />
      {/* GRID DE PRODUCTOS */}
      <ProductGrid />
    </>
  );
};
