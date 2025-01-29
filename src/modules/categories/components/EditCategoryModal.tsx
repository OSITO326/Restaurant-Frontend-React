import { Button } from '@heroui/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';
import { Category } from '../interfaces/category';
import { Input } from '@heroui/input';
import { Edit02Icon } from 'hugeicons-react';
import { useForm } from 'react-hook-form';
import { useEditCategory } from '../hooks/useEditCategory';

interface Props {
  category: Pick<Category, 'id' | 'name' | 'description'>;
}

export const EditCategoryModal = ({ category }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { id, name, description } = category;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      description,
    },
  });
  const { onSubmit, isPending } = useEditCategory(id, onOpenChange);

  return (
    <>
      <Button
        onPress={onOpen}
        startContent={<Edit02Icon size={20} />}
        size='sm'
        color='secondary'
        variant='light'
        isIconOnly
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className='flex flex-col gap-1'>
                Editar categoría
              </ModalHeader>
              <ModalBody>
                <Input
                  label='Nombre'
                  placeholder='Nombre de la categoría'
                  {...register('name')}
                />
                <Input
                  label='Descripción'
                  placeholder='Agrega una descripción'
                  {...register('description')}
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cerrar
                </Button>
                <Button color='primary' type='submit' isLoading={isPending}>
                  Guardar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
