import { Button } from '@heroui/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';
import { useDeleteCategory } from '../hooks/useDeleteCategory';
import { Delete02Icon } from 'hugeicons-react';

interface Props {
  categoryId: string;
}

export const DeleteCategoryModal = ({ categoryId }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate, isPending } = useDeleteCategory();
  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        size='sm'
        color='danger'
        variant='light'
        startContent={<Delete02Icon size={20} />}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Eliminar Categoría</ModalHeader>
              <ModalBody>
                <p className='flex justify-center'>
                  ¿Esta seguro de eliminar la categoría?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color='primary'
                  isLoading={isPending}
                  isDisabled={isPending}
                  onPress={() => mutate(categoryId)}
                >
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
