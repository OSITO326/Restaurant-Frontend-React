import { Outlet } from 'react-router';
import { SideBar } from '../components/SideBar';

export const AdminLayout = () => {
  return (
    <div className='flex h-screen'>
      {/* TOASTER */}
      {/* SIDEMENU */}
      <SideBar />
      {/* CONTENIDO */}
      <div className='flex w-full h-screen overflow-y-auto'>
        <main className='w-full'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
