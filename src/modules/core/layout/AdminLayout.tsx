import { Outlet } from 'react-router';

export const AdminLayout = () => {
  return (
    <div className='flex h-screen'>
      {/* TOASTER */}
      {/* SIDEMENU */}
      {/* CONTENIDO */}
      <div className='flex w-full h-screen overflow-y-auto'>
        <main className='w-full'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
