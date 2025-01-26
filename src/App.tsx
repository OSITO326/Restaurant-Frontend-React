import { Route, Routes } from 'react-router';
import { LoginPage } from './pages/auth/LoginPage';
import { NotFound } from './modules/core/components/NotFound';
import { AuthLayout } from './modules/core/layout/AuthLayout';
import { CategoriesPage } from './pages/admin/categories/CategoriesPage';
import { AdminLayout } from './modules/core/layout/AdminLayout';

function App() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login' element={<LoginPage />} />
      </Route>

      {/* DASHBOARD */}
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='categories' element={<CategoriesPage />} />
      </Route>

      {/* NOT FOUND */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
