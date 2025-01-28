import { CategoryTable } from '../../../modules/categories/components/CategoryTable';
import { NewCategoryForm } from '../../../modules/categories/components/NewCategoryForm';
import { TitlePage } from '../../../modules/core/components/TitlePage';

export const CategoriesPage = () => {
  return (
    <>
      <TitlePage
        title='Categories'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ab? Obcaecati doloremque, tenetur eligendi eaque corporis at, quasi velit ipsum quam nisi aperiam, blanditiis nihil. Debitis earum explicabo reiciendis corrupti.
'
      />
      <NewCategoryForm />
      <CategoryTable />
    </>
  );
};
