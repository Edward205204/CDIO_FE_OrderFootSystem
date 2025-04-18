import { useRoutes } from 'react-router';
import { PATH } from './constants/path';
import RegisterLayout from './layouts/register-layout';
import Login from './pages/login';
import MainLayout from './layouts/main-layout';
import Home from '@/pages/home';
import Register from './pages/register';

export default function useReactRouter() {
  const element = useRoutes([
    {
      path: PATH.login,
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: PATH.register,
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: PATH.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    }
  ]);

  return element;
}
