import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table';
import categoriesServices from '../services/actions';
import { useEffect, useState } from 'react';
import { Category } from '../interfaces/category';

export const CategoryTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    setIsLoading(true);
    const data = await categoriesServices.getAllCategories();
    setIsLoading(false);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
            {categories.map(({ id, name, description }) => (
              <TableRow key={id}>
                <TableCell>
                  <p className='font-semibold'>{id}</p>
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell width={300}>
                  <p className='line-clamp-2'>{description}</p>
                </TableCell>
                <TableCell>2025-01-01</TableCell>
                <TableCell>2025-02-02</TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <button className='btn btn-primary'>Editar</button>
                    <button className='btn btn-danger'>Eliminar</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
