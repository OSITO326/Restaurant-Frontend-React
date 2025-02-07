import { CategoryTable } from '../../../modules/categories/components/CategoryTable';
import { NewCategoryForm } from '../../../modules/categories/components/NewCategoryForm';
import { TitlePage } from '../../../modules/core/components/TitlePage';

export const CategoriesPage = () => {
  return (
    <>
      <TitlePage
        title='Categorias'
        description='Listado y gestión de categorias.'
      />
      <NewCategoryForm />
      <CategoryTable />
    </>
  );
};
