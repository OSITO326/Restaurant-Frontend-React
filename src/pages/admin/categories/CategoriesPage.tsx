import { NewCategoryForm } from '../../../modules/categories/components/NewCategoryForm';
import { TitlePage } from '../../../modules/core/components/TitlePage';

export const CategoriesPage = () => {
  return (
    <>
      <TitlePage title='Categories' description='lorem' />
      <NewCategoryForm />
    </>
  );
};
