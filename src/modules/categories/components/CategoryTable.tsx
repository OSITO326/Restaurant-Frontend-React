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

export const CategoryTable = () => {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <section className='min-h-[80vh] flex items-center justify-center'>
        <p>Cargando...</p>
      </section>
    );
  }

  return (
    <section>
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
            {categories!.map(({ id, name, description }) => (
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
                <TableCell>2025-01-01</TableCell>
                <TableCell>2025-02-02</TableCell>
                <TableCell>
                  <DeleteCategoryModal categoryId={id} />
                  <EditCategoryModal category={{ id, name, description }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
