import { Button } from '@heroui/button';

export const SideCart = () => {
  return (
    <div className='side__cart'>
      <h2 className='text-2xl mb-6'>Carrito de compras</h2>
      {/* LISTADO DE PRODUCTOS EN EL CARRITO */}
      <ul></ul>
      <div className='flex-1'></div>
      {/* INFO GENERAL DE LA ORDEN */}
      <div className='space-y-4'>
        <p className='flex justify-between'>
          <span>Nro de items: 6u.</span>
          <span>SubTotal: $30,99</span>
        </p>
        <p className='flex font-semibold justify-between text-xl'>
          <span className='text-black'>Total:</span>
          <span className='text-primary-500'>Total: $30,99</span>
        </p>
        <Button color='primary' fullWidth>
          Generar Orden
        </Button>
      </div>
      {/* CONEXIÓN SOCKET PARA ACTUALIZAR EL CARRITO */}
    </div>
  );
};
