import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table';
import { useCategories } from '../hooks/useCategories';
import { EditCategoryModal } from './EditCategoryModal';
import { DeleteCategoryModal } from './DeleteCategoryModal';
import { formatDate } from '../../../lib/helpers';
import { Loading } from '../../core/components/Loading';

export const CategoryTable = () => {
  const { categories, isLoading } = useCategories();

  // if (isLoading) {
  //   return (
  //     <section className='min-h-[80vh] flex items-center justify-center'>
  //       <p>Cargando...</p>
  //     </section>
  //   );
  // }

  return (
    <section className='min-h-max flex items-center justify-center'>
      <Loading isLoading={isLoading} message='Cargando tabla de categorias' />
      {!isLoading && (
        <div className='container'>
          <Table aria-label='categories'>
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Descripción</TableColumn>
              <TableColumn>F. Creación</TableColumn>
              <TableColumn>F. Actualización</TableColumn>
              <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody emptyContent={<p>No se encontraron categorias</p>}>
              {categories!.map(
                ({ id, name, description, createdAt, updatedAt }) => (
                  <TableRow key={id}>
                    <TableCell>
                      <p>{id}</p>
                    </TableCell>
                    <TableCell>
                      <p>{name}</p>
                    </TableCell>
                    <TableCell width={300}>
                      <p className='line-clamp-2'>{description}</p>
                    </TableCell>
                    <TableCell>
                      <p>{formatDate(createdAt)}</p>
                    </TableCell>
                    <TableCell>
                      <p>{formatDate(updatedAt)}</p>
                    </TableCell>
                    <TableCell>
                      <DeleteCategoryModal categoryId={id} />
                      <EditCategoryModal category={{ id, name, description }} />
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  );
};
